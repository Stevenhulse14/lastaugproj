import { Route, Routes as R } from "react-router-dom";
import { About, Contact, Home } from ".";
function Routes() {
  return (
    <>
      <R>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </R>
    </>
  );
}

export default Routes;
