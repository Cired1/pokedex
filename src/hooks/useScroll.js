import { useState } from "react";

function useScroll() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return { visible, scrollToTop, toggleVisible }
}

export default useScroll;