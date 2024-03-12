import React from "react";
import { Layout } from "../../layout";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const Homepage = () => {
     return (
          <Layout>
               <div className="h-screen">
                    <div className="w-full relative h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
                         <video
                              autoPlay
                              loop
                              muted
                              controls={false}
                              src={require("../../assets/stars_-_82360 (1080p).mp4")}
                              className="absolute z-10"
                         ></video>
                         <div className="w-[80%] mx-auto z-30">
                              <div className="grid xl:grid-cols-12 grid-cols-6 gap-10 items-center">
                                   <div className="col-span-7 flex flex-col gap-10">
                                        <h6 className="text-xl text-white">We provide professional IT services</h6>
                                        <div>
                                             <h1 className="text-6xl font-semibold text-white my-5">
                                                  IT experts for fast-growing companies
                                             </h1>
                                             <p className="text-gray-300">
                                                  we'll keep your systems running and proactively fix problems before
                                                  you're aware of them We'll respond to your service request 15 minutes
                                                  or less
                                             </p>
                                        </div>
                                        <div className="mt-5 flex gap-10">
                                             <button className="bg-white text-primary-500 py-3 rounded-sm capitalize font-semibold px-10">
                                                  explore service
                                             </button>
                                             <button className="border-2 border-white text-white py-3 rounded-sm capitalize font-semibold px-10">
                                                  learn more
                                             </button>
                                        </div>
                                   </div>
                                   <div className="col-span-5 bg-white px-8 py-6 rounded-lg">
                                        <h6 className="text-xl font-semibold">Book an demo</h6>
                                        <p className="text-gray-400 ">Get our sales advice & demo IT solutions</p>
                                        <div className="my-5">
                                             <form action="#">
                                                  <div className="gap-5 flex flex-col">
                                                       <div className="">
                                                            <label className="font-semibold text-sm" htmlFor="name">
                                                                 Your name
                                                            </label>
                                                            <input
                                                                 type="text"
                                                                 className="flex-1 border rounded-md text-sm w-full py-3 px-3 focus:outline-none"
                                                                 placeholder="Enter your full name"
                                                            />
                                                       </div>
                                                       <div>
                                                            <label className="font-semibold text-sm" htmlFor="name">
                                                                 Email address
                                                            </label>
                                                            <input
                                                                 type="text"
                                                                 className="flex-1 border rounded-md text-sm w-full py-3 px-3 focus:outline-none"
                                                                 placeholder="Enter your email address"
                                                            />
                                                       </div>
                                                       <div>
                                                            <label className="font-semibold text-sm" htmlFor="name">
                                                                 Enter message
                                                            </label>
                                                            <textarea
                                                                 name=""
                                                                 id=""
                                                                 className="flex-1 text-sm border rounded-md w-full py-2 px-3 focus:outline-none"
                                                                 cols={7}
                                                            ></textarea>
                                                       </div>
                                                       <div>
                                                            <button className="bg-primary-700 w-full rounded-md p-3">
                                                                 <span className="text-white capitalize">
                                                                      get appointment
                                                                 </span>
                                                            </button>
                                                       </div>
                                                  </div>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="my-10  py-20 xl:w-[95%] mx-auto">
                    <div className="grid grid-cols-12 w-[95%] items-center mx-auto gap-20">
                         <div className="col-span-6 flex justify-center">
                              <img
                                   className="rounded-lg"
                                   src="https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                   alt=""
                              />
                         </div>
                         <div className="col-span-6">
                              <h6 className="text-md uppercase text-primary-600 font-semibold">about the company</h6>
                              <h1 className="text-6xl font-semibold">We are the best IT solutions company</h1>
                              <p className="text-gray-500 mt-10">
                                   We have been helping businesses with their IT needs of their technical requirements
                                   fulfillments, that's for fast, reliable, outsourced onsite and remote IT support
                                   services.
                              </p>
                              <p className="text-gray-500 my-5">
                                   During this time, we've built reputation for excellent software solutions clients
                                   satisfaction as evidanced by returning clients year after year returning best
                                   solution of business growth has primarily come from our referrals.
                              </p>
                              <button className="bg-primary-700 py-3 px-10">
                                   <span className="text-white capitalize font-semibold">learn more</span>
                              </button>
                         </div>
                    </div>
               </div>
               <div className="py-20 bg-primary-950">
                    <div className="container mx-auto">
                         <p className="text-white text-center uppercase">our latest services</p>
                         <h1 className="text-6xl text-center w-[80%] text-white font-serif mx-auto">
                              We provide all types of professional IT services
                         </h1>
                         <div className="grid grid-cols-12 mt-10 gap-10">
                              <div className="col-span-6 p-5 border-[0.3px] rounded-lg">
                                   <h6 className="text-white font-semibold text-2xl">Managed IT services</h6>
                                   <p className="text-gray-300 my-3">
                                        We are providing best admin controls to control your business!, Lorem ipsum
                                        dolor sit amet consectetur adipisicing elit. Veniam doloribus magni, impedit
                                        vitae natus corporis accusantium facilis libero commodi. Nemo.
                                   </p>
                                   <button className="text-white capitalize">discover more?</button>
                              </div>
                              <div className="col-span-6 p-5 border-[0.3px] rounded-lg">
                                   <h6 className="text-white font-semibold text-2xl">
                                        Simulated controls over the business
                                   </h6>
                                   <p className="text-gray-300 my-3">
                                        We are providing best admin controls to control your business!, Lorem ipsum
                                        dolor sit amet consectetur adipisicing elit. Veniam doloribus magni, impedit
                                        vitae natus corporis accusantium facilis libero commodi. Nemo.
                                   </p>
                                   <button className="text-white capitalize">discover more?</button>
                              </div>
                              <div className="col-span-6 p-5 border-[0.3px] rounded-lg">
                                   <h6 className="text-white font-semibold text-2xl">Cloud & Hosting Services</h6>
                                   <p className="text-gray-300 my-3">
                                        We are providing best admin controls to control your business!, Lorem ipsum
                                        dolor sit amet consectetur adipisicing elit. Veniam doloribus magni, impedit
                                        vitae natus corporis accusantium facilis libero commodi. Nemo.
                                   </p>
                                   <button className="text-white capitalize">discover more?</button>
                              </div>
                              <div className="col-span-6 p-5 border-[0.3px] rounded-lg">
                                   <h6 className="text-white font-semibold text-2xl">Website & App Development</h6>
                                   <p className="text-gray-300 my-3">
                                        We are providing best admin controls to control your business!, Lorem ipsum
                                        dolor sit amet consectetur adipisicing elit. Veniam doloribus magni, impedit
                                        vitae natus corporis accusantium facilis libero commodi. Nemo.
                                   </p>
                                   <button className="text-white capitalize">discover more?</button>
                              </div>
                              <div className="col-span-6 p-5 border-[0.3px] rounded-lg">
                                   <h6 className="text-white font-semibold text-2xl">Backup & Disaster Recovery</h6>
                                   <p className="text-gray-300 my-3">
                                        We are providing best admin controls to control your business!, Lorem ipsum
                                        dolor sit amet consectetur adipisicing elit. Veniam doloribus magni, impedit
                                        vitae natus corporis accusantium facilis libero commodi. Nemo.
                                   </p>
                                   <button className="text-white capitalize">discover more?</button>
                              </div>
                              <div className="col-span-6 p-5 border-[0.3px] rounded-lg">
                                   <h6 className="text-white font-semibold text-2xl">Network & Security</h6>
                                   <p className="text-gray-300 my-3">
                                        We are providing best admin controls to control your business!, Lorem ipsum
                                        dolor sit amet consectetur adipisicing elit. Veniam doloribus magni, impedit
                                        vitae natus corporis accusantium facilis libero commodi. Nemo.
                                   </p>
                                   <button className="text-white capitalize">discover more?</button>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="my-10  py-20 xl:w-[95%] mx-auto">
                    <div className="grid grid-cols-12 w-[95%] items-center mx-auto gap-20">
                         <div className="col-span-6">
                              <h6 className="text-md uppercase text-primary-600 font-semibold">why choose us</h6>
                              <h1 className="text-6xl font-semibold">We promise high quality IT services</h1>
                              <p className="text-gray-500 mt-10">
                                   Supporting the growth of our clients is fundamental reasons why our IT services is
                                   chosen Austin IT partner for many
                              </p>

                              <ul className="mt-5 flex flex-col gap-3">
                                   <li className="flex gap-5 items-center">
                                        <AiOutlineCheckCircle size={25} className="fill-primary-700" />
                                        <p>We help educational & multi featured technology efficiency</p>
                                   </li>
                                   <li className="flex gap-5 items-center">
                                        <AiOutlineCheckCircle size={25} className="fill-primary-700" />
                                        <p>Providing high memory storage for our clients</p>
                                   </li>
                                   <li className="flex gap-5 items-center">
                                        <AiOutlineCheckCircle size={25} className="fill-primary-700" />
                                        <p>Fast processor, high quality user interfaces & experience to our clients</p>
                                   </li>
                              </ul>
                         </div>
                         <div className="col-span-6 flex justify-center object-contain w-full">
                              <img
                                   className="rounded-lg"
                                   src="https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                   alt=""
                              />
                         </div>
                    </div>
               </div>
               <div className="w-[90%] mx-auto py-10">
                    <p className="uppercase text-primary-700 text-center">our work process</p>
                    <h1 className="text-center text-gray-900 whitespace-pre-wrap font-serif text-6xl">
                         We follow a simple work {"\n"}process for work
                    </h1>
                    <div className="grid grid-cols-12 mt-20">
                         <div className="col-span-3 flex flex-col justify-start items-start hover:shadow-xl hover:border-gray-300 border-2 transition-all duration-700 border-transparent p-5 rounded-lg">
                              <p className="text-3xl bg-primary-700 px-5 py-2 rounded-lg text-white">1</p>
                              <p className="text-2xl my-4 font-semibold text-gray-900">Choose a services</p>
                              <p className="text-gray-500 whitespace-pre-wrap">
                                   Great service providers{"\n"} to listen first, and all
                              </p>
                         </div>
                         <div className="col-span-3 flex flex-col justify-start items-start hover:shadow-xl hover:border-gray-300 border-2 transition-all duration-700 border-transparent p-5 rounded-lg">
                              <p className="text-3xl bg-primary-700 px-5 py-2 rounded-lg text-white">2</p>
                              <p className="text-2xl my-4 font-semibold text-gray-900">Request meeting</p>
                              <p className="text-gray-500 whitespace-pre-wrap">
                                   Feel free to prefer another time and location for you
                              </p>
                         </div>
                         <div className="col-span-3 flex flex-col justify-start items-start hover:shadow-xl hover:border-gray-300 border-2 transition-all duration-700 border-transparent p-5 rounded-lg">
                              <p className="text-3xl bg-primary-700 px-5 py-2 rounded-lg text-white">3</p>
                              <p className="text-2xl my-4 font-semibold text-gray-900">Get custom plans</p>
                              <p className="text-gray-500 whitespace-pre-wrap">
                                   purchasing a custom drawn home plan ensure you get
                              </p>
                         </div>
                         <div className="col-span-3 flex flex-col justify-start items-start hover:shadow-xl hover:border-gray-300 border-2 transition-all duration-700 border-transparent p-5 rounded-lg">
                              <p className="text-3xl bg-primary-700 px-5 py-2 rounded-lg text-white">4</p>
                              <p className="text-2xl my-4 font-semibold text-gray-900">Successfully done</p>
                              <p className="text-gray-500 whitespace-pre-wrap">
                                   Successfully done a project most popular phrase services
                              </p>
                         </div>
                    </div>
               </div>
               <div className=" xl:w-[90%] mx-auto flex flex-col gap-20 mt-20">
                    <p className="uppercase text-primary-700 font-semibold text-center">Meet our team</p>
                    <div className="grid grid-cols-12 gap-10 justify-center">
                         <div className="col-span-4 flex flex-col items-center">
                              {/* <div className="w-[350px]"> */}
                              <img src={require("../../assets/RAJAT.jpeg")} className="w-[100%]" alt="" />
                              {/* </div> */}
                              <div className="my-5">
                                   <h6 className="text-2xl text-primary-700 font-semibold">Rajat Singh</h6>
                                   <p>Founder & CEO</p>
                              </div>
                         </div>
                         <div className="col-span-4 flex flex-col items-center">
                              {/* <div className="w-[350px]"> */}
                              <img src={require("../../assets/BHANU.jpeg")} className="w-[80%]" alt="" />
                              {/* </div>{" "} */}
                              <div className="my-5">
                                   <h6 className="text-2xl text-primary-700 font-semibold">Bhanu Singh</h6>
                                   <p>Product & Sales</p>
                              </div>
                         </div>
                         <div className="col-span-4 flex flex-col items-center">
                              <div className="w-[350px]">
                                   <img src={require("../../assets/AAKASH.jpeg")} className="w-[80%]" alt="" />
                              </div>
                              <div className="my-5">
                                   <h6 className="text-2xl text-primary-700 font-semibold">Mistry Aakash</h6>
                                   <p>Technical & Disaster Management</p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="w-[92%] my-20 py-20 mx-auto">
                    <h6 className="text-6xl font-semibold text-gray-900">
                         This is our <span className="text-primary-700">products</span> & what we are providing to you!
                    </h6>
                    <div className="grid grid-cols-12 gap-10 mt-20">
                         <div className="col-span-6">
                              <img src={require("../../assets/ngo-web.png")} className="rounded-lg" alt="" />
                              <h6 className="text-3xl font-serif font-semibold text-gray-900 my-5">
                                   Infinity NGO customized websites
                              </h6>
                              <p className="text-gray-500">
                                   NGO website with pre defined features like receiving online donations events &
                                   programs which is controlled by admins of NGO
                              </p>
                         </div>
                         <div className="col-span-6 flex justify-center items-center flex-col">
                              <div className="w-[80%]">
                                   <img
                                        src={
                                             "https://cdn.dribbble.com/users/3609695/screenshots/16275972/media/60c54d43c0c938195b456ac87817a2d2.png?resize=1600x1200&vertical=center"
                                        }
                                        className="rounded-lg w-full"
                                        alt=""
                                   />
                                   <h6 className="text-3xl font-serif font-semibold text-gray-900 my-5">School CRM</h6>
                                   <p className="text-gray-500">
                                        School CRM is main projects which is helpful to manage every modules of schools,
                                        students, staff, fees structure & managing audits.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="bg-primary-950 py-10 mt-10">
                    <div className="w-[60%] mx-auto">
                         <h6 className="text-white font-semibold text-2xl text-center">
                              Need IT solutions or customized website or mobile app which is simplify your business?
                         </h6>
                         <p className="text-gray-300 w-[60%] text-center my-10 mx-auto">
                              We can manage most your IT online, things like office moves and network installation are
                              done in persons.
                         </p>
                         <div className="flex gap-10 justify-center">
                              <button className="bg-transparent border-2 border-white px-10 py-4 hover:bg-primary-700 hover:border-transparent transition-all duration-300 rounded-lg text-white capitalize p-5">
                                   get a quote
                              </button>
                         </div>
                    </div>
               </div>
               <div className="grid grid-cols-12 gap-20 justify-center flex-warp w-[90%] my-10 py-10 items-start mx-auto">
                    <div className="col-span-4 bg-gray-100 rounded-lg p-3 flex gap-5 items-start border-l-8 border-primary-700">
                         <div>
                              <p className="text-md">Call for consultations now!</p>
                              <p className="text-xl text-gray-500">Sales :- +91 77588 14877</p>
                              <p className="text-xl text-gray-500">Demo :- +91 97669 00513</p>
                              <p className="text-xl text-gray-500">Technical :- +91 86690 26894</p>
                         </div>
                    </div>
                    <div className="col-span-4 bg-gray-100 rounded-lg p-3 flex gap-5 items-start border-l-8 border-primary-700">
                         <div>
                              <p className="text-md">Write to us</p>
                              <p className="text-xl text-gray-500">infinitytechsolution@gmail.com</p>
                         </div>
                    </div>
                    <div className="col-span-4 bg-gray-100 rounded-lg p-3 flex gap-5 items-start border-l-8 border-primary-700">
                         <div>
                              <p className="text-md">Address</p>
                              <p className="text-md text-gray-500">
                                   Shop no. 1 Anam apartment opp. samarth nagar gate hanuman Nagar nalasopara west
                                   401203
                              </p>
                         </div>
                    </div>
               </div>
          </Layout>
     );
};
