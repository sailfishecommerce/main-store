import {useState} from 'react'
import Noticebar from "@/components/alerts/Noticebar";
import Menu from "@/components/menu";

export default function Header() {
  const [showNoticebar, setShowNoticebar] = useState(true);
  const toggleNoticebar = () => setShowNoticebar(!showNoticebar) 

  
  return (
    <header>
      {showNoticebar && <Noticebar toggleBarVisibility={toggleNoticebar} />}
      <Menu />
    </header>
  );
}
