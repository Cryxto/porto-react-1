import { useState, Fragment } from "react";

import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

// function classNames(...classes: any[]) {
//   return classes.filter(Boolean).join(' ')
// }

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(true);
  };
  return (
    <Menu as={"nav"} className={"relative flex h-16 items-center justify-between flex-wrap "}>
      <TabGroup>
        <TabList>
          <Tab aria-selected={false} onClick={toggleNavbar} className={isOpen?'nav-tab nav-tab-select':'nav-tab'}>
            <span className="logo text-2xl">Cryxto</span>
          </Tab>
        </TabList>
      </TabGroup>
      <TabGroup>
        <TabList className={"flex gap-2"}>
          <Tab aria-selected={false} onClick={toggleNavbar} className={isOpen?'nav-tab nav-tab-select':'nav-tab'}>Tab 1</Tab>
          <Tab aria-selected={false} onClick={toggleNavbar} className={isOpen?'nav-tab nav-tab-select':'nav-tab'}>Tab 2</Tab>
          <Tab aria-selected={false} onClick={toggleNavbar} className={isOpen?'nav-tab nav-tab-select':'nav-tab'}>Tab 3</Tab>
        </TabList>
        {/* <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
        <TabPanel>Content </TabPanel>
      </TabPanels> */}
      </TabGroup>
    </Menu>
  );
}

export { Navbar };
