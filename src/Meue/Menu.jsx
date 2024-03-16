import "./Menu.scss";
import MenuList from "../MenuList/MenuList";

function Menu({ openMenu, setOpenMenu }) {
	return (
		<div className={openMenu ? "menu active" : "menu"}>
			<ul>
				<MenuList setOpenMenu={setOpenMenu} />
			</ul>
		</div>
	);
}

export default Menu;
