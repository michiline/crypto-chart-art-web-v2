import PostPreview from "../components/PostPreview"

export async function getStaticProps() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`)
	  const posts = await res.json()
	  return {
		  props: {
			  posts
		  }
	  }
}

export default function Home({ posts }) {
  const coverImg = `${process.env.NEXT_PUBLIC_STATIC_URL}/home.jpg`
  const postsPreview = posts.map((post, index) => <PostPreview {...post }key={index}/>)
  return (
    <div className={'root'}>
      <div className={'cover-img'}>
        <div className={'cover-headers'}>
          <h1 className='white'>Join our trading community</h1>
          <h2 className='white thin'>Charts, coin analysis, altcoin picks</h2>
        </div>
      </div>
      {postsPreview}
      <style jsx>{`
        .cover-img {
          background-image: linear-gradient(0deg, #005cb24B, #1A1A1D), url(${coverImg});
        }
      `}</style>
    </div>
  )
}