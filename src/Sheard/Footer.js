import React from 'react';
import footer from '../assets/images/footer.png';

const Footer = () => {
    return (
        <>
            <footer style={{
                background: `url{${footer}}`,
                background: 'cover'
            }} className="p-10">
                <div className="footer">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
            </footer>
            <div className='py-5 text-center text-white bg-slate-700'>
                <p>Copyright &copy; 2022 - All right reserved By <span className='text-green-400'>Md. Fakrul Islam Chowdhury</span></p>
            </div>
        </>
    );
};

export default Footer;