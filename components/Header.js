import Link from 'next/link'

export default function Header () {
	return (
		<div className='header-root'>
			<div className='header-center'>
				<div className='header-logo'>CryptoChartArt</div>
				<div className='header-links'>
					<Link href={'/'} passHref>
						<a className='header-link'>HOME</a>
					</Link>
				</div>
			</div>
		</div>
	)
}