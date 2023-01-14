// import React so you can use JSX (React.createElement) in your test
import React from 'react'

/**
 * render: lets us render the component as React would
 * screen: a utility for finding elements the same way the user does
 */
import { render, screen } from '@testing-library/react'
import CardList from './CardList'

//! Note: you can also use describe and it blocks with React Testing Library. 
//! React Testing Library doesn't replace Jest, just Enzyme. We recommend test.

test('Renders the component without crashing', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ]
    expect(render(<CardList robots={mockRobots} />)).toMatchSnapshot();
})