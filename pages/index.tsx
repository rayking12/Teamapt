import type { NextPage } from "next";
import { useEffect, useCallback, useState, useMemo } from "react";
import Head from "next/head";
import Lines from "../public/image/lines.png";
import Image from "next/image";
import useWebAnimations, {
	rotateOutUpRight,
} from "@wellyshen/use-web-animations";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const { keyframes, animationOptions } = rotateOutUpRight;
	return (
		<>
			<section className="main" style={{}}>
				<div className="container">
					<div className="nav-container">
						<div className="img-div1">
							<Image src="/image/Logo.png" width={1000} height={1000} alt="" />
						</div>
						<div className="img-div2">
							<svg
								width="40"
								height="40"
								viewBox="0 0 40 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									width="40"
									height="40"
									rx="8"
									fill="white"
									fillOpacity="0.1"
								/>
								<rect
									x="4"
									y="4"
									width="32"
									height="32"
									rx="8"
									fill="#9B51E0"
								/>
								<rect
									width="22"
									height="24"
									transform="translate(8 8)"
									fill="#9B51E0"
								/>
								<path
									d="M25.4167 30H12.5833C11.5708 30 10.75 29.1046 10.75 28V14C10.75 12.8954 11.5708 12 12.5833 12H14.4167V10H16.25V12H21.75V10H23.5833V12H25.4167C26.4292 12 27.25 12.8954 27.25 14V28C27.25 29.1046 26.4292 30 25.4167 30ZM12.5833 18V28H25.4167V18H12.5833ZM12.5833 14V16H25.4167V14H12.5833ZM19.9167 26H14.4167V20H19.9167V26Z"
									fill="white"
								/>
							</svg>

							<div style={{ color: "white", marginLeft: "10px" }}>
								<p className="nav1">Day 1</p>
								<p className="nav2">of 5</p>
							</div>
						</div>
					</div>
					<div className="stars"></div>
					<div className="main-wrapper">
						<div className="wrapper">
							<div className="content1">
								<span className="h1">Unlock to</span>
								<span className="h2">Power your dreams!</span>
							</div>
							<div className="content2">
								<p className="h3">
									Stand a chance to win <br></br>
									<span style={{ fontWeight: 700 }}> ₦3,000,000 </span> everyday
									for the next 5 days
								</p>
							</div>
							<div className="container2">
								<div className="content3">
									<h1 className="H1">🚀 How To Play</h1>
									<p className="H2">
										1. Guess the right combination of numbers
									</p>
									<p className="H3">
										2. Win <span style={{ fontWeight: 700 }}>₦3,000,000</span>{" "}
										instantly
									</p>
									<p className="H4">
										Sounds unbelievable? Well guess right & see it for yourself!
									</p>
								</div>
								<div className="sub-container">
									<div style={{ marginRight: "10px" }}>
										<svg
											width="20"
											height="36"
											viewBox="0 0 18 19"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
										>
											<path
												d="M0 18.26H18V0.26H0V18.26Z"
												fill="url(#pattern0)"
											/>
											<defs>
												<pattern
													id="pattern0"
													patternContentUnits="objectBoundingBox"
													width="1"
													height="1"
												>
													<use
														href="#image0_2_5284"
														transform="scale(0.015625)"
													/>
												</pattern>
												<image
													id="image0_2_5284"
													width="64"
													height="64"
													href="data:image/png;base64,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"
												/>
											</defs>
										</svg>
									</div>

									<p className="H5">
										Think well before you guess. You have only 2 attempts per
										day and even after you win, you can come back the next day
										to try for another jackpot!
									</p>
								</div>
							</div>
							<button className="button">
								<h1 className="button-text"> Play The Game </h1>
								<svg
									width="10"
									height="16"
									viewBox="0 0 10 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M0.829505 0.454505C1.26884 0.015165 1.98116 0.015165 2.4205 0.454505L9.1705 7.2045C9.60983 7.64384 9.60983 8.35616 9.1705 8.7955L2.4205 15.5455C1.98116 15.9848 1.26884 15.9848 0.829505 15.5455C0.390165 15.1062 0.390165 14.3938 0.829505 13.9545L6.78401 8L0.829505 2.0455C0.390165 1.60616 0.390165 0.893845 0.829505 0.454505Z"
										fill="white"
									/>
								</svg>
							</button>
						</div>
						<div>
							<div className="raysDemoHolder">
								<div className="coin-left"></div>
								<div className="raysLogo"></div>
								<div className="rays"></div>
								<div className="coin-right"></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
