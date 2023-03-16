"use clients";

import { Button } from "@/components";
import Image from "next/image";
import styles from "../styles";

export function Hero() {
  return (
    <div id="_hero">
      <div
        className={`${styles.paddings} ${styles.flexCenter} mb-[70px] flex-wrap gap-24`}
      >
        <div className="title-wrap">
          <h1 className="text-[48px] font-bold py-8 ">
            Hello there,
            <br />I am Ning-Hsin, <br />A web developer!
          </h1>
          <div>
            <Button link="#_contact" btnType="secondary" content="Contact Me" />
          </div>
        </div>
        <Image
          src="/portfolio-pic.png"
          width="300"
          height="450"
          alt="profile pic"
        />
      </div>
    </div>
  );
}
