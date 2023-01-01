"use client";

import React from "react";
import Button from "./Button";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface SeeAllButtonProps {
  children?: React.ReactNode;
  route: string;
}

const SeeAllButton = ({ children, route }: SeeAllButtonProps) => {
  const router = useRouter();

  return (
    <Button onClick={() => router.push(route)} className="py-2 px-4" color="secondary">
      {children || (
        <>
          See All
          <IoArrowForwardOutline className="text-xl ml-2" />
        </>
      )}
    </Button>
  );
};

export default SeeAllButton;
