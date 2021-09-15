import BlogLayout from "../components/BlogLayout"
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm'

const Blog: React.FC = () => {
    return (
        <BlogLayout title="Blog">
            <div className="w-9/12 border-l border-green-900 flex flex-col flex-auto border-opacity-20">
                <div className="w-3/12 border-b border-green-900 w-full h-32 border-opacity-20 flex">
                <div className="flex-1">
                    <h1 className="text-4xl pl-20 pt-16">記事</h1>
                </div>
                <div>
                    <h1 className="pr-16 pt-24">作成日：2021年10月4日</h1>
                </div>
                </div>
                <div className="w-3/12 border-b border-green-900 w-full h-12 border-opacity-20 pl-10 pt-2 text-2xl">Sentence-Bertを使ってみた法則</div>
                <div className="w-3/12 w-full h-12 border-opacity-20 flex-1 py-8 px-10" style={{ fontSize: 18  }}>
                <ReactMarkdown
                    plugins={[gfm]}
                >
                    {"# Overview\n## Overview"}
                </ReactMarkdown>
                </div>
            </div>
            <div className="w-3/12 border-l border-r border-green-900 border-opacity-20 text-center">
                <div className="w-3/12 border-b border-green-900 w-full h-28 border-opacity-20 text-2xl pt-16">記事一覧</div>
                <div className="w-3/12 border-b border-green-900 w-full h-8 border-opacity-20 text-xl">2020年1月</div>
            </div>
        </BlogLayout>
    )
}
export default Blog
