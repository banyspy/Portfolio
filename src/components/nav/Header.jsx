import { useEffect } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Select, { components } from "react-select";
import { ReactComponent as FlagTH } from "../../svg/FlagTH.svg";
import { ReactComponent as FlagEN } from "../../svg/FlagEN.svg";

const Header = () => {
	const { i18n, t } = useTranslation(["common"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{background:"black"}}>
			<Link className="navbar-brand" to="/">
				{t("Pisit Akarateerapisal")}
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<select
							className="nav-link bg-dark border-0 ml-1 mr-2"
							value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}
						>
							<option value="en">English</option>
							<option value="th">Thai</option>
						</select>
					</li>
					<li className="nav-item ml-2">
						<Link className="nav-link" to="/AboutMe">
							{t("aboutme")}
						</Link>
					</li>
					<li className="nav-item ml-2">
						<Link className="nav-link" to="/Experience">
							{t("Experience")}
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
