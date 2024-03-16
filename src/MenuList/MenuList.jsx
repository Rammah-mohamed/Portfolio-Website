import "./MenuList.scss";

function MenuList({ setOpenMenu }) {
	const listData = [
		{
			id: "1",
			name: "intro",
		},
		{
			id: "2",
			name: "about",
		},
		{
			id: "3",
			name: "portfolio",
		},
		{
			id: "4",
			name: "testimonials",
		},
	];

	const handleClick = () => {
		setOpenMenu(false);
	};

	return (
		<div className='menuList'>
			{listData.map((i) => (
				<a href={"#" + i.name} key={i.id} onClick={handleClick}>
					<li>{i.name}</li>
				</a>
			))}
		</div>
	);
}

export default MenuList;
