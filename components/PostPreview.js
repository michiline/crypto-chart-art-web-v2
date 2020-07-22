import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { millisToString } from '../common/utils'
import { CalendarIcon } from './Icons'

export default function PostPreview ({ title, longTitle, description, coverImg, created }) {
	const router = useRouter()
	return (
		<div className="post-preview-root">
			<img className='post-preview-cover-img' src={coverImg} />
			<div className='post-preview-info'>
				<h3>{longTitle}</h3>
				<p className='post-preview-description'>
					{description}
				</p>
				<div className='post-preview-bottom'>
					<div className='post-preview-created-container'>
						<CalendarIcon />
						<p className='post-preview-created-date'>
							{millisToString({ date: new Date(created), showHours: false})}
						</p>
					</div>
					<Link href={`/post/${title}`} passHref>
						<a className='post-preview-read-more-link'>READ MORE</a>
					</Link>
				</div>
			</div>

			
		</div>
	)
}
