import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

interface TITLE {
    title: string
}

const Layout: React.FC<TITLE> = ({ children, title = 'Nextjs' }) => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen font-serif">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>{title}</title>
            </Head>
            <header className="w-full h-36 flex flex-col justify-center items-center bg-gray-400">
                <h1 className="text-4xl w-7/12 h-24 py-8">Masahiro Matsumoto</h1>
                <nav className="bg-gray-800 w-screen opacity-80">
                    <div className="flex items-center h-14 w-7/12 m-auto text-center">
                        <Link href="/portfolio">
                            <a
                                data-testid="about"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                            >
                                About
                            </a>
                        </Link>
                        <Link href="/products">
                            <a
                                data-testid="products"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                            >
                                Products
                            </a>
                        </Link>
                        <Link href="/certification">
                            <a
                                data-testid="certification"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                            >
                                Certification
                            </a>
                        </Link>
                        <Link href="/contacts">
                            <a
                                data-testid="contacts"
                                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
                            >
                                Contacts
                            </a>
                        </Link>
                    </div>
                </nav>
            </header>
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>
            <div className="w-full h-14 flex justify-center items-center bg-gray-400">
                <span className="text-xl">© Masahiro Matsumoto 2021</span>
            </div>
        </div>
    )
}

export default Layout