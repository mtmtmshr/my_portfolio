import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Portfolio from '../pages/portfolio'


describe("Should render Home Correcry", () => {
  it('Should render Home', () => {
    render(<Portfolio />)
    expect(screen.getByText('Masahiro Matsumoto')).toBeInTheDocument()
    expect(screen.getByText('© Masahiro Matsumoto 2021')).toBeInTheDocument()
  })

  it('Should render Home contents', () => {
    render(<Portfolio />)
    expect(screen.getByText('経歴')).toBeInTheDocument()
    expect(screen.getByText('提出論文')).toBeInTheDocument()
    expect(screen.getByText('受賞')).toBeInTheDocument()
  })
})