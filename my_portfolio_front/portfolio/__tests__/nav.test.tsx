
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'
import 'setimmediate'

initTestHelpers()

describe("should render nav bar correctly", () => {
    it('Should route to selected page', async () => {
        const { page } = await getPage({
            route: '/portfolio',
        })
        render(page)
    
        userEvent.click(screen.getByTestId('products'))
        expect(await screen.findByText('制作物')).toBeInTheDocument()
        userEvent.click(screen.getByTestId('certification'))
        expect(await screen.findByText('資格')).toBeInTheDocument()
        userEvent.click(screen.getByTestId('contacts'))
        expect(await screen.findByText('連絡先')).toBeInTheDocument()
        userEvent.click(screen.getByTestId('about'))
        expect(await screen.findByText('松本 真拓 / Masahiro Matsumoto')).toBeInTheDocument()
    })
})