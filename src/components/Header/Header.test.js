// import React so you can use JSX (React.createElement) in your test
import React from 'react'

/**
 * render: lets us render the component as React would
 * screen: a utility for finding elements the same way the user does
 */
import { render, screen } from '@testing-library/react'
import Header from './Header'

//! Note: you can also use describe and it blocks with React Testing Library. 
//! React Testing Library doesn't replace Jest, just Enzyme. We recommend test.

test('Renders the component without crashing', () => {
    expect(render(<Header />)).toMatchSnapshot();
})