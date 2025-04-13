import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { MdPlace } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


export const Footers = () => {
    const footerIcon = {
        Mdplace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    };

    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {
                    footerContact.map((currData, index) => {
                        const { icon, title, details } = currData;
                        return (
                            <div className="footer-contact" key={index}>
                                <div className="icon">{footerIcon[icon]}</div>
                                <div className="footer-contact-text">
                                    <p>{title}</p>
                                    <p>{details}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <hr className="container" />
            <div className="copyright-area">
                    <div className="container grid">
                        <div className="copyright-text">
                            <p>
                            Get connected with us on social networks:
                            </p>
                            <div className="icons">
                                <a href='#' className='me-4 text-reset'>
                                  <FaFacebookF color='gray' />
                                </a>
                                <a href='#' className='me-4 text-reset'>
                                  <FaTwitter color='gray' />
                                </a>
                                <a href='#' className='me-4 text-reset'>
                                  <FaGoogle color='gray' />
                                </a>
                                <a href='#' className='me-4 text-reset'>
                                  <FaInstagram color='gray' />
                                </a>
                                <a href='#' className='me-4 text-reset'>
                                  <FaLinkedin color='gray' />
                                </a>
                                <a href='#' className='me-4 text-reset'>
                                  <FaGithub color='gray' />
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </footer>
    );
};
