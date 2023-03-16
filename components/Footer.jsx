import styles from "../styles";
import { socials } from "../constants";

export const Footer = () => (
  <footer className={`${styles.paddings}`}>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrp gap-4">
        <h4 className="font-extrabold text-[24px]  ">NING-HSIN LEE</h4>
        <p className="font-normal text-[14px] opacity-50">Copyright © 2023</p>
        <div className="flex gap-4">
          {socials.map((social) => (
            <a href={social.link} key={social.name}>
              <img
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
