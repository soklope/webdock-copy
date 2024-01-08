import React from "react"
import "./NotificationDropdown.scss"

export default function NotificationDropdown( {NotificationArray}) {

    const redirectToPost = (postId) => {
        window.location.href = `/posts/${postId}`
    }

    return (
        <div className="notification-dropdown-container">
            <p className="notification-dropdown-container__title">Notifications</p>
            <ul className="notification-dropdown-container__list">
                {NotificationArray.map(item => (
                    <li onClick={() => redirectToPost(item.post_fk)} className="notification-dropdown-container__list-item" key={item.id}>
                        <p>{item.User.name}</p>
                        <p>{item.Type_of_notification.notification_type}</p>
                        <p>post {item.post_fk}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}