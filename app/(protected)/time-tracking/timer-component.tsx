'use client'

import { useState } from 'react'
import { usePushNotifications } from '@/lib/use-push-notifications'
import { sendNotificationToAll } from '@/app/push-actions'

export function TimerComponent() {
    const pushNotifications = usePushNotifications()
    const [isRunning, setIsRunning] = useState(false)

    const handleStartTimer = async () => {
        setIsRunning(true)

        // Subscribe if not already subscribed
        if (pushNotifications.isSupported && !pushNotifications.isSubscribed) {
            await pushNotifications.subscribe()
        }

        // Send notification to all users
        if (pushNotifications.isSubscribed) {
            await sendNotificationToAll({
                title: 'Time Tracking Started',
                body: 'Your shift has started. Tap to view details.',
                url: '/time-tracking',
                persistent: true,
            })
        }
    }

    const handleStopTimer = async () => {
        setIsRunning(false)

        // Send stop notification
        if (pushNotifications.isSubscribed) {
            await sendNotificationToAll({
                title: 'Shift Complete',
                body: 'Your shift has ended. View your summary.',
                url: '/time-tracking',
                persistent: false,
            })
        }
    }

    return (
        <div>
            <button
                onClick={handleStartTimer}
                disabled={isRunning}
            >
                Start Tracking
            </button>
            <button
                onClick={handleStopTimer}
                disabled={!isRunning}
            >
                Stop Tracking
            </button>
        </div>
    )
}