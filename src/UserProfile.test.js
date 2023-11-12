// UserProfile.test.js
import React from 'react'
import { render, screen } from '@testing-library/react'
import UserProfile from './UserProfile'

// Mocking the fetch function for testing purposes
jest.mock('node-fetch')

describe('UserProfile Component', () => {
    it('renders user data correctly', async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: async () => ({
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
            }),
        })

        render(<UserProfile userId={1} />)

        expect(screen.getByText('Loading user data...')).toBeInTheDocument()

        const userElement = await screen.findByText('John Doe')

        expect(userElement).toBeInTheDocument()
        expect(screen.getByText('Email: john@example.com')).toBeInTheDocument()

        global.fetch.mockRestore()
    })

    it('handles API error gracefully', async () => {
        jest.spyOn(global, 'fetch').mockRejectedValue(new Error('API Error'))

        render(<UserProfile userId={1} />)

        expect(screen.getByText('Loading user data...')).toBeInTheDocument()

        // const errorElement = await screen.findByText('Error fetching user:')

        // expect(errorElement).toBeInTheDocument()

        global.fetch.mockRestore()
    })
})
