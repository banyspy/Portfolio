import { useTranslation } from "react-i18next";
import "./index.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CheckIcon } from "../../svg/check.svg";

const Home = () => {
	const { t, i18n, ready } = useTranslation(["home"]);

	if (!ready) return "loading translations...";

	const SkillMap = t("Skills", { returnObjects: true });

	return (
		<section id="Home">
		<div className="container mt-5 pt-5  text-center">
			<div className="container m-auto col-md-12" /*style={{position:"relative",overflow:"hidden"}}*/>
				<div className="row ">
        			<div className="col-md-7 mb-sm-4 d-flex justify-content-center">
						<div id="about">
          				<h1 className=" text-black">
            				{t('hello')}
          				</h1>
          				<p className="m ">
          				</p>
						</div>
        			</div>
        			<div className="col-md-5">
          				<img
            			//className="mx-auto"
						height={"100%"}
						width={"240"}
						//object-fit="contain"
            			alt="hero"
            			src="./2.png"
          				/>
        			</div>
				</div>
      		</div>
		</div>
		<div className="bg-dark text-white text-center">
			{/*About me part */}
			<h1 className="pt-5">{t('AboutMe')}</h1>
			<div className="container mt-5 text-center text-wrap" id="informationbox">
			<p> {t('AboutMe2')} </p>
			<br/>
			<Link to="/AboutMe">
				<p id="AboutMe">{t('LearnMe')}</p>
			</Link>
			</div>
			{/*Skill part */}
			<h1 className="pt-5">{t('Skill')}</h1>
			<div className="container mt-5 text-center text-wrap" id="informationbox">
          	{SkillMap.map((skill) => (
            <div key={skill} className="text-center p-2">
              <div id="Skill" className="m-auto  d-flex ">
				<CheckIcon id="svg"/>
                <span className="text-white">
                  {skill}
                </span>
              </div>
            </div>
          	))}
        	</div>
			{/*Project part */}
			<h1 className="pt-5">{t('My experience')}</h1>
			<div className="container mt-5 text-center text-wrap" id="informationbox">
				<p>{t("I have experience in some project that improve my skill in a various way.")}</p>
			</div>
			<Link to="/Experience">
				<p id="AboutMe">{t('LearnMe')}</p>
			</Link>
			<div className="py-4"></div>
		</div>
		
		</section>
	);
};

export default Home;
