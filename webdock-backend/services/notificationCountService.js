const db = require('../models'); // Adjust the path based on your project structure

class NotificationService {
    static async checkAndRemoveOldestNotifications(userId, maxNotifications) {
        try {
            const userNotificationCount = await db.Notification.count({
                where: {
                    target_user_fk: userId,
                },
            });

            if (userNotificationCount >= maxNotifications) {
                const oldestNotification = await db.Notification.findOne({
                    where: {
                        target_user_fk: userId,
                    },
                    order: [['createdAt', 'ASC']],
                });

                if (oldestNotification) {
                    await oldestNotification.destroy();
                }
            }
        } catch (error) {
            console.error('Error in NotificationService:', error);
            throw error;
        }
    }
}

module.exports = NotificationService;
