// UserProfile.js
import React, { useState, useEffect } from 'react'

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(
                    `https://api.example.com/users/${userId}`
                )
                const userData = await response.json()
                setUser(userData)
            } catch (error) {
                console.error('Error fetching user:', error)
                setError(true)
            }
        }

        fetchUser()
    }, [userId])

    return (
        <div>
            {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <p>Email: {user.email}</p>
                    {/* Additional user details */}
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
            {error && (
                <div>
                    <p>Error fetching user</p>
                </div>
            )}
        </div>
    )
}

export default UserProfile
