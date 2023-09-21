import { StaticImageData } from "next/image";
import { createContext } from "react";

export interface ContextFinancialProps {
  editFinancial: {
    title: string,
    // srcImage: {
    //   blurDataURL: string;
    //   blurHeight: number;
    //   blurWidth: number;
    //   height: number;
    //   src: string;
    //   width: number;
    // };
    srcImage: string,
    link: string,
    category: string,
    plataform: string,
  };
  setEditFinancial: React.Dispatch<React.SetStateAction<{
    title: string,
    // srcImage: {
    //   blurDataURL: string;
    //   blurHeight: number;
    //   blurWidth: number;
    //   height: number;
    //   src: string;
    //   width: number;
    // };
    srcImage: string,
    link: string,
    category: string,
    plataform: string,
  }>>
}

export const FinancialContext = createContext<ContextFinancialProps>({} as ContextFinancialProps);
