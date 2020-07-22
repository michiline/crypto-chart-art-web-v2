import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function PostPreview ({ title, longTitle, description, coverImg, created }) {
	const router = useRouter()
	return (
		<div className="post-root">
			<Link href={`/post/${title}`}>
				<a>{title}</a>
			</Link>
		</div>
	)
}
