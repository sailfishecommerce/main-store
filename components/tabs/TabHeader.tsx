import TabList from "@/components/tabs/TabList";

interface Props {
  onClickHandler: (tabIndex:number) => void;
  tab: number;
}

export default function TabHeader({ onClickHandler, tab }: Props) {
  return (
    <ul
      className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
      id="tabs-tabFill"
      role="tablist"
    >
      <TabList
        id="signin"
        tab={tab}
        text="Sign in"
        onClick={onClickHandler}
        index={0}
      />
      <TabList
        id="signup"
        tab={tab}
        text="Sign up"
        onClick={onClickHandler}
        index={1}
      />
    </ul>
  );
}
