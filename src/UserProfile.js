// UserProfile.js
import React, { useState, useEffect } from 'react'

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null)

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
        </div>
    )
}

export default UserProfile
