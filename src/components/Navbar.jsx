import { Disclosure, DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Disclosure
        as="nav"
        className="navbar navbar-expand-lg navbar-light bg-green-600"
      >
        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          <Bars3Icon
            aria-hidden="true"
            className="block h-6 w-6 group-data-[open]:hidden"
          />
          <XMarkIcon
            aria-hidden="true"
            className="hidden h-6 w-6 group-data-[open]:block"
          />
        </DisclosureButton>

        <Link to="/">
          <Button componentName="Bell" />
        </Link>
        <Link to="/about">
          <Button componentName="Face" />
        </Link>
        <Link to="/contact">
          <Button componentName="Cog" />
        </Link>

        <Button componentName="Calendar" />
      </Disclosure>
    </>
  );
};

export default Navbar;
