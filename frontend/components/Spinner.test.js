// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react'
import Spinner from './Spinner'
import { render, screen, rerender } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('sanity', () => {
  expect(true).toBe(true)
})

test('Spinner renders without errors.', () => {
  render( <Spinner on={false} /> );
})



test('Spinner has no text when on is set to false', ()=> {
  render( <Spinner on={false} />);
  const spinnerText = screen.queryByText(/Please wait.../i);
  expect(spinnerText).not.toBeInTheDocument();
})

test('Spinner has text when on is set to true', () => {
  render( <Spinner on={true} />);
  const spinnerText = screen.queryByText(/Please wait.../i);
  expect(spinnerText).toBeInTheDocument();
})
