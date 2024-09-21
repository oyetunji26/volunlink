import React from 'react'
import { GiNightVision } from 'react-icons/gi'
import { LuArrowUpRight, LuPencilRuler } from 'react-icons/lu'
import larr from '../assets/image/howLeftArr.png'
import rarr from '../assets/image/howRightArr.png'
import bg from '../assets/image/bg.jpg'
import Image from 'next/image'


const About = () => {
  return (
    <div className='section py-7 md:px-14 flex flex-col gap-10'>
        <div className=''>
            <h1 className='section-h1 text-center'>About</h1>
            <p className='section-p text-center md:px-16'>
                At VoluLink, we believe in the power of community and the difference each person can make. Our mission is to connect passionate volunteers with organizations that need their support, fostering a network of engaged and dedicated individuals committed to positive change.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 bg-black">

            <div className='bg-[#0041c4] rounded-3xl text-white py-4 px-3'>
                <LuPencilRuler size={40}/>
                <div className='max-w-sm'>
                    <h2 className='text-3xl mt-4 mb-2'>Mission Statement</h2>
                    <p className='text-sm text-off'>
                        At VoluLink our mission is to bridge the gap between passionate volunteers and organizations in need of support.
                    </p>
                </div>
                <div className='mt-3 px-3 py-1.5 w-full flex items-center justify-between rounded-full bg-white text-black font-semibold'>
                    <span className='text-lg'>Join Us now</span>
                    <span className='bg-black size-8 rounded-full grid place-items-center'>
                        <LuArrowUpRight className='text-white '/>
                    </span>
                </div>
            </div>

            <div className='bg-[#ff5500] rounded-3xl text-white py-4 px-3'>
                {/* <LuPencilRuler */}
                <GiNightVision size={40}/>
                <div className='max-w-sm'>
                    <h2 className='text-3xl mt-4 mb-2'>Our Vision</h2>
                    <p className='text-sm text-off'>
                        At VoluLink our mission is to bridge the gap between passionate volunteers and organizations in need of support.
                    </p>
                </div>
                <div className='mt-3 px-3 py-1.5 w-full flex items-center justify-between rounded-full bg-white text-black font-semibold'>
                    <span className='text-lg'>Join Us now</span>
                    <span className='bg-black size-8 rounded-full grid place-items-center'>
                        <LuArrowUpRight className='text-white '/>
                    </span>
                </div>
            </div>

            <div className='bg-[#8000ff] rounded-3xl text-white py-4 px-3'>
                <LuPencilRuler size={40}/>
                <div className='max-w-sm'>
                    <h2 className='text-3xl mt-4 mb-2'>Our Goals</h2>
                    <p className='text-sm text-off'>
                        At VoluLink our mission is to bridge the gap between passionate volunteers and organizations in need of support.
                    </p>
                </div>
                <div className='mt-3 px-3 py-1.5 w-full flex items-center justify-between rounded-full bg-white text-black font-semibold'>
                    <span className='text-lg'>Join Us now</span>
                    <span className='bg-black size-8 rounded-full grid place-items-center'>
                        <LuArrowUpRight className='text-white '/>
                    </span>
                </div>
            </div>
        </div>

        <div className='py-6 md:w-3/4'>
            <h1 className='text-3xl font-semibold my-4'>Why Volulink?</h1>
            <p className='text-[#00030A99]'>At VoluLink, we believe in the power of community and the difference each person can make. Our mission is to connect passionate volunteers with organizations that need their support, fostering a network of engaged and dedicated individuals committed to positive change.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">

            <div className='bg-black rounded-3xl text-white py-4 px-3 max-md:mb-3'>
                <div className=''>
                    <h2 className='text-3xl mt-4 mb-2'>
                        Looking to Volunteer?
                    </h2>
                    <p className='text-sm text-off'>
                        Discover opportunities that match your skills and interests. Whether you want to help with animal care, community projects, or educational programs
                    </p>
                </div>
                <div className='mt-3 px-3 py-1.5 w-full flex items-center justify-between rounded-full bg-white text-black font-semibold'>
                    <span className='text-lg'>Join Us now</span>
                    <span className='bg-black size-8 rounded-full grid place-items-center'>
                        <LuArrowUpRight className='text-white '/>
                    </span>
                </div>
            </div>

            <div className='bg-black rounded-3xl text-white py-4 px-3'>
                <div className=''>
                    <h2 className='text-3xl mt-4 mb-2'>
                        Looking for opportunities
                    </h2>
                    <p className='text-sm text-off'>
                        Find passionate volunteers for your cause. Post opportunities, manage applications, and engage with a community dedicated to making an impact
                    </p>
                </div>
                <div className='mt-3 px-3 py-1.5 w-full flex items-center justify-between rounded-full bg-white text-black font-semibold'>
                    <span className='text-lg'>Join Us now</span>
                    <span className='bg-black size-8 rounded-full grid place-items-center'>
                        <LuArrowUpRight className='text-white '/>
                    </span>
                </div>
            </div>

        </div>

        <div className=' py-5 flex flex-col gap-14'>
            <div className='md:flex justify-between items-center'>
                <div className='text-3xl font-semibold text-left my-4'>How VoluLink <br className='max-md:hidden'/> works</div>
                
                <div className='md:w-1/4  text-[#00030A99]'>
                    Connecting volunteers with meaningful opportunities and helping organizations find the support they need has never been easier. Here’s how it works:
                </div>
            </div>

            <div className="how">
                <div className='bg-black how-grid-cols'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-3xl font-medium'>
                            Sign Up
                        </h2>
                        <p className='text-sm text-off'>
                            Create a profile and set your preferences. Whether you’re a volunteer looking to make a difference or an organization in need of support, signing up is quick and easy.
                        </p>
                    </div>
                    <div className='mt-3 px-3 py-1.5 w-full flex items-center justify-between rounded-full bg-white text-black font-semibold'>
                        <span className='text-base'>Sign Up</span>
                        <span className='bg-black size-8 rounded-full grid place-items-center'>
                            <LuArrowUpRight className='text-white '/>
                        </span>
                    </div>
                </div>

                <Image src={larr} width={10000} height={10000} className='max-md:hidden' alt='larr' />

                <div className='bg-[#0037A6] how-grid-cols md:-mt-32'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-3xl font-medium'>
                            Connect
                        </h2>
                        <p className='text-sm text-off'>
                            Find and apply for volunteer opportunities that match your skills and interests, or post opportunities and manage applications. Use our smart matching system to connect with the right opportunities or volunteer.
                        </p>
                    </div>
                    <div className='mt-3 px-3 py-1.5 w-full flex items-center justify-between rounded-full bg-white text-[#0037A6] font-semibold'>
                        <span className='text-base'>Explore opportunities</span>
                        <span className='bg-[#0037A6] size-8 rounded-full grid place-items-center'>
                            <LuArrowUpRight className='text-white '/>
                        </span>
                    </div>
                </div>

                <Image src={rarr} width={10000} height={10000} className='max-md:hidden' alt='larr' />

                <div className='bg-black how-grid-cols'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-3xl font-medium'>
                            Impact
                        </h2>
                        <p className='text-sm text-off'>
                            Track your volunteer hours, see the difference you’re making, and share your experiences. Organizations can manage volunteers and measure the impact of their initiatives.
                        </p>
                    </div>
                    <div className='mt-3 px-3 py-1.5 w-full flex items-center justify-between rounded-full bg-white text-black font-semibold'>
                        <span className='text-base'>Start Making an impact</span>
                        <span className='bg-black size-8 rounded-full grid place-items-center'>
                            <LuArrowUpRight className='text-white '/>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className=''>
            <h1 className='section-h1 text-center'>Success Stories</h1>
            <p className='section-p text-center md:px-32 lg:px-40'>
                Discover the incredible journeys of volunteers and organizations who have made a difference <br/> through our platform. 
            </p>
        </div>

        <div>
            <div className="flex overflow-x-scroll gap-7" style={{scrollbarWidth : 'none'}}>
                <div className=' border-2 p-3.5 border-[#0041C4] min-w-[70%] md:min-w-[40%] flex flex-col gap-3.5 rounded-xl text-[13px]'>
                    <div className='flex items-center gap-2'>
                        <Image src={bg} alt='oi' className='rounded-full size-10 border' />
                        <p className='text-off-black'>Jane Doe, Volunteer</p>
                    </div>
                    <p className=''>
                    After retiring, I wanted to give back to my community and pursue my love for animals. Through VoluLink, I discovered an opportunity with a local animal rescue organization. Not only have I been able to spend time with rescued pets, but I've also helped with adoption events and community outreach. The platform made it easy to find an opportunity that matched my skills and interests
                    </p>
                </div>

                <div className=' border-2 p-3.5 border-[#0041C4] min-w-[70%] md:min-w-[40%] flex flex-col gap-3.5 rounded-xl text-[13px]'>
                    <div className='flex items-center gap-2'>
                        <Image src={bg} alt='oi' className='rounded-full size-10 border' />
                        <p className='text-off-black'>Jane Doe, Volunteer</p>
                    </div>
                    <p className=''>
                    After retiring, I wanted to give back to my community and pursue my love for animals. Through VoluLink, I discovered an opportunity with a local animal rescue organization. Not only have I been able to spend time with rescued pets, but I've also helped with adoption events and community outreach. The platform made it easy to find an opportunity that matched my skills and interests
                    </p>
                </div>

                <div className=' border-2 p-3.5 border-[#0041C4] min-w-[70%] md:min-w-[40%] flex flex-col gap-3.5 rounded-xl text-[13px]'>
                    <div className='flex items-center gap-2'>
                        <Image src={bg} alt='oi' className='rounded-full size-10 border' />
                        <p className='text-off-black'>Jane Doe, Volunteer</p>
                    </div>
                    <p className=''>
                    After retiring, I wanted to give back to my community and pursue my love for animals. Through VoluLink, I discovered an opportunity with a local animal rescue organization. Not only have I been able to spend time with rescued pets, but I've also helped with adoption events and community outreach. The platform made it easy to find an opportunity that matched my skills and interests
                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About