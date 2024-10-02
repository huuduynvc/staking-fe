import classes from "./Footer.module.css";
import { TextInput, Button } from "@mantine/core";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<section className={classes.footer}>
			<motion.div
				initial={{ x: "-100%", opacity: 0 }}
				animate={{ x: "0%", opacity: 1 }}
				transition={{ duration: 1, ease: "easeInOut" }}>
				<div className={classes.brandContainer}>
					<div className={classes.brand}>
						<p>BINANCE CHAIN</p>
						<p>KUCOIN</p>
						<p>BYBIT</p>
					</div>
					<TextInput
						className={classes.inputWrapper}
						classNames={{
							input: classes.input,
						}}
						placeholder="Enter your email address"
						rightSection={<Button color="orange">SUBSCRIBE</Button>}
						rightSectionWidth={140}
					/>
				</div>
			</motion.div>

			<div className={classes.web3}>
				<motion.p
					initial={{ x: "100%", opacity: 0 }}
					animate={{ x: "0%", opacity: 1 }}
					transition={{ duration: 1, ease: "easeInOut" }}>
					IN WEB3 GAMING
				</motion.p>
			</div>
		</section>
	);
};

export default Footer;
