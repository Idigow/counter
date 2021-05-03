import React from 'react';
import footer_logo from "./footer-logo.svg";
function Footer(props) {
    return (
        <div className="footer">
            <div className="wrap footer-flex">
                <ul className="footer-menu">
                    <li><img src={footer_logo} alt="logo"/></li>
                    <li><a href="#">Партнерам</a></li>
                    <li><a href="#">Разработчикам</a></li>
                    <li><a href="#">Вакансии</a></li>
                </ul>
                <div className="footer-txt">
                    ООО “интукод”, 2020г.
                </div>
            </div>
        </div>
    );
}

export default Footer;