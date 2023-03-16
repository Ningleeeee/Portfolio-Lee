"use client";

import { AwesomeButton } from "react-awesome-button";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

export function Button({ content, btnType, link }) {
  return (
    <AwesomeButton
      className={`aws-btn`}
      cssModule={AwesomeButtonStyles}
      type={btnType}
      href={link}
    >
      {content}
    </AwesomeButton>
  );
}
