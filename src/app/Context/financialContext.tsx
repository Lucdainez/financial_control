"use client";
import { StaticImageData } from "next/image";
import React, { useState, ReactNode, useEffect } from "react";
import { FinancialContext } from "./index";

interface IProps {
  children: ReactNode;
}

const FinancialContextProvider = ({ children }: IProps) => {
  const [editFinancial, setEditFinancial] = useState({
    title: "",
    // srcImage: {
    //   blurDataURL: "",
    //   blurHeight: 0,
    //   blurWidth: 0,
    //   height: 0,
    //   src: "",
    //   width: 0,
    // },
    srcImage: "",
    link: "",
    category: "",
    plataform: "",
  });

  useEffect(() => {
  }, [setEditFinancial, editFinancial]);

  return (
    <FinancialContext.Provider value={{ editFinancial, setEditFinancial }}>
      {children}
    </FinancialContext.Provider>
  );
};

export default FinancialContextProvider;
