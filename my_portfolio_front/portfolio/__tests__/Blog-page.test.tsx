/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Blog from '../pages/blog'


describe("Should render blog-page Correcry", () => {
    it('Should render 404', () => {
        render(<Blog />)
        expect(screen.getByText(/Blog/)).toBeInTheDocument()
        expect(screen.getByText(/作成日：/)).toBeInTheDocument()
        expect(screen.getByText("記事一覧")).toBeInTheDocument()
        expect(screen.getByText("記事")).toBeInTheDocument()
    })
})