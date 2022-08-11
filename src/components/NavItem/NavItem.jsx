import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { Icon } from "@iconify/react";
import styles from "./NavItem.module.css";
import { motion } from "framer-motion";

const NavItem = ({ text, icon, link, location, dropdown, image, customStyle }) => {
	
	const [showMenu, setShowMenu] = useState(false);

	const handleShowMenu = (e) => {
		e.preventDefault();
		setShowMenu(!showMenu);
	};


	return (
		<NavLink 
			to={link ? link: ''} 
			className={styles.navItem }
			style={customStyle && customStyle}
		>
				{image && <img src={image}  alt=""/>}
				{icon && <Icon icon={icon.icon} rotate={icon.prop && icon.prop.rotate} style={{ stroke: "10px" }} />}
				<span className={styles.text}>{text}</span>
			{dropdown && (
				<div onClick={handleShowMenu}>
					<Icon
						icon={
								showMenu ? dropdown.showMenuIcon[0]: dropdown.showMenuIcon[1]
						}
						style={{ stroke: "10px" }}
					/>
				</div>
			)}
			{dropdown && showMenu && (
				<motion.nav

				 className={styles.dropdown}>
					{dropdown.menu && dropdown.menu.map((item, index) => (
						<NavLink className={'p-3'} to={item.link} key={index} style={{
							color: 'white'
						}}>{item.text}</NavLink>
					))}
				</motion.nav>
			)}
		</NavLink>
	);
};

export default NavItem;