import {
  BellIcon,
  FaceFrownIcon,
  CogIcon,
  CalendarIcon,
} from "@heroicons/react/20/solid";

const myObj = {
  Bell: <BellIcon aria-hidden="true" className="h-6 w-6" />,
  Face: <FaceFrownIcon aria-hidden="true" className="h-6 w-6" />,
  Cog: <CogIcon aria-hidden="true" className="h-6 w-6" />,
  Calendar: <CalendarIcon aria-hidden="true" className="h-6 w-6" />,
};

function Button({ componentName }) {
  console.log(componentName);
  return (
    <button
      type="button"
      className="relative rounded-full bg-gray-800 p-1
       text-gray-400 hover:text-white focus:outline-none focus:ring-2
       focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      {/* {BellIcon({ className: "h-6 w-6", "aria-hidden": "true" })} */}
      {myObj[componentName]}
    </button>
  );
}

export default Button;
