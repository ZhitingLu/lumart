import Link from 'next/link';
import React from 'react';

interface UserMenuProps {
    loggedIn: boolean;
}

export default function UserMenu({ loggedIn }: UserMenuProps) {
    return (
        <div className='w-[280px] shadow-md absolute top-full right-0 bg-white z-99 flex flex-col gap-4 py-4'>
            <h4 className='text-center'>Welcome to LuMart!</h4>
            {loggedIn ? (
                <div className="flex w-full gap-2.5 px-4">
                    <img className="w-[20px] h-[20px]" src="https://static.vecteezy.com/system/resources/thumbnails/019/896/012/small_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="avatar" />
                    <div className="div">
                        <span>Welcome Back,</span>
                        <h3>Zhiting</h3>
                        <span>Sign out</span>
                    </div>
                </div>
            ) : (
                <div className="flex w-full gap-2.5 px-4">
                    <button className='flex items-center justify-center gap-1.5 bg-indigo-400 text-white w-full pointer font-semibold rounded-[2px]'>Register</button>
                    <button className='flex items-center justify-center gap-1.5 bg-indigo-400 text-white w-full pointer font-semibold rounded-[2px]'>Login</button>
                </div>
            )}
            <ul>
                <li>
                    <Link href="/profile">Account</Link>
                </li>
                <li>
                    <Link href="/profile/orders">My Orders</Link>
                </li>
                <li>
                    <Link href="/profile/inbox">Inbox</Link>
                </li>
                <li>
                    <Link href="/profile/address">Address</Link>
                </li>
                <li>
                    <Link href="/profile/wishlist">Wishlist</Link>
                </li>
               
            </ul>
        </div>
    )
}
