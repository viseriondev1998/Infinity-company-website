import React, { FC, ReactNode } from "react";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

interface LayoutProps {
     children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
     return (
          <div className="relative">
               <nav className="bg-gray-950 fixed top-0 shadow-xl z-50 w-full bg-opacity-50 py-5">
                    <div className="container mx-auto flex justify-between items-center">
                         <div className="w-[75px]">
                              <img src={require("../assets/infinity logo 2.png")} alt="" />
                         </div>
                         <div className="flex items-center gap-4">
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
                                   <a
                                        href="https://www.instagram.com/infinitytechsolution_?igsh=dDk2YXBndGp1ZXZm"
                                        target="__blank"
                                   >
                                        <AiOutlineInstagram size={30} />
                                   </a>
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
