import { useEffect, useState } from "react";

export function useScrollToTop() {
  const [visible, setVisible] = useState(false);

  function toggleVisiblity() {
    if (window.scrollY > 600) setVisible(true);
    else setVisible(false);
  }

  useEffect(function () {
    document.addEventListener("scroll", toggleVisiblity);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return { visible, scrollToTop };
}
