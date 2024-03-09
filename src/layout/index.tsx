import React, { FC, ReactNode, useState } from "react";
import { AiOutlineDown, AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

interface LayoutProps {
     children: ReactNode;
}

const Links = [
     {
          label: "home",
          path: "/",
     },
     {
          label: "about",
          path: "/about-us",
     },
     {
          label: "contact",
          path: "/contact-us",
     },
];

export const Layout: FC<LayoutProps> = ({ children }) => {
     const [dropDown, setDropDown] = useState<boolean>(false);
     return (
          <div className="relative">
               <nav className="bg-gray-950 fixed top-0 shadow-xl z-50 w-full bg-opacity-50 py-5">
                    <div className="container mx-auto flex justify-between items-center">
                         <h6 className="text-white text-2xl">Infinity</h6>
                         <div className="flex items-center gap-4">
                              <ul className="flex gap-5">
                                   {Links.map(({ label, path }, i) => (
                                        <li key={i} className="uppercase  text-sm font-semibold text-white">
                                             {label}
                                        </li>
                                   ))}
                                   <li
                                        onMouseEnter={() => setDropDown(true)}
                                        className="relative uppercase flex items-center gap-3 text-sm font-semibold text-white"
                                   >
                                        services <AiOutlineDown />
                                        {dropDown && (
                                             <div
                                                  onMouseLeave={() => setDropDown(false)}
                                                  className="absolute top-10 right-0 border w-[200px] bg-white rounded-md p-3 text-gray-900"
                                             >
                                                  <ul className="flex flex-col gap-4 divide-y-2">
                                                       <li className="">NGO Website</li>
                                                       <li className="pt-4">School CRM</li>
                                                  </ul>
                                             </div>
                                        )}
                                   </li>
                              </ul>
                              <button className="bg-white p-3 text-primary-500 rounded-md">Book Demo</button>
                         </div>
                    </div>
               </nav>
               <main>{children}</main>
               <footer className=" bg-gray-100">
                    <div className="grid grid-cols-12 gap-10 px-10 py-10">
                         <div className="col-span-4">
                              <p className="text-gray-500 text-sm">
                                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus incidunt ducimus
                                   voluptas dolore, nulla atque illo repudiandae mollitia nemo. Ratione, voluptate in
                                   impedit beatae molestiae tempora quas facilis minima? Modi.
                              </p>
                              <div className="mt-10 flex gap-10">
                                   <AiOutlineInstagram size={30} />
                                   <AiOutlineFacebook size={30} />
                                   <AiOutlineWhatsApp size={30} />
                              </div>
                         </div>
                    </div>
                    <div className="flex justify-between px-10 items-center bg-gray-200 py-3">
                         <p>Copyright Reserved @ 2024</p>
                         <p className="text-primary-700">Developed by Infinity & team</p>
                    </div>
               </footer>
          </div>
     );
};
