import Link from "next/link";
import { BsSuitHeart } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { RiAccountPinCircleFill, RiArrowDropDownFill } from "react-icons/ri";

export default function Top() {
  return (
    <div className="bg-[#f8f8f8] border-t border-b border-[#eee]">
      <img src="/images/banner.jpg" alt="Top Banner" className="w-full h-15" />
      <div className="max-w-[95%] mx-auto p-[5px] flex items-center justify-between">
        <div></div>
        <ul className="flex gap-[16px]">
          <li className="flex items-center justify-center gap-[4px] text-[#666]">
            <img src="images/countries/morocco.jpg" alt="" className="w-[28px] h-[28px] rounded-full object-cover"></img>
            <span className="text-xs text-gray-600">Morocco / usd</span>
          </li>
          <li className="flex items-center justify-center gap-[4px] text-[#666]">
            <MdOutlineSecurity />
            <span className="text-xs text-gray-600">Buyer protection</span>
          </li>
          <li className="flex items-center justify-center gap-[4px] text-[#666]">
            <span className="text-xs text-gray-600">Customer Service</span>
          </li>
          <li className="flex items-center justify-center gap-[4px] text-[#666]">
            <span className="text-xs text-gray-600">Help</span>
          </li>
          <li className="flex items-center justify-center gap-[4px] text-[#666]">
            <BsSuitHeart />
            <Link href="/profile/wishlist">
              <span className="text-xs text-gray-600">Wishlist</span>
            </Link>
          </li>
          <li className="flex items-center justify-center gap-[4px] text-[#666]">
            <div className="flex items-center gap-[2px]">
              <RiAccountPinCircleFill />
              <span className="text-xs text-gray-600">Account</span>
              <RiArrowDropDownFill />
            </div>
          </li>
        </ul>
      </div>
    </div>

  )
}
