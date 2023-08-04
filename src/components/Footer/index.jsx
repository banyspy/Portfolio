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
				<div className="col-md-6 pb-5"><h4>{t("Pisit Akarateerapisal")}</h4><br/>
				{t("Made with react 17.0.2")}</div>
            	<div className="col-md-6" >
					<h4 style={{lineHeight:"1em"}}>{t("Contact")}</h4>
					<div style={{lineHeight:"7em"}}>
						<div id="PhoneBorder">
							<Phone width="2em" style={{verticalAlign:"-0.5rem"}} /> 0887949459
						</div>
						<a href="https://www.google.com/intl/th/gmail/about/" target='_blank' rel="noopener">
            			    <Gmail width="3em" />
            			</a>
						<a href="https://fb.com" target='_blank' rel="noopener">
            			    <Facebook width="3em" viewBox="0 0 40 40"/>
            			</a>
						<a href="https://github.com" target='_blank' rel="noopener" >
            			    <Github width="3em" viewBox="0 0 98 96"/>
            			</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
