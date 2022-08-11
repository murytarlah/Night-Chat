import NavItem from '../NavItem/NavItem';
import styles from './Navbar.module.css';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = (props) => {

	const [showMenu, setShowMenu] = useState(true);
	const [screenWidth,setScreenWidth] = useState(window.innerWidth);

	const handleShowMenu = (e) => {
		e.preventDefault();
		setShowMenu(!showMenu);	
	};

	useEffect(() => {
		setScreenWidth(window.innerWidth)
		console.log(screenWidth)
		if(screenWidth > 765){
			setShowMenu(true)
		}
		else{
			setShowMenu(false)
		}

	}, [screenWidth]);

	const navItems = [
		{
			text: "individuals",
			link: "#individuals"
		},
		{
			text: "teams",
			link: "#teams"
		},
		{
			text: "enterprise",
			link: "#enterprise"
		},
		{
			text: "product",
			dropdown:{
				menu: [{text:'Attendance',link:'#'},{text:'Booking History',link:'#'}],
				showMenuIcon:["ep:arrow-up-bold",'ep:arrow-down-bold']
			}
		},
		{
			text: "pricing",
			link: "#buses"
		},
		{
			text: "resources",
			dropdown:{
				menu: [{text:'Attendance',link:'#'},{text:'Booking History',link:'#'}],
				showMenuIcon:["ep:arrow-up-bold",'ep:arrow-down-bold']
			}
		},
	]
	return (
		<div className={styles.navbar}>
			<div className={styles.logo}>
				<img src={process.env.PUBLIC_URL + `/assets/logo 2 1.png`} alt="" />
				<span>..now you can stay up..</span>
			</div>
			<div className={styles.navMenuToggler} onClick={handleShowMenu}>
				<Icon icon={!showMenu ? "quill:hamburger" : "eva:close-fill"} />
			</div>
			{
				screenWidth > 769 && showMenu && <nav className={styles.navMenu}>
				{navItems.map((navItem, index) => {
					return <NavItem key={index} text={navItem.text} link={navItem.link} dropdown={navItem.dropdown}/>
				})}
			</nav>
			}
			<nav className={screenWidth < 769 && showMenu ? styles.navMenu:'hidden'}>
				{navItems.map((navItem, index) => {
					return <NavItem key={index} text={navItem.text} link={navItem.link} dropdown={navItem.dropdown}/>
				})}
			</nav>
			<div className={showMenu ? styles.infoBtns: 'hidden'}>
				<NavItem text={'Login'} link={'#'} customStyle={{
					color: '#006BFF',
					fontWeight: 700
				}}/>
				<button className={`${styles.btn} ${styles.btn__rounded}`}>
					<NavLink to={'#'} customStyle={{
						color: 'white'
					}}>Get started</NavLink>
				</button>
			</div>
		</div>
	);
}

export default Navbar;