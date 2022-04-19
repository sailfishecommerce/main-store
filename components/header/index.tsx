import {useState} from 'react'

import Noticebar from "@/components/alerts/Noticebar";
import Menu from "@/components/menu";
import useNavStyle from "@/hooks/useNavStyle";

export default function Header() {
  const [showNoticebar, setShowNoticebar] = useState(true);
  const toggleNoticebar = () => setShowNoticebar(!showNoticebar) 
  const { navStyle } = useNavStyle();

  
  return (
    <header className={`${navStyle} bg-white w-full pb-0  md:pb-4`}>
      {showNoticebar && <Noticebar toggleBarVisibility={toggleNoticebar} />}
      <Menu />
    </header>
  );
}
