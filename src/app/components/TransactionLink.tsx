"use-client";

import { animatePageOut } from "@/utils/animation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

interface ITransactionLinkProps {
  href: string;
  label: string;
}

const TransactionLink = ({ href, label }: ITransactionLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      // animatePageOut(href, router)
    }
  };

  return <div>TransactionLink</div>;
};

export default TransactionLink;
