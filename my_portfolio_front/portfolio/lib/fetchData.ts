
import fetch from 'node-fetch'

export const getAllPostsData = async () => {

    // const res = await fetch(
    //     new URL('https://jsonplaceholder.typicode.com/posts/')
    // )

    // const posts = await res.json()

    const posts = [{
        id: 1,
        title: 'dummy title 1',
        body: 'dummy body 1',
        created_at: "2021年10月2日"
      },
      {
        id: 2,
        title: 'dummy title 2',
        body: 'dummy body 2',
        created_at: "2021年10月3日"
        },
        {
            id: 3,
            title: 'dummy title 3',
            body: 'dummy body 3',
            created_at: "2021年10月4日"
        },
        {
            id: 4,
            title: 'dummy title 4',
            body: 'dummy body 4',
            created_at: "2021年10月5日"
        },
        {
            id: 5,
            title: 'dummy title 5',
            body: 'dummy body 5',
            created_at: "2021年10月5日"
        },
    ]
    return posts
}

export const getAllPostIds = async () => {
    // const res = await fetch(
    //     new URL('https://jsonplaceholder.typicode.com/posts/?_limit=10')
    // )
    // const posts = await res.json()
    const posts = [{
        id: 1,
        title: 'dummy title 1',
        body: 'dummy body 1',
        created_at: "2021年10月2日"
      },
      {
        id: 2,
        title: 'dummy title 2',
        body: 'dummy body 2',
        created_at: "2021年10月3日"
        },
        {
            id: 3,
            title: 'dummy title 3',
            body: 'dummy body 3',
            created_at: "2021年10月4日"
        },
        {
            id: 4,
            title: 'dummy title 4',
            body: 'dummy body 4',
            created_at: "2021年10月5日"
        },
        {
            id: 5,
            title: 'dummy title 5',
            body: 'dummy body 5',
            created_at: "2021年10月5日"
        },
    ]
    return posts.map((post) => {
        return {
            params: {
                id: String(post.id),
            },
        }
    })
}

export const getPostData = async (id: string) => {
    // const res = await fetch(
    //     new URL(`https://jsonplaceholder.typicode.com/posts/${id}`)
    // )
    // const post = await res.json()
    const post = {
        id: 5,
        title: 'dummy title 5',
        body: '# overviewaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\n#### こんにちわ\n # overview\n# overview\n# overview\n# overview\n# overview\n# overview\n# overview\n# overview\n# overview\n',
        created_at: "2021年10月5日"
    }
    return post
}