import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import {ReactComponent as Facebook} from "../../svg/Facebook.svg"
import {ReactComponent as Github} from "../../svg/GithubWhite.svg";
import {ReactComponent as Phone} from "../../svg/Phone.svg";
import {ReactComponent as Gmail} from "../../svg/Gmail.svg";

const Header = () => {
	const { i18n, t } = useTranslation(["common"]);

	return (
		<nav className="pt-4 col-md-12 text-white text-center" style={{background:"black"}}>
			<div className="row ">
				<div className="col-md-5 pb-5">
					<h4>{t("Pisit Akarateerapisal")}</h4><br/>
					{t("Made with react 17.0.2")}
				</div>
            	<div className="col-md-7" >
					<h4>{t("Contact")}</h4>
					<div style={{lineHeight:"5em"}}>	
						<div id="PhoneBorder">
							<Phone width="2em" style={{verticalAlign:"-0.5rem"}} /> 0936654953
						</div>
						<div id="GmailBorder" className="ml-4 mr-2">
							<Gmail width="2em" style={{verticalAlign:"-0.5rem"}} /> banyspy@gmail.com
						</div>
					</div>
					<div style={{lineHeight:"3em"}} className="mb-3">	
						<a href="https://th-th.facebook.com/banyspy/" target='_blank' rel="noopener">
            			    <Facebook width="3em" viewBox="0 0 40 40"/>
            			</a>
						<a href="https://github.com/banyspy" target='_blank' rel="noopener" >
            			    <Github width="3em" viewBox="0 0 98 96"/>
            			</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
