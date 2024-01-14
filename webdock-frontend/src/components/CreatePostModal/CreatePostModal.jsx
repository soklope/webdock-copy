import { React, useEffect, useRef, useState } from "react";
import useModalStore from "../../stores/modalStore";

import SelectCategory from "../Modal/SelectCategory/SelectCategory";

import CloseIcon from "../../content/gfx/Icons/close-icon.svg";

import "./CreatePostModal.scss";

export default function CreatePostModal() {
	const categoryArray = [
		{
			id: 1,
			category: "Dashboard Features",
		},
		{
			id: 2,
			category: "Documentation",
		},
		{
			id: 3,
			category: "Billing features",
		},
		{
			id: 4,
			category: "Networking",
		},
		{
			id: 5,
			category: "Hardware and Products",
		},
		{
			id: 6,
			category: "Perfect Server Stacks",
		},
		{
			id: 7,
			category: "Mobile App",
		},
		{
			id: 8,
			category: "Webdock API",
		},
		{
			id: 9,
			category: "Competition",
		},
		{
			id: 10,
			category: "Other",
		},
	];
	const { modalIsOpen, toggleModal } = useModalStore();
	const fileUploadRef = useRef();
	const authToken = localStorage.getItem("authToken");
	const [postData, setPostData] = useState({
		category_id: 0,
		title: "",
		content: "detail",
		image: [],
	});

	const handleCloseModal = () => {
		setSelectedFiles([]);
		setPostData((prevData) => ({
			...prevData,
			image: [],
		}));
		toggleModal();
	};

	const handleFileSelect = (event) => {
		const files = event.target.files;

		setPostData((prevData) => ({
			...prevData,
			image: [...prevData.image, ...files],
		}));
	};

	const removeFile = (fileName) => {
		setPostData((prevData) => ({
			...prevData,
			image: prevData.image.filter((file) => file.name !== fileName),
		}));
	};

	const handleSubmit = async () => {
		try {
			const requestData = {
				category_id: postData.category_id,
				title: postData.title,
				content: postData.content,
				image: postData.image,
			};

			const response = await fetch(
				`${window.apiHostName}/v1/createpost`,
				{
					method: "POST",
					body: JSON.stringify(requestData),
					headers: {
						"Content-Type": "application/json",
						"Authorization": `Bearer ${authToken}`,
					},
				}
			);

			if (response.ok) {
				const result = await response.json();
				const newPostId = result.data.id;
				// redirect til ny post
				window.location.href = `/posts/${newPostId}`;
			} else {
				console.error("Error:", response.status);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<>
			{modalIsOpen ? (
				<div className="modal">
					<section className="modal__bg">
						<div className="modal__container">
							<div className="modal__close">
								<span
									className="modal__close-icon"
									onClick={handleCloseModal}
								></span>
							</div>

							<div>
								<h4 className="modal__title">Category</h4>
								<SelectCategory
									categoryArray={categoryArray}
									onCategoryChange={(category) =>
										setPostData((prevData) => ({
											...prevData,
											category_id: category,
										}))
									}
								/>
							</div>

							<div>
								<h4 className="modal__title">Title</h4>
								<input
									className="modal__input"
									type="text"
									placeholder="Short, descriptive title"
									value={postData.title}
									onChange={(event) =>
										setPostData((prevData) => ({
											...prevData,
											title: event.target.value,
										}))
									}
								/>
							</div>

							<div>
								<h4 className="modal__title">Description</h4>
								<textarea
									className="modal__desc"
									type="text"
									placeholder="Short, descriptive title"
									onKeyUp={(event) =>
										setPostData((prevData) => ({
											...prevData,
											content: event.target.value,
										}))
									}
								/>
							</div>

							<div className="modal__upload-flex">
								<input
									type="file"
									name="file"
									ref={fileUploadRef}
									id="fileUpload"
									onChange={handleFileSelect}
									multiple
								/>
								<h4 className="modal__title">Upload</h4>
								<button
									className="modal__upload-btn"
									onClick={() =>
										fileUploadRef.current.click()
									}
								>
									<span className="modal__upload-icon"></span>
								</button>
								<button
									className="modal__create-post-btn"
									onClick={handleSubmit}
									disabled={!postData.title.trim()}
								>
									<span className="modal__create-post-btn-icon">
										{" "}
									</span>{" "}
									SUBMIT POST
								</button>

								{postData.image.map((file, index) => (
									<div key={index} className="file-display">
										{file.name}
										<img
											src={CloseIcon}
											alt="close-icon"
											onClick={() =>
												removeFile(file.name)
											}
										/>
									</div>
								))}
							</div>
						</div>
					</section>
				</div>
			) : (
				<> </>
			)}
		</>
	);
}
