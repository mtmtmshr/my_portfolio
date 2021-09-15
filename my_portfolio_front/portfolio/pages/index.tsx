import React from 'react'
import BlogLayout from "../components/BlogLayout"
import { GetStaticProps } from 'next'
import { POST } from '../types/types'
import { getAllPostsData } from '../lib/fetchData'
import Link from 'next/link'

interface PostProps {
  posts: POST[]
}

const BlogHome:React.FC<PostProps> = ({ posts }) => {
    return (
      <BlogLayout title="Blog">
        <div className="w-full border-l border-r border-green-900 border-opacity-20 text-center">
          <div className="w-full border-b border-green-900 w-full h-28 border-opacity-20 text-2xl pt-16">記事一覧</div>
          <div className="w-full justify-center flex py-8 flex-wrap px-4">
            {
              posts.map((post) => {
                return (
                  <Link href={`/blog/${post.id}`}>
                    <div className="box-border border cursor-pointer w-11/12 md, lg, xl:w-5/12 pt-6 pb-2 border-green-900 border-opacity-20 my-4 mx-2">
                      <h2 className="text-xl">{post.title}</h2>
                      <p className="text-right pb-0 mb-0 pr-2">{post.created_at}</p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </BlogLayout>
    )
}

export default BlogHome

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
