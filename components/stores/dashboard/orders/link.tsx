import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const LinktoPrint = (props: string) => {
  const params = useParams();
  return <Link href={`/${params.storeID}/orders/${props}`}></Link>;
};

export default LinktoPrint;
