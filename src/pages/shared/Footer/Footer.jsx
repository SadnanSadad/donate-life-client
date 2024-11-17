import { BiDonateBlood } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-1 pb-4 bg-red-100">
            <footer className="footer text-base-content p-10">
                <aside className="mt-8">
                    <p className="text-lg">
                    <Link to="/" className="flex items-center gap-2 font-semibold text-xl text-red-700"><BiDonateBlood></BiDonateBlood><Link to="/"> DonateLife Ltd.</Link></Link>
                        <br />
                        Saving lives, one drop at a time <br /> Join us in the journey to give and find blood easily.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <Link to="/search-donors" className="link link-hover">Search Donors</Link>
                    <Link to="/blood-request" className="link link-hover">Blood Request</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to="/about-us" className="link link-hover">About us</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link to="/terms" className="link link-hover">Terms and condition</Link>
                    <Link to="/policies" className="link link-hover">Privacy policy</Link>
                </nav>

            </footer>
            <p className="footer-center text-sm">Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-semibold text-red-700"><Link to="/">DonateLife</Link></span> Ltd.</p>
        </div>
    );
};

export default Footer;