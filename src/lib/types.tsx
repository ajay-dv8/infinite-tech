import { ReactElement } from "react";
// import { name } from './../../node_modules/next/dist/compiled/webpack/bundle5';

export type infiniteScrollTypes = {
  title?: string;
  icon?: ReactElement | string;
  description?: string;

  name?: string;
  image?: string;
};

export type MaqueeImageCardsProps = {
  // items?: infiniteScrollTypes[];  
  // direction?: "left" | "right";
  // speed?: "fast" | "normal" | "slow";
  // pauseOnHover?: boolean;
  // className?: string;
  // type?: "image" | "text";
  image?: string;
  name?: string;
}