import { useTranslation } from "react-i18next";
import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
//import {skills} from "./data.js";
import { ReactComponent as CheckIcon } from "../../svg/check.svg";

const Home = () => {
	const { t, i18n, ready } = useTranslation(["experience"]);

	if (!ready) return "loading translations...";

	return (
		<div className="container mt-5 pt-5" id="box">
			<h1 className="text-center">{t("Experience")}</h1>
			<div className="py-4">{t("Here is experience that i ever had")}</div>
			<h4>1. {t("Game control with voice")}</h4>
            <br/>
            {t("The premise of project is a game that can be controlled by player's voice.")}
            {t("The game is made in unity engine and has voice recognition system by google called \"Google speech recognition\".")}
            <br/>some picture<br/>
            Skill require:<br/>
            Unity engine and how to integrate (Google) API with unity engine<br/>
            C# language and how to write working code efficiently, especially inside unity engine environment<br/>
            Designing<br/>
			<br/>Link to project<br/>
            <br/>
			<h4>2. {t("Simple Website")}</h4>
			<br/>
			{t("Mostly a website that made to show information to viewer with no backend because there is no need to.")}<br/>
			{t("Since I like to also watch what I create in mobile too, I made it with responsivity in mind.")}<br/>
			{t("The most obvious example would be this very website.")}
			Skill require:<br/>
			Javascript and CSS<br/>
			Framework and other tools that help speed up the process (Most familiar with React) <br/>
			How to deploy website<br/>
			<br/>
            <h4>3. {t("Mod game")}</h4>
			<br/>
			{t("Admitedly, this look like not so serious topic, but modifiying or create new thing for the existing project can help improve problem solving problem too depending on the project.")}
			{t("Pull request to other repository that has game data and contribute.")}
			<div className="py-4"></div>
			<h2>{("Other Category")}</h2>
			{t("Not relevant to the techy stuff. but may worth mentioning")}<br/><br/>
			<h4>{t("Sports")}</h4><br/>
			{t("I have play some physical sport, i.e. Tabletennis and Basketball. Although I'm not that good at it, It give me joy and help me exercise.")}<br/>
			{t("I also play a more \"Technical\" sport, i.e. chess. It give completely different experience compare to the former category that has more physical demand. It bring joy in another way.")}<br/>
			{t("I actually competing in chess during year 1 in university. It's not that serious competitve event, just a university event. Win 2 Lose 1. Lot of sloppy play, but it's ok, we play for fun ;)")}<br/>
			<div className="py-4"></div>
		</div>
	);
};

export default Home;
