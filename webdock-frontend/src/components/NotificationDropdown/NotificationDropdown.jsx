import React, { useState } from "react"
import "./NotificationDropdown.scss"
import { checkAdmin } from "../../helper/checkAdmin"
import timeAgo from "../../helper/timeAgo"

export default function NotificationDropdown( {NotificationArray}) {
    const [seen, setSeen] = useState(false)

    const redirectToPost = (postId) => {
        window.location.href = `/posts/${postId}`
    }

    const getFirstWord = (sentence) => {
        const words = sentence.split(' ');
        // return words.length > 0 ? words[0] : '';
        return words[0];
    };

    return (
        <div className="notification-dropdown-container">
            <p className="notification-dropdown-container__title">Notifications</p>
            <ul className="notification-dropdown-container__list">
                {NotificationArray.map(item => (
                    <li onClick={() => redirectToPost(item.post_fk)} className="notification-dropdown-container__list-item" key={item.id}>
                        <div className={`comment-user__avatarURL${item.User && checkAdmin(item.User.email) ? "--admin" : ""}`}>
                            {item.User.name.charAt(0)}
                        </div>
                        <div className="notification-dropdown-container__info">
                            <div className="notification-dropdown-container__action">
                                <p className="notification-dropdown-container__info__name">{getFirstWord(item.User.name)}</p>
                                <p>{item.Type_of_notification.notification_type}{item.Type_of_notification.notification_type === "comment" ? "ed on your" : "d"} <b>your post</b></p>
                            </div>
                            <p>{timeAgo(item.createdAt)}</p>
                        </div>
                        {item.notification_seen ? "" : <span className="notification-dropdown-container__seen-dot">•</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

// To do
// Above 10 notifications, delete the 11th item, sorted by oldest
// Icon to show type of notification in the bottom of the avatar
// Notify when post is moved to new status
// Alert in the NAV when a new notification is recieved
// Close dropdown, when anywhere but the dropdown is clicked