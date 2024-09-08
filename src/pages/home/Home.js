import React from "react";
import Features from "./../../components/features/Feature";
import Chart from "../../components/Chart/Chart";
import WidgetSm from "../../components/widgetsm/WidgetSm";
import { xAxisData } from "../../datas";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart title="month Sale" grid data={xAxisData} dataKey="Sale" />
      <div className="homeWidgets">
        <WidgetSm />
      </div>
    </div>
  );
}
