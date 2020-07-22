import { millisToString, buildHtml } from '../../common/utils'

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
  const posts = await res.json()
    const paths = posts.map((post) => ({
      params: { title: post.title },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${params.title}`)
  const post = await res.json()

  return { props: { post } }
}

export default function PostPage ({ post }) {
  const { longTitle, created, coverImg, nodes} = post
  const html = buildHtml(nodes)
  return (
    <div className={'root'}>
      <div className={'cover-img'}>
        <div className={'cover-headers'}>
          <h1 className='white'>{longTitle}</h1>
          <h2 className='white thin'>{millisToString({ date: new Date(created), showHours: false })}</h2>
        </div>
      </div>
      <div className={'post'}>
        {html}
      </div>
      <style jsx>{`
        .cover-img {
          background-image: linear-gradient(0deg, #005cb24B, #1A1A1D), url(${coverImg});
        }
      `}</style>
    </div>
  )
}