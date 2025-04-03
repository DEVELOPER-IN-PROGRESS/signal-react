import React from 'react'
import '../App.css'
import { Link } from 'react-router'

export default function Footer(){
	// const footerMenuLinks = [{"organisation":['donate']}]


	return(
		<>
		<footer className="sg__footer">
			<div className="sg__container">
			<div className="flex flex-wrap-reverse md:flex-nowrap gap-4">

				<div className="w-full md:w-5/12 xl:w-6/16  p-4">
					<article className="nonprofit">
						© 2013–2025 Signal, a 501c3 nonprofit.<br/>
						"Signal", Signal logos, and other trademarks are trademarks or registered trademarks of
						 Signal Technology Foundation in the United States and other countries (more info here).
						<br/><br/>
						For media inquiries, contact press@signal.org
					</article>
				</div>

				<div className="w-full md:w-7/12  p-4 flex flex-col gap-y-[24px] md:grid grid-cols-2 lg:flex lg:flex-row lg:gap-x-[24px]">
					<ul className="sg__footer-menu xl:w-[205px] capitalize">
						<h4 className="text-start font-bold mb-[12px]"> Organization</h4>
						<li className="footer-menu-link">
							<Link to={'/'}>donate</Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}>Careers</Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}>Blog</Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}>Brand Assets </Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}>Terms & Privacy policy</Link>
						</li>
					</ul>

					<ul className="sg__footer-menu xl:w-[205px] capitalize">
						<h4 className="text-start font-bold mb-[12px]"> Download </h4>
						<li className="footer-menu-link">
							<Link to={'/'}>android</Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}>iphone & ipad </Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}>windows</Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}> mac </Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}>linux</Link>
						</li>
					</ul>

					<ul className="sg__footer-menu xl:w-[205px] capitalize">
						<h4 className="text-start font-bold mb-[12px]"> Social</h4>
						<li className="footer-menu-link">
							<Link to={'/'}>bluesky</Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}>gitHub</Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}>instagram</Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}>mastodon </Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}>X</Link>
						</li>
					</ul>

					<ul className="sg__footer-menu xl:w-[205px] capitalize">
						<h4 className="text-start font-bold mb-[12px]"> help</h4>
						<li className="footer-menu-link">
							<Link to={'/'}>support center</Link>
						</li>
						<li className="footer-menu-link">
							<Link to={'/'}>community</Link>
						</li>
					</ul>
				</div>

			</div>

			</div>
		</footer>
		</>
		);
}
