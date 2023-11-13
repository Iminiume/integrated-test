import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'

describe('Counter Test', () => {
    it('it should increment and decrement the count', () => {
        render(<Counter />)

        const countElement = screen.getByText('Count: 0')
        expect(countElement).toBeInTheDocument()

        const incrementButton = screen.getByTestId('increment')
        const decrementButton = screen.getByTestId('decrement')

        fireEvent.click(incrementButton)
        expect(countElement).toHaveTextContent('Count: 1')

        fireEvent.click(decrementButton)
        expect(countElement).toHaveTextContent('Count: 0')
    })
})
