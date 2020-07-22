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
    <div className={'home-root'}>
      <div className={'home-cover'}>
        <div className={'home-headers'}>
          <h1>Join our trading community</h1>
          <h2>Charts, coin analysis, altcoin picks</h2>
        </div>
      </div>
      {postsPreview}
      <style jsx>{`
        .home-cover {
          background-image: linear-gradient(0deg, #005cb24B, #1A1A1D), url(${coverImg});
        }
      `}</style>
    </div>
  )
}

// background-image: linear-gradient(0deg, #005cb24B, #1A1A1D), url(${props => props.img});