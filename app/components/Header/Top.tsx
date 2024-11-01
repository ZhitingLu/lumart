import Link from "next/link";
import { BsSuitHeart } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { RiAccountPinCircleFill, RiArrowDropDownFill } from "react-icons/ri";

const menuItems = [
  {
    id: 1, icon: <img src="images/countries/morocco.jpg" alt="" className="w-[28px] h-[28px] rounded-full object-cover"></img>,
    label: "Morocco / usd"
  },
  { id: 2, icon: <MdOutlineSecurity className="w-[20px] h-[20px] text-[#ccc] mr-1" />, label: "Buyer protection" },
  { id: 3, icon: null, label: "Customer Service" },
  { id: 4, icon: null, label: "Help" },
  { id: 5, icon: <BsSuitHeart className="w-[20px] h-[20px] text-[#ccc] mr-1" />, label: "Wishlist", link: "/profile/wishlist" },
  {
    id: 6, icon: null, label: "Account", link: "/profile/account", isAccount: true
  },

]

export default function Top() {
  return (
    <div className="bg-[#f8f8f8] border-t border-b border-[#eee]">
      <img src="/images/banner.jpg" alt="Top Banner" className="w-full h-15" />
      <div className="max-w-[95%] mx-auto p-[5px] flex items-center justify-between">
        <div></div>
        <ul className="flex items-center">
          {menuItems.map((item, index) =>
            <li key={item.id} className="flex items-center text-[#666] cursor-pointer">
              {item.icon && item.icon} {/* Render icon only if it exists */}
              {item.link ? (
                <Link href={item.link}>
                  {item.isAccount ? (
                    <div className="flex items-center gap-[2px]">
                      <RiAccountPinCircleFill className="w-[20px] h-[20px] text-[#ccc]" />
                      <span className="text-xs text-gray-600">{item.label}</span>
                      <RiArrowDropDownFill className="w-[20px] h-[20px] text-[#ccc]" />
                    </div>
                  ) : (
                    <span className="text-xs text-gray-600 hover:text-[#000]">{item.label}</span>
                  )
                  }
                </Link>
              ) : (
                <>
                  <span className="text-xs text-gray-600 hover:text-[#000]">{item.label}</span>
                </>
              )
              }
              {index < menuItems.length - 1 && <span className="mx-2">|</span>}
            </li>
          )}
        </ul>
      </div>
    </div>

  )
}
