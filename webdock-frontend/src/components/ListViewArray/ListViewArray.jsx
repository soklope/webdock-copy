import { useEffect, useState } from "react";
import fetchAllPostData from "../../services/fetchAllPostsService";
import ListViewPostItem from "../ListViewPostItem/ListViewPostItem"
import usePostArrayStore from "../../stores/postArrayStore";
import formatCustomDate from "../../helper/formatDate";
import { getColorTagFromStatus } from "../../helper/colorFromStatus";

export default function ListViewArray() {

    const { allPosts, setAllPosts, setSustainAllPosts } = usePostArrayStore()

    const [userId, setUserId] = useState(0)
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                const fetchedData = await fetchAllPostData();
                setAllPosts(fetchedData)
                setSustainAllPosts(fetchedData)
            } catch (error) {
                console.error('Error setting state:', error);
            }
        };

        if (user) { // But why?
            setUserId(user.id)
        }
        fetchDataAndSetState();
    }, []);
    
    return (
        <>
            {allPosts.map((post) => (
                <div key={post.id}>
                    <ListViewPostItem
                        title={post.title}
                        category={post.Category && post.Category.category}
                        status={post.Status && post.Status.status !== "My Post" ? post.Status.status : false}
                        numberOfComments={post.Comments && post.Comments.length}
                        totalUpvotes={post.upvoteCount}
                        statusColor={post.Status && getColorTagFromStatus(post.Status.status)}
                        indicatorColor={post.Status && getColorTagFromStatus(post.Status.status)}
                        content={post.content}
                        date={formatCustomDate(new Date(post.createdAt))}
                        id={post.id}
                        // status={true}
                        myOwnStatus={userId === post.user_id ? true : false}
                    />
                </div>
            ))}
        </>
    )
}