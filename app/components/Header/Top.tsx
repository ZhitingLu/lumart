"use client";
import Link from "next/link";
import { useState } from "react";
import { BsSuitHeart } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { RiAccountPinCircleFill, RiArrowDropDownFill } from "react-icons/ri";
import UserMenu from "./UserMenu";
import React from "react";

const menuItems = [
  {
    id: 1, icon: <img src="images/countries/spain.jpg" alt="country-icon-spain" className="w-[28px] h-[28px] rounded-full object-cover"></img>,
    label: "Spain / eur"
  },
  { id: 2, icon: <MdOutlineSecurity className="w-[20px] h-[20px] text-[#ccc] mr-1 group-hover:text-neutral-900" />, label: "Buyer protection", hideOnSmall: true },
  { id: 3, icon: null, label: "Customer Service", hideOnSmall: true },
  { id: 4, icon: null, label: "Help", hideOnSmall: true },
  { id: 5, icon: <BsSuitHeart className="w-[20px] h-[20px] text-[#ccc] mr-1 group-hover:text-neutral-900" />, label: "Wishlist", link: "/profile/wishlist" },
]

export default function Top() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-[#f8f8f8] border-t border-b border-[#eee]">
      <img src="/images/banner.jpg" alt="Top Banner" className="w-full h-15" />
      <div className="max-w-[95%] mx-auto p-[5px] flex items-center justify-between">
        <div></div>
        <ul className="flex items-center">
          {menuItems.map((item) => (
            <React.Fragment key={item.id}>
            <li className={`flex items-center text-[#666] cursor-pointer hover:text-neutral-900 group ${item.hideOnSmall ? "hidden sm:flex" : ""}`}>
              {item.icon && item.icon} {/* Render icon only if it exists */}
              {item.link ? (
                <Link href={item.link}>
                  <span className="text-xs text-gray-600 group-hover:text-neutral-900">{item.label}</span>
                </Link>
              ) : (
                <>
                  <span className="text-xs text-gray-600 group-hover:text-neutral-900">{item.label}</span>
                </>
              )
              }
              <span className="mx-2 text-neutral-300">|</span>
            </li>
              </React.Fragment>
          ))}

          {/* account section */}
          <li className="flex items-center text-[#666] cursor-pointer relative" 
          onMouseOver={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          >
            {loggedIn ? (
                <div className="flex items-center gap-[2px]">
                  <img className="w-[20px] h-[20px]" src="https://static.vecteezy.com/system/resources/thumbnails/019/896/012/small_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="avatar" />
                  <span className="text-xs text-gray-600 group-hover:text-neutral-900">Zhiting</span>
                  <RiArrowDropDownFill className="w-[20px] h-[20px] text-[#ccc] group-hover:text-neutral-900" />
                </div>
              ) : (
                <div className="flex items-center gap-[2px]">
                  <RiAccountPinCircleFill className="w-[20px] h-[20px] text-[#ccc] group-hover:text-neutral-900" />
                  <span className="text-xs text-gray-600 group-hover:text-neutral-900">Account</span>
                  <RiArrowDropDownFill className="w-[20px] h-[20px] text-[#ccc] group-hover:text-neutral-900" />
                </div>
            )}
           {visible &&  <UserMenu loggedIn={loggedIn} />}
          </li>
        </ul>
      </div>
    </div>

  )
}
