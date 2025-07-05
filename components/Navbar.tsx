"use client";

import React, { useState } from "react";
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/pranay-on-the-go.png" alt="logo" width={285} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
          onClick={() => setShowModal(true)}
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </nav>
  )
}

const LoginModal = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-lg flex flex-col gap-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="bold-20">Login</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
      </div>
      <form className="flex flex-col gap-4">
        <input type="email" placeholder="Email" className="border rounded-lg px-4 py-2" />
        <input type="password" placeholder="Password" className="border rounded-lg px-4 py-2" />
        <Button type="submit" title="Login" variant="btn_dark_green w-full" />
      </form>
    </div>
  </div>
);

export default Navbar