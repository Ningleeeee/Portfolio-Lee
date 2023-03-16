"use client";

import { useState } from "react";
import styles from "../styles";
import Image from "next/image";
import { socials } from "../constants";

export function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap bg-white z-10 items-center justify-between px-2 py-3 mb-3 sticky top-0">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg lg:text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              href="#_hero"
            >
              Portfolio.
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Image
                src="/menu-icon.svg"
                alt="mobile-menu icon"
                width="24"
                height="24"
              />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? "flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a className={`${styles.navbarList} `} href="#_projects">
                  <span className="ml-2">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a className={`${styles.navbarList} `} href="#_contact">
                  <span className="ml-2">Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${styles.navbarList}`}
                  href="https://drive.google.com/file/d/1WbXzK5gHZ0WNNS-8zstGmDr-BAnGztuc/view?usp=sharing"
                  download
                >
                  <span className="ml-2">CV</span>
                </a>
              </li>
              <li className="nav-item">
                <div className="flex flex-end gap-3 pl-[20px] items-baseline ">
                  {socials.map((social) => (
                    <a href={social.link}>
                      <img
                        key={social.key}
                        src={social.url}
                        alt={social.name}
                        className="rounded w-[22px] h-[22px] cursor-pointer hover:bg-[#FBDADA]"
                      />
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
