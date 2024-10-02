import { React, useMemo, useState } from "react";
import { Burger, Button, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { motion } from "framer-motion";
import SouniIcon from "../../images/souni.png";
import classes from "./Header.module.css";

const links = [
	{ link: "/staking", label: "Staking" },
	{ link: "/airdrop", label: "Airdrop" },
	{ link: "/marketplace", label: "Marketplace" },
	{ link: "/apply", label: "Apply" },
];

const Header = () => {
	const [opened, { toggle }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);

	const items = useMemo(() => {
		return links.map((link) => (
			<a
				key={link.label}
				href={link.link}
				className={classes.link}
				data-active={active === link.link || undefined}
				onClick={(event) => {
					event.preventDefault();
					setActive(link.link);
				}}>
				{link.label}
			</a>
		));
	}, [active]);

	return (
		<section className="flex justify-between items-center p-4 bg-dark text-white px-10">
			<div className="flex justify-center items-center gap-x-1">
				<img src={SouniIcon} alt="souni icon" />
				<p className="text-xl font-bold">Souni</p>
			</div>
			<Container size="md" className={classes.inner}>
				<Group gap={5} visibleFrom="xs" className={classes.group}>
					{items}
				</Group>

				<Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
			</Container>
			<Button className={classes.button}>CONNECT WALLET</Button>
		</section>
	);
};

export default Header;
