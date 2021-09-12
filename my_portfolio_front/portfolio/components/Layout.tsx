import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

interface TITLE {
    title: string
}

const Layout: React.FC<TITLE> = ({ children, title = 'Nextjs' }) => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen font-mono">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>{title}</title>
            </Head>
            <main className="flex flex-1 justify-center items-center flex-col w-screen">
                {children}
            </main>
            <div className="w-full h-12 flex justify-center items-center bg-green-400">
                <span>© Masahiro Matsumoto 2021</span>
            </div>
        </div>
    )
}

export default Layout