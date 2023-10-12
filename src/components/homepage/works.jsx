import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Amazon</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2022 - 2023</div>
							<div className="work-subtitle-intern">
								Software Engineer Intern
							</div>
							<div className="work-duration-intern">
								2021 - 2022
							</div>
						</div>

						<div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">
								Code In the Schools
							</div>
							<div className="work-subtitle">
								Coding Instructor
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
