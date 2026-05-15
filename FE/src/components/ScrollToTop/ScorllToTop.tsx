import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
   const { pathname } = useLocation();

   useEffect(() => {
      // Immediately jump to the top of the page
      window.scrollTo(0, 0);
   }, [pathname]); // Trigger this every time the path changes

   return null;
}
