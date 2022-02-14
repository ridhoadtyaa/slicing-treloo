import { useEffect } from 'react';
import CardSpecial from './components/CardSpecial';
import Navbar from './components/Navbar';
import Plan from './components/Plan';
import RecommendedCategory from './components/RecomendedCategory';
import RecommendedDestination from './components/RecommendedDestination';
import Testimonials from './components/Testimonials';
import Visitors from './components/Visitors';
import Footer from './components/Footer';

function App() {
	useEffect(() => {
		document.title = 'Treloo';
	}, []);

	return (
		<div className="bg-[#f7f7f7]">
			<div className="bg-hero relative mb-[620px] flex h-screen flex-col bg-[#F7F7F7] bg-cover bg-center lg:mb-80">
				<div>
					<Navbar />
				</div>
				<div className="container m-auto text-center">
					<div className="mx-auto w-full px-10 md:w-9/12">
						<h1 className="text-5xl font-semibold text-white md:text-[64px]">Discover Your Life, Travel Where You Want</h1>
						<p className="mt-12 text-xl font-medium text-white md:text-2xl">
							Would you explore nature paradise in the world, let’s find the best destination in world with us.
						</p>
					</div>
				</div>
				<Plan />
			</div>

			<div className="container mx-auto mt-40">
				<h2 className="text-center text-5xl font-semibold">Special Upcoming Offers</h2>
				<div className="mt-14 flex justify-center">
					<Visitors />
				</div>
				<div className="mt-12 flex flex-wrap items-center justify-evenly space-x-4 md:space-x-0">
					<CardSpecial
						thumbnail={require('./assets/img/thumbnail-1.png')}
						date="14 FEB 2022"
						time="3 Days, 3 Nights"
						category="Relax"
						name="Loga Sea"
						price="700"
					/>
					<CardSpecial
						thumbnail={require('./assets/img/thumbnail-2.png')}
						date="18 JUN 2022"
						time="4 Days, 3 Nights"
						category="Adventure"
						name="Ansgar Scheffold"
						price="400"
					/>
					<CardSpecial
						thumbnail={require('./assets/img/thumbnail-3.png')}
						date="22 DEC 2022"
						time="7 Days, 6 Nights"
						category="Relax"
						name="Lona X"
						price="340"
					/>
				</div>

				<div className="container mx-auto mt-48 flex items-center px-10">
					<div className="hidden w-6/12 lg:block">
						<div className="relative">
							<img src={require('./assets/img/travel.png')} className="w-9/12 rounded-[75px]" alt="Travel" />
							<div className="absolute top-14 right-14 rounded-[35px] bg-white px-8 py-6 shadow-md">
								<h2 className="text-center text-4xl font-semibold text-blue-500">300+</h2>
								<div className="-mt-1 text-center text-lg font-light">DESTINATIONS</div>
							</div>
							<div className="absolute top-96 -left-8 rounded-[35px] bg-white px-8 py-6 shadow-md 2xl:-left-24">
								<h2 className="text-center text-4xl font-semibold text-blue-500">5000+</h2>
								<div className="-mt-1 text-center text-lg font-light">TOURIST</div>
							</div>
							<div className="absolute bottom-32 right-16 rounded-[35px] bg-white px-10 py-6 shadow-md">
								<h2 className="text-center text-4xl font-semibold text-blue-500">150+</h2>
								<div className="-mt-1 text-center text-lg font-light">HOTELS</div>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-6/12">
						<h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">Travel Any Corner of The World With Us</h2>
						<p className="mt-16 text-xl text-slate-500">
							Would you explore nature paradise in the world, let’s find the best destination in world with us, Would you explore nature paradise in
							the world, let’s find the best destination in world with us. Would you explore nature paradise in the world, let’s find the best
							destination in world with us.
						</p>
						<p className="mt-16 text-xl text-slate-500">
							Would you explore nature paradise in the world, let’s find the best destination in world with us.
						</p>
						<button className="mt-14 rounded-md bg-blue-500 px-6 py-4 text-xl text-white shadow-md shadow-blue-200 transition duration-300 hover:bg-blue-600 focus:ring focus:ring-blue-400">
							Contact Us
						</button>
					</div>
				</div>

				<div className="container mx-auto mt-60">
					<h2 className="text-center text-5xl font-semibold">Recommended Destination</h2>
					<RecommendedCategory />
					<RecommendedDestination />
				</div>

				<Testimonials />

				<div className="container mx-auto mt-60 px-10">
					<div className="bg-earth flex h-[500px] rounded-[100px] bg-cover">
						<div className="m-auto w-8/12">
							<h1 className="text-center text-4xl font-semibold text-white md:text-5xl">Don’t Miss The 50% Discount if You register Today</h1>
							<button className="mx-auto mt-16 block rounded-2xl bg-white py-6 px-7 text-xl font-medium text-blue-500 transition duration-300 hover:bg-slate-200 md:rounded-3xl">
								Register Today
							</button>
						</div>
					</div>
				</div>

				<Footer />
			</div>
		</div>
	);
}

export default App;
