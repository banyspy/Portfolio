import { useTranslation } from "react-i18next";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

const AboutMe = () => {
	const {t,i18n, ready} = useTranslation(["aboutme"]);
	if (!ready) return "loading translations...";
	//const items = t('AboutMeTexts').split('\n');
	const items = t("AboutMeTexts", { returnObjects: true });
	return (
		<div className="container mt-5 pt-5" id="box">
			<h1 className="text-center">{t("AboutMe")}</h1>
			<br/>
			<div>{items.map((item,index) => ( //There are alot of paragraph so use array of string in Json for readability
            	<div key={index} className="">
                  	<p>{item}</p>
            	</div>
          	))}</div>
			<br/>
			<h2 className="text-center">{t("My Education")}</h2>
			<br/>
			<p>{t("Graduated from PSU University, Faculty of Engineer. Computer Engineer")}</p>
			<br/>
			<h2 className="text-center">{t("Portfolio")}</h2>
			<br/>
			<div id="PDFButtonBox">
				<a href={{/*Portfolio*/}} id="PDFButton" target="_blank"
            	    rel="noreferrer">
            	    {t("Open PDF TH")}
            	</a>
				<a href={{/*Portfolio*/}} id="PDFButton" target="_blank"
            	    rel="noreferrer">
            	    {t("Open PDF ENG")}
            	</a>
			</div>
			<p></p>
		</div>
	);
};

export default AboutMe;