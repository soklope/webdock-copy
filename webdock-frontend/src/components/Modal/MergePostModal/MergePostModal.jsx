import "./MergePostModal.scss"
import { useEffect, useState } from "react";
import fetchAllPostData from "../../../services/fetchAllPostsService";
import formatCustomDate from "../../../helper/formatDate";
import useModalStore from "../../../stores/modalStore";

export default function MergePostModal() {
    const { postParamId, mergePostModalIsOpen, toggleMergeModal } = useModalStore()
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const fetchedData = await fetchAllPostData();
                setAllPosts(fetchedData)
            } catch (error) {
                console.error('Error setting state:', error);
            }
        };

        fetchDataAndSetState();
    }, [postParamId]);

    const handleMerge = async (postId, newParent) => {
        try {
            const response = await fetch(`${window.apiHostName}/v1/createmerge/${postId}/newparent/${newParent}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Post merged successfully', data);
                window.location.href = '/';
            } else {
                console.error('Failed to merge posts');
            }
        } catch (error) {
            console.error('Error updating post status:', error);
        }
    };

    return (
        mergePostModalIsOpen && (
            <div className="merge-post-modal">
                <div className="merge-post-modal__container">
                    <p className="merge-post-modal__close" onClick={() => toggleMergeModal()}>Close</p>
                    {allPosts
                        .filter((post) => postParamId !== post.id)
                        .map((post) => (
                            <div key={post.id} className="merge-post-modal__item">
                                <p>{post.title}</p>
                                <span className="hide-on-mobile">•</span>
                                <p className="hide-on-mobile">{post.Category.category}</p>
                                <span className="hide-on-mobile">•</span>
                                <p className="hide-on-mobile">{formatCustomDate(new Date(post.createdAt))}</p>
                                <button onClick={() => handleMerge(postParamId, post.id)}>Merge</button>
                            </div>
                        ))}
                </div>
            </div>
        )
    )
}