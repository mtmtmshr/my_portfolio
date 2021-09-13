import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'


describe("Should render Home Correcry", () => {
  it('Should render 404', () => {
    render(<Home />)
    expect(screen.getByText('404 Not Found')).toBeInTheDocument()
  })
})