import Link from "next/link"
import { getAllPostIds, getPostData } from '../../lib/fetchData'
import { POST } from '../../types/types'
import { GetStaticProps, GetStaticPaths } from 'next'
import BlogLayout from "../../components/BlogLayout"
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

const BlogDetail: React.FC<POST> = ( {id, title, body, created_at} ) => {
    return (
        <BlogLayout title="Blog">
            <div className="w-9/12 border-l border-r border-green-900 flex flex-col flex-auto border-opacity-20">
                <div className="w-3/12 border-b border-green-900 w-full h-32 border-opacity-20 flex">
                    <div className="flex-1">
                        <h1 className="text-4xl pl-20 pt-16">記事</h1>
                    </div>
                    <div>
                        <h1 className="pr-16 pt-24">作成日：{created_at}</h1>
                    </div>
                </div>
                <div className="w-3/12 border-b border-green-900 w-full h-16 border-opacity-20 pl-10 pt-3 text-3xl">{title}</div>
                <div className="w-3/12 w-full h-12 border-opacity-20 flex-1 py-8 px-10">
                    <div className="markdown break-all">
                        <ReactMarkdown
                            plugins={[gfm]}
                        >
                        {body}
                        </ReactMarkdown>
                    </div>
                </div>
                <Link href="/"><button type="button" className="text-right text-xl underline pr-4 pb-4">記事一覧へ</button></Link>
            </div>

            {/* 将来作ろうね
            <div className="w-3/12 border-l border-r border-green-900 border-opacity-20 text-center">
                <div className="w-3/12 border-b border-green-900 w-full h-28 border-opacity-20 text-2xl pt-16">記事一覧</div>
                <div className="w-3/12 border-b border-green-900 w-full h-8 border-opacity-20 text-xl">2020年1月</div>
            </div> */}
        </BlogLayout>
    )
}
export default BlogDetail

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const post = await getPostData(ctx.params.id as string)
    return {
        props: {
            ...post,
        },
    }
}