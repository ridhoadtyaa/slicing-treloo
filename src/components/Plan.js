import { useState } from 'react';

export default function Plan() {
	const [type, setType] = useState('flight');

	return (
		<div className="container mx-auto flex justify-center bg-white">
			<div className="absolute -bottom-[31rem] rounded-tr-3xl rounded-bl-3xl rounded-br-3xl bg-white px-8 py-12 shadow lg:-bottom-44">
				<div className="absolute left-0 -top-20 flex space-x-4 rounded-tr-2xl rounded-tl-2xl bg-white px-2 pt-2 pb-8">
					<div
						className={`flex cursor-pointer items-center rounded-3xl px-3 py-2 ${type === 'flight' ? 'bg-blue-500/20' : ''}`}
						onClick={() => setType('flight')}
					>
						{/* prettier-ignore */}
						<svg className='w-10' viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									<rect y="17.6777" width={25} height={25} transform="rotate(-45 0 17.6777)" fill="url(#pattern0)" />
									<defs>
										<pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
										<use xlinkHref="#image0_2_71" transform="scale(0.01)" />
										</pattern>
										<image id="image0_2_71" width={100} height={100} xlinkHref="data:image/png;base64,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" />
									</defs>
								</svg>
						<span className="text-lg font-medium">Flight</span>
					</div>
					<div
						className={`flex cursor-pointer items-center rounded-3xl px-3 py-2 ${type === 'hotel' ? 'bg-blue-500/20' : ''}`}
						onClick={() => setType('hotel')}
					>
						{/* prettier-ignore */}
						<svg className='w-8' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									<rect width={25} height={25} fill="url(#pattern0-875573)" />
									<defs>
										<pattern id="pattern0-875573" patternContentUnits="objectBoundingBox" width={1} height={1}>
										<use xlinkHref="#image0_2_83" transform="scale(0.01)" />
										</pattern>
										<image id="image0_2_83" width={100} height={100} xlinkHref="data:image/png;base64,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" />
									</defs>
								</svg>
						<span className="ml-2 text-lg font-medium">Hotel</span>
					</div>
				</div>
				<div className="flex flex-col items-center space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
					<div className="w-full rounded-3xl border-2 border-slate-300 px-6 py-8 lg:w-auto ">
						<div className="flex items-center justify-between space-x-8">
							<div>
								<p className="text-lg font-medium text-slate-400">Living From</p>
								<h5 className="text-2xl font-medium">Dubai</h5>
							</div>
							{/* prettier-ignore */}
							<svg width={40} height={40} className='cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
										<circle cx={20} cy={20} r="19.5" stroke="black" strokeOpacity="0.5" strokeDasharray="4 4" />
										<rect x={6} y={8} width="26.7" height={24} fill="url(#pattern0-732860)" />
										<defs>
											<pattern id="pattern0-732860" patternContentUnits="objectBoundingBox" width={1} height={1}>
											<use xlinkHref="#image0_2_41" transform="translate(0.0505618) scale(0.00898876 0.01)" />
											</pattern>
											<image id="image0_2_41" width={100} height={100} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAHIUlEQVR4nO2dW4hVVRzGv/8+zqhnhBhHgiBTSV+KHqS3Ei0qi4rMh6SIxsw5e58jRqR5q3zowbzlRDB4ztrHGrtBTBQWaYg9FFq9BRoFkeQtKKRGgvF2xrP/PbSNwdnn7LXvazvrB/My57/WfPDNWmt/e629D6DRaDQajUaj0Wg06UJZCwAA27afZeaH25ScNU3zeSLi1ERlxKSsBbgMA3iiXUG9Xj8KoJ6OnOwwshYAACMjI4cAnG9Xw8w7hRA3pSQpM5QwZM2aNRcBHPQpu4GZd6ahJ0uUMAQAmPkzvxoierpWq7Vba3KPMoZMmjTpCwBX/OqI6K3+/v6pKUjKBGUM6evrGwZwWKJ0bldX1ytJ68kKZQwBACLynbZc1tm2fXuiYjJCKUMMw9gHQCZrdDJzjZmVyFFxopQhfX19pwAclSxfYNv2yiT1ZIFShrjITlsAsL1ard6YmJIMUM4QItoXoHy6YRi7EhOTAUrOwUKI3wDMka1n5sXlcvlQgpJSQ7kR4hJk2gIR7b5esomShjiOE8gQAHOnTZv2ciJiUkZJQ3p6eg4D+CtIG2ZeX6vVbktIUmooaciyZcuaAPYHbNZJRCLv2URJQ4BAqX0sC4QQz8UuJkWUNYSZDwK4ELQdEe3IczZR1hDLsi4A+CpE0+mGYbwRt560UNYQIPS0BQDP2LZ9f6xiUkJpQxqNxmeQ2CPxgpmrg4ODU2KWlDhKG7J69eq/AXwXsvncRqORu2yitCGA3NZuGzbkLZvkwZBPIzTvBJCrfRNfobVabSURPejx0WnTNNelcXhNCHEMwB1h2zNzX7lcfjtGSYkhM0Ic/HeI7dqftfV6fW2C2sYS5Jb8OPKUTXwNKRQKX7f6jJm3VqvVu+OVNB7DMKKsIwAwvVAo5OJMl9TcKoQ4CWBWi4/PjI6OzneviBKBmcm27ZMAbonSDxE9YJpmmLCZGrKLestRAmBmR0fHu0kunO469XnUfph5t+rZRMoQZv7Gp+QRIcSLMehpSYTUPpZ5ly9f3hRDP4khZUi7deQqRLTNtu27okvyxv2nOBe1HyLaqHI2kTKkVCqdAHDKp6yDmT8aGBjoiS5rPJZljSL4HokXSmcTaVFCiL0Alvt2SHSAmfdGUtWaewFUYuprC+TPgEnBzA0AZ4vF4rHe3t62j1e0QtoQ9ymnwTB/ZAJyiZm/BPBauVwOZLr0rZNms+m7jmj+ZwoRLSWiH4QQm4NMj4HmUSHECQCzA8vT7LIs6yWZwkA3F5lZj5JwrBVCPC5TGMgQwzD88oimNTuGhoYKfkWBDCEibUh45g0PD/ve9wtkiJtHToaWpLnPryDMBpUeJSEhopv9apTfMbyekNnMC2PIohBtNACY+Xe/mkCG1Ov1OdA5JAq+ezFBc4geHeH5pbu7+3u/okCGOI6jDQkJEa13T/W3JWgOuSe8pAnNTtM0pXY8pQ2pVquzodePoDgAXjVNc4NsA2lDCoWCHh3yXATwiWEY8y3L2hLk7Jr0C8yYWcqQib5BRUR/AvjRfZwiMEHeKCdjyJlGo9Gb1JGgWq22hCj6ziszH7Ysa7OKrwyUmrLc/NHqXNZVRonoyaTMEEJ0EFEc78pqACiraAYgaUiz2fQdHcy80TTNsI8O+OJOmd0x9LOtXC7/HIOkRJAyhIj88sd+y7LejEFPOw1LYujm18mTJ2+NoZ/EkL3KajdCzoyOji5Pcgpw96Qfi9oPEa1asWLFpRgkJYavIT7rxxXHcZ5K8lwvAAgh7gQwM0ofRPSe6ud6AQlD2q0fRLSpUql8G6+k8RiGEXW6Gm42m+tiEZMwMpe9BoCPPX5/ulQq7TJNM2ZJ42HmSIYw8/pKpXI2Lj1JouRxyrEIIW4FcDxsezdzLFL1Mvda8rBjKHV8pgVKZw4vlDck4nS1XeXM4YUqL+P3RAgxA0DYRxyOd3Z2vh6nnjRQeoS4o8P3cJkXRFRRPXN4obQhEdL5+3nIHF4oa4gQogiJg2UeDDuOI3WwWUWUNYSZHwJQDNEuN5nDC2UNCZnOj1iW9U7sYlJESUOGhoYKPt9J5UWDma08ZQ4vlLzsPXfu3EIAM4K0IaIdlmXlKnN4oeQICREGj4+MjOQuc3ihpCFEFGjvg5lXud9jlXuUM6Rarc5HgPe+A/jgennvO6CgIQGvroYdx0nrFVGpoJwhCHZ3d0OeM4cXSu2H7NmzZ1az2TwBOV1HTNNcmPfL3GtRaoQ0m82lkDOjQUS52ueQRSlDAtxM3Gma5k+JiskIZQwZGBjoYeYFEqXHz58/vyVxQRmhjCEdHR2PQuLOATO/cL1kDi+UMUQmnTPzh+Vy+UAaerJCCUP6+/unEtFin7J/iCgXZ6uioMTNxWKxuBhAV7saIlpnmuYfKUnKDCUMMQyjm5m9DuNd5WypVNqTxqE8jUaj0Wg0Go1Go5lo/As5303VJaLx1AAAAABJRU5ErkJggg==" />
										</defs>
									</svg>
							<div>
								<p className="text-lg font-medium text-slate-400">Going to</p>
								<h5 className="text-2xl font-medium">New York</h5>
							</div>
						</div>
					</div>
					<div className="rounded-3xl border-2 border-slate-300 px-6 py-8">
						<div className="flex items-center space-x-12">
							<div>
								<p className="flex text-lg font-medium text-slate-400">
									Leave
									{/* prettier-ignore */}
									<svg className='w-6 ml-2' viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
												<rect x="0.737457" width="27.8125" height={25} fill="url(#pattern0-468408)" />
												<defs>
													<pattern id="pattern0-468408" patternContentUnits="objectBoundingBox" width={1} height={1}>
													<use xlinkHref="#image0_2_59" transform="translate(0.0505618) scale(0.00898876 0.01)" />
													</pattern>
													<image id="image0_2_59" width={100} height={100} xlinkHref="data:image/png;base64,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" />
												</defs>
											</svg>
								</p>
								<h5 className="text-2xl font-medium">23 Jan, Sat</h5>
							</div>
							{/* prettier-ignore */}
							<svg width={40} height={40} className='cursor-pointer' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
									<circle cx={20} cy={20} r="19.5" stroke="black" strokeOpacity="0.5" strokeDasharray="4 4" />
									<rect x={7} y={8} width={25} height={25} fill="url(#pattern0-302759)" />
										<defs>
											<pattern id="pattern0-302759" patternContentUnits="objectBoundingBox" width={1} height={1}>
											<use xlinkHref="#image0_2_55" transform="scale(0.01)" />
											</pattern>
											<image id="image0_2_55" width={100} height={100} xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAFW0lEQVR4nO3dT4gbVRwH8O9vJgjaHnb9tyQUD9tDtwcpsiuWitCCPXoR1O1BD7Kbl2T3pBfpQUZQQel1k51Jg7AFa+PF+7Z0D4qUemvRarHUCrsirj3YP4ck8/NgVpc6k903fUneTH4f6KHzMu83ky+ZeTvzJgGEEEIIIYR5ZKqj5eXlQ0R0KqpNKXXcVJ1+G/Z+5Ex1xMzjRPSyqf6GZdj74QyrsIgmgVhGArGMBGIZ7VFWs9l0Nzc3D7uueyAMw6f+7YhoEkAxah1mfu8htnGgdrsfRNQmot+Z+bJS6pqx+rt94dLS0t5cLvcugAqAp01tQEZ8T0Qfr6+vn/U8L3yYjnYVSL1enw7D8CsA+x6mWNYR0Rozv6aU+iNxHzu9IAiCI8y8CuCxpEVGzHUAR5KG4vZqbDQahTAMLwIYS9L5iHoCwPMzMzNn1tbWWHflnqOsdrv9IeR8kcSxfD4/m2TF2EsnjUaj0G633+qx7l1mvkJEd7r/HwcwHfPa80k2bkh2ux8TAA4i/j08CeBz3eKx55Dl5eUSEdUiVyJaabVaCwsLC1thoFarHXUc52LU65VSxi5i9pvOflSr1UnXdZuICbDT6UxVKpUfderHHrIcx5mJabrGzHPbwxhVlUrlRqfTeR1AO6o9l8vFvYexYgNh5kLUciJaVUq1dAtlVaVSuQHgh6i2uPewl9hAiOjRmCJ/6hbJOiLajGnao9uXXMuyjARiGWN3DMvl8hoM3hIelmHvh3xCLCOBWEYCsYwEYhkJxDJJRllv+r7/ovEtSTFmPmSqrySBTHb/iT6QQ5ZlJBDLSCCWkUAso31SJ6JvAHzdh21JLWY+AeAZE31pB8LM55VSnoniWREEwQvMbCQQOWRZRgKxjARiGQnEMsbuGFar1fFcLhc5P6lYLEZOlKvX69PMPP7g8na7faM7myOS53m5fD5/kIgmkm/xzsIwZGb+uVwu3+xnne2MBUJEh7qTsiOboxYy8ylmPvrgctd1PwAQOZKr1WrPOY7zJYD9zNpTZ7UQEYgIQRCsOo4zOzc31/cZN6k6ZHmel9sKY5B1mfl4p9OJfFTatFQFMjExMYUBh7HNK4MokqpAADyZ9dppCyTzJBDLDHWiXLFYPGaqvqlHHno9jjAI8gmxjARiGQnEMhKIZSQQyxgbZSX5Jjbf908B+N8kM2Y+UyqVVkxtW5oM9RvliGg66uJi9779SJJDlmUkEMtIIJaRQCxj8qR+i4g+0VznLBFdimga2Yl4xgLp3gPX+io/pVRgqn5WyCHLMhKIZSQQy0gglknlRLkoQRAY+QJ9kw9wJpG6iXJxetROFTlkWSZVgbiu29+5oxZIVSCdTueXIZbXOqcllapAyuXyTSIayrmCiE4Pok6qAgEAx3FmAXwGIPH3q2u6SUQnx8bGPh1EsdRNlOs+EvC27nppkbpPSNZJIJbpFci9qIVE9HiftiW1mDnuUYW7un31CmQjpvjxZrP5iG6hrPJ9fz+Aqag2IlrX7S82kDAMv4tpmrp9+/bppaWlvbrFsqZarU4CaCJ+cHRZt8/YUZHv+3kAvyL+R1/uAbgC4C/dohmx089VXFVKPavbac9hqu/7dQBzup0KgIhOFIvFL3TX22mU9T6A35Jt0ki7MD8/fy7Jij0DUUptMPOrSDBaGGE/tVqtN4go0YXQHf8OKZVK34Zh+BKAW0kKjJgLrVbryOLiYtzPV+xo15c6VlZW9ty/f/8dAAv454Qm/nOViD6an58/l/STsUX7QUnP85xCoXA4DMMDRLSPiLR/tCQLmHmTmTcAXCqVSteHvT1CCCGEEEIIIYQQQgza38LSrV291E3nAAAAAElFTkSuQmCC" />
										</defs>
									</svg>
							<div>
								<p className="flex text-lg font-medium text-slate-400">
									Return
									{/* prettier-ignore */}
									<svg className='w-6 ml-2' viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
											<rect width="27.8125" height={25} transform="matrix(-1 0 0 1 28.1375 0)" fill="url(#pattern0-406964)" />
												<defs>
													<pattern id="pattern0-406964" patternContentUnits="objectBoundingBox" width={1} height={1}>
													<use xlinkHref="#image0_2_61" transform="translate(0.0505618) scale(0.00898876 0.01)" />
													</pattern>
													<image id="image0_2_61" width={100} height={100} xlinkHref="data:image/png;base64,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" />
												</defs>
											</svg>
								</p>
								<h5 className="text-2xl font-medium">14 Jan, Thu</h5>
							</div>
						</div>
					</div>
					<button className="rounded-[47px] bg-blue-500/80 p-8 transition duration-300 hover:bg-blue-500">
						{/* prettier-ignore */}
						<svg xmlns="http://www.w3.org/2000/svg" className="w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}
