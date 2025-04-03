import React from 'react'
import './Landing.css'
import {Link } from 'react-router'
// import '../assets'

export default function Landing({slug}){
	const cards = [{title:'Say Anything',subtext:`Share text, voice messages, photos, videos, GIFs and files for free. Signal uses your phone's data connection so you can avoid SMS and MMS fees.`},
		{title:'Speak Freely',subtext:`Share text, voice messages, photos, videos, GIFs and files for free. Signal uses your phone's data connection so you can avoid SMS and MMS fees.`},
		{title:'Make Privacy Stick',subtext:`Add a new layer of expression to your conversations with encrypted stickers. You can also create and share your own sticker packs.`},
		{title:'Get Together with Groups',subtext:`Group chats make it easy to stay connected to your family, friends, and coworkers. Everything's easier with signal`},
	]

	return(
	<>
	<title>{`Signal > > ${slug}`}</title>
	<div className="sg__landing">
		<section className="sg__hero px-[24px] py-[48px] lg:p-0 ">
			<div className="sg__container flex items-center py-[40px]">
				<div className="hero-text-wrap lg:w-5/12">
					<h3 className="hero__h3">Speak Freely</h3>
					<p className="desc">Say "hello" to a different messaging experience. An unexpected focus on privacy, combined with all of the features you expect.</p>
					<Link to={'/download'}>
						<button className="btn font-bold capitalize  bg-white sg__button mt-3 p-4 rounded-[8px]">
							Get signal
						</button>
					</Link>
				</div>
			</div>
		</section>
		<section className="why-use  px-[24px] py-[48px] lg:p-0">
			<div className="sg__container py-[48px]">

				<div className="twrap py-[48px]">
					<h3 className="sg__molc-title--h3 text-center">
						Why Signal?
					</h3>
					<p className="sg__molc-title--p text-center">Explore below to see why Signal is a simple, powerful, and secure messenger </p>
				</div>

				<div className="feature-wrapper my-[48px]">
					<div className="flex flex-wrap-reverse lg:flex-wrap justify-between gap-y-[24px]">
						<div className="lg:w-5/12">
							<h3 className="sg__molc-title--h3 text-left mb-[32px]">
								Share Without Insecurity
							</h3>
							<p className="sg__molc-title--p">State-of-the-art end-to-end encryption(powered by the open source Signal Protocol) keeps your conversaion secure. We can't read your messages or listen to your calls, and no one else can  either.Privacy isn't an optional mode -- it's just the way that Signal works. Every message, every call, every time.</p>
						</div>

						<div className="lg:w-7/12">
							<img src="./endtoend.png" class="rounded-[16px] lg:ms-10" alt="end to end encryption" />
						</div>
					</div>

				</div>

			</div>
		</section>

		{/* card features */}
		<section className="features bg-[#F6F6F6] px-[24px] py-[48px] lg:p-0">
			<div className="sg__container">
				<div className="flex flex-wrap md:grid grid-rows-2 grid-cols-2  items-center justify-center  py-[48px] gap-[24px]">
					{/* <div className="feature-card rounded-[16px] xl:p-[30px] flex flex-col items-center w-[47%]">
						<img src={"cardimg1.png"} class="card-img" alt="card image1" />
						<h3 className="feature-card__h3">
						Say Anything
						</h3>
						<p className="feature-card__desc text-center">Explore below to see why Signal is a simple, powerful, and secure messenger </p>
					</div> */}
					{
						cards.map( (card,idx) => (
							<div className="feature-card rounded-[16px] p-[30px] flex flex-col justify-center h-[auto] items-center bg-[#FFFFFF]">
								<img src={`cardimg${idx+1}.png`} class="card-img" alt={`card image-${idx+1}`} />
								<h3 className="feature-card__h3 text-center">
								 {card.title}
								</h3>
								<p className="feature-card__desc text-center">
									{card.subtext}
								</p>
							</div>
						))
					}

				</div>
			</div>
		</section>

		{/*  No ads no trackers */}
		<section className="no__ads px-[24px]  py-[48px]">
			<div className="sg__container">

				<div className="flex flex-wrap-reverse lg:flex-nowrap gap-4">

					<div className="w-full md:w-3/12  p-4">
						<h3 className="sg__molc-title--h3 text-start ">
							No ads. No trackers. No kidding.
						</h3>
						<p className="sg__molc-title--p">There are no ads, no affiliate marketers, and no creepy tracking in Signal. So focus on sharing the moments that matter with the people who matter to you.
						</p>

					</div>

					<div className="w-full md:w-9/12  p-4">
						<img src="./NoAds.png" class="h-auto poster rounded-[16px]" alt="No ads"/>
					</div>
				</div>

				<div className="flex flex-wrap lg:flex-nowrap  gap-4 py-[48px]">

					<div className="w-full md:w-9/12 flex lg:justify-end p-4">
						<img src="./aroundworld.png" class="h-auto poster rounded-[16px]" alt="No ads"/>
					</div>

					<div className="w-full md:w-3/12  p-4">
						<h3 className="sg__molc-title--h3 text-start ">
							Free for Everyone
						</h3>
						<p className="sg__molc-title--p">Signal is an independent nonprofit. We're not tied to any major tech companies, and we can never be acquired by one either. Development is supported by grants and donations from people like you.
						</p>

					</div>

				</div>


			</div>
		</section>

	</div>
	</>
	)
}
