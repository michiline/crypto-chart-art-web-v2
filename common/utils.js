export const millisToString = ({ date = new Date(Date.now()), showHours = true }) => {
	const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
	const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
	const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
	const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
	const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
	let string = `${day}.${month}.${date.getFullYear()}.`
	if (showHours) {
	  string = `${string} ${hours}:${minutes}:${seconds}`
	}
	return string
}

export const buildHtml = (tags) => {
	const html = tags.map(({ name, data }, index) => {
		switch(name) {
		  case 'H1': {
			 return (
				<h1 key={index}>{data}</h1>
			)
		  }
		  case 'TXT':
			return (
			  <p className='post-text' key={index}>{data}</p>
			)
		  case 'IMG': 
			return (
				<a className='post-img-link' key={`${index}i`} href={data}>
						<img className='post-img' src={data} key={index}/>
				</a>
			)
		  default: 
			return (
				<div key={index}>{data}</div>
			)
		}
	  })
	return html
	}
