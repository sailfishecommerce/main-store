import { useState } from "react";

import TabBody from "@/components/tabs/TabBody";
import TabHeader from "@/components/tabs/TabHeader";

export default function Tabtemp() {
  const [tab, setTab] = useState(0);

  const onTabChange = (tabIndex: number) => setTab(tabIndex);

  return (
    <div className="w-100">
      <TabHeader tab={tab} onClickHandler={onTabChange} />
      <TabBody tab={tab} />
    </div>
  );
}
