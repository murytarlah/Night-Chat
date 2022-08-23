import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div>
				<div className={styles.footerHeader}>
					<h1>
						Easy <br />
						<span>ahead</span>
					</h1>
					<p>
						Night chat is your one stop app for easy and hassle free
						connection with the world so you can accomplish more.
					</p>
					<select name="language" id="">
						<option value="English">English</option>
						<option value="Spanish">Spanish</option>
						<option value="Deutch">Deutch</option>
						<option value="Japanese">Japanese</option>
					</select>
					<div className={styles.downloads}>

					</div>
				</div>
				<div className={styles.footerContent}>
					<div className={styles.headings}>
						<h3>About</h3>
						<ul>
							<li>
								<NavLink to={'#'}>About Night chat</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Contact Sales</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Chatroom</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Privacy</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Security</NavLink>
							</li>
						</ul>
					</div>
					<div className={styles.headings}>
						<h3>Popular Features</h3>
						<ul>
							<li>
								<NavLink to={'#'}>Night chat room</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Notifications</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Night chat mobile</NavLink>
							</li>
						</ul>
					</div>
					<div className={styles.headings}>
						<h3>Others</h3>
						<ul>
							<li>
								<NavLink to={'#'}>Users</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Sales</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Technology</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Terms & Conditions</NavLink>
							</li>
						</ul>
					</div>
					<div className={styles.headings}>
						<h3>Add-Ons</h3>
						<ul>
							<li>
								<NavLink to={'#'}>Download fro chrome</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Download for firefox</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Night chat mobile</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Messaging</NavLink>
							</li>
						</ul>
					</div>
					<div className={styles.headings}>
						<h3>Help</h3>
						<ul>
							<li>
								<NavLink to={'#'}>Help center</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Video</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Voice Messaging App</NavLink>
							</li>
						</ul>
					</div>
					<div className={styles.headings}>
						<h3>Developers</h3>
						<ul>
							<li>
								<NavLink to={'#'}>Developer</NavLink>
							</li>
							<li>
								<NavLink to={'#'}>Tools</NavLink>
							</li>
						</ul>
					</div>
				</div>

				<div className={styles.footerFooter}>
					<p>Copyright Night chat 2022</p>
					<p>Privacy / Terms and Conditions</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
