import { useEffect, useState } from "react";
import "./NotificationCounter.scss"

export default function NotificationCounter( {UnfilteredNotificationArray} ) {
    const [filteredNotificationArray, setFilteredNotificationArray] = useState([])

    const filterNotifications = (notificationsArray) =>
        notificationsArray
        .filter(item => !item.notification_seen)
        .map(item => ({ id: item.id }));

    useEffect(() => {
        setFilteredNotificationArray(filterNotifications(UnfilteredNotificationArray))
    }, [UnfilteredNotificationArray])


    return (
        <>
            {  
                filteredNotificationArray.length > 0 && (
                    <div className="notification-counter">{filteredNotificationArray.length}</div>
                )
            } 
        </>
    )
}