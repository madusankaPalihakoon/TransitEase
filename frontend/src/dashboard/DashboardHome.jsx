import { useState, useEffect } from "react";
import { PrinterFilled } from "@ant-design/icons";
import CardPlaceholder from "../components/CardPlaceholder";

export default function DashboardHome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" flex w-full p-4 h-fit flex-wrap justify-center gap-7">
      <CardPlaceholder />
      <CardPlaceholder />
      <CardPlaceholder />
    </div>
  );
}
