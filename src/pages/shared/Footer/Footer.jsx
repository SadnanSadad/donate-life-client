import { BiDonateBlood } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-1 pb-4 bg-red-100">
            <footer className="footer text-base-content p-10">
                <aside className="mt-8">
                    <p className="text-lg">
                    <Link to="/" className="flex items-center gap-2 font-semibold text-xl text-red-700"><BiDonateBlood></BiDonateBlood> DonateLife Ltd.</Link>
                        <br />
                        Saving lives, one drop at a time <br /> Join us in the journey to give and find blood easily.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
            <p className="footer-center text-sm">Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-semibold text-red-700">DonateLife</span> Ltd.</p>
        </div>
    );
};

export default Footer;