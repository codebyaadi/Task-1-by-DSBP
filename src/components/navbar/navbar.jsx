import { motion } from "framer-motion";
import Sidebar from "./sidebar/sidebar";
import "./navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Lama Dev
                </motion.span>
                <div className="social">
                    <a href="#">
                        <img src="/facebook.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="/instagram.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="/youtube.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="/dribbble.png" alt="" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
