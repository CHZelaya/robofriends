// import React so you can use JSX (React.createElement) in your test
import React from 'react'

/**
 * render: lets us render the component as React would
 * screen: a utility for finding elements the same way the user does
 */
import { render, screen, fireEvent, within } from '@testing-library/react'
import CounterButton from './CounterButton'

//! Note: you can also use describe and it blocks with React Testing Library. 
//! React Testing Library doesn't replace Jest, just Enzyme. We recommend test.

test('Renders the component without crashing', () => {
    expect(render(<CounterButton />)).toMatchSnapshot();
})


test('button should be rendered', () => {
    render(<CounterButton />)
    //* Creating a variable that contains our DOM element selected by role, in this case "button"
    const buttonEl = screen.getByRole('button');
    //* Telling the test to expect the button element to be rendered on the document.
    expect(buttonEl).toBeInTheDocument();
})

test('On click, button should increment', () => {
    render(<CounterButton />)
    const buttonEl = screen.getByRole('button');
    fireEvent.click(buttonEl);
    expect(buttonEl).toHaveTextContent(/Count: 1/i)
    fireEvent.click(buttonEl);
    expect(buttonEl).toHaveTextContent(/Count: 2/i)
})


