import { useRef } from 'react';
import CardTestimonial from './CardTestimonial';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const listTestimonials = [
	{
		quotes: `Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel
        planner, Jaouad, was increadible.`,
		name: 'Vand D',
		position: 'Happy Treloo',
		avatar: require('../assets/img/avatar-1.png'),
		rating: '4.5',
	},
	{
		quotes: `Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel
        planner, Jaouad, was increadible.`,
		name: 'Tru Vio',
		position: 'Happy Treloo',
		avatar: require('../assets/img/avatar-2.png'),
		rating: '4.9',
	},
	{
		quotes: `Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel
        planner, Jaouad, was increadible.`,
		name: 'Izzel Din',
		position: 'Happy Treloo',
		avatar: require('../assets/img/avatar-1.png'),
		rating: '5.0',
	},
	{
		quotes: `Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel
        planner, Jaouad, was increadible.`,
		name: 'R Aditya',
		position: 'Happy Treloo',
		avatar: require('../assets/img/avatar-2.png'),
		rating: '4.8',
	},
];

export default function Testimonials() {
	const swiperRef = useRef();

	return (
		<div className="container px-10 mx-auto mt-60">
			<Swiper
				ref={swiperRef}
				spaceBetween={16}
				slidesPerView={2}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					991: {
						slidesPerView: 2,
					},
				}}
			>
				{listTestimonials.map(testi => {
					return (
						<SwiperSlide key={testi.name}>
							<CardTestimonial {...testi} />
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className="flex justify-center space-x-4">
				<button
					className="p-3 text-blue-500 transition duration-300 border-2 border-blue-500/50 rounded-2xl hover:bg-slate-200 focus:ring focus:ring-blue-300"
					onClick={() => swiperRef.current.swiper.slidePrev()}
				>
					{/* prettier-ignore */}
					<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
				</button>

				<button
					className="p-3 text-blue-500 transition duration-300 border-2 border-blue-500/50 rounded-2xl hover:bg-slate-200 focus:ring focus:ring-blue-300"
					onClick={() => swiperRef.current.swiper.slideNext()}
				>
					{/* prettier-ignore */}
					<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
				</button>
			</div>
		</div>
	);
}
