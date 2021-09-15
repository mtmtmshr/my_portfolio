import Head from 'next/head'


interface TITLE {
    title: string
}

const BlogLayout: React.FC<TITLE> = ({ children, title = 'Nextjs' }) => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen font-serif">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>{title}</title>
            </Head>
            <header className="w-full h-24 flex flex-col justify-center items-center bg-green-400 bg-opacity-90">
                <h1 className="text-2xl md, xl:text-4xl md, lg, xl:w-8/12 py-8">M.M.Blog</h1>
            </header>
            <main className="flex flex-1 items-stretch flex-col w-screen bg-green-400 bg-opacity-40">
            <div className="flex flex-1 w-9/12 self-center">
                    {children}
                </div>
            </main>
            <div className="w-full h-8 flex justify-center items-center bg-green-400 bg-opacity-90">
                {/* <span className="text-xl">Footer</span> */}
            </div>
        </div>
    )
}

export default BlogLayout