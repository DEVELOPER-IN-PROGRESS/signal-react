import React,{useState} from 'react'
import { Link } from 'react-router';
import '../App.css'

export default function Header(){
	const [menuopen, setmenuopen] = useState(false)

	const header_links = {
		'Get Signal': 'download',
		'help': '/',
		'blog':'blog',
		'developers':'docs',
		'careers': 'work',
		'donate':'donate',
		// English
	}


    return(
	 <>
		 <header className="sg__header sticky top-0">
			<div className="sg__container  flex items-center justify-between w-100">
				<div className="logo w-[25%] ps-[18px] lg:ps-[0] lg:-ms-[20px]">
					<Link to={'/'}>
						<img src="../logo.png" className="sg__logo" alt="brand logo" />
					</Link>
				</div>

				<button onClick={()=>{ setmenuopen(!menuopen) }} className="ham-wrap flex items-center justify-center w-[52px] h-[52px] lg:hidden">
					<div className={`hamburger ${menuopen?'open':'close'} `}>
						<div className="line line1"></div>
						<div className="line line2"></div>
						<div className="line line3"></div>
					</div>
				</button>

				<nav className={`navigation absolute ${menuopen?'active':'closed  hidden'} top-0 left-0 right-0   xl:inline-flex lg:static flex items-center justify-between`}>
					{ Object.keys(header_links).map( (url,idx) => (
						<Link key={`navigation${idx}`} to={`${header_links[url]}`}
						className="capitalize px-[12px] py-[8px] nav-item">
							{url}
						</Link>
					) ) }
				</nav>
			</div>
		 </header>
	 </>
    );
}
