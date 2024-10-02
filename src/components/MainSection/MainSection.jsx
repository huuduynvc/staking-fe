import { useState } from "react";
import Footer from "../Footer/Footer";
import { motion, AnimatePresence } from "framer-motion";
import RightImage from "../../images/right.png";
import LeftImage from "../../images/left.png";
import Video from "../../videos/video.mp4";
import classes from "./MainSection.module.css";

const MainSection = () => {
	const [showVideo, setShowVideo] = useState(false);
	const [imagesAnimated, setImagesAnimated] = useState(false);
	const divVariants = {
		visible: { opacity: 1 },
		hidden: {
			opacity: 0,
			transition: { duration: 1 }, // Duration of fade-out
		},
	};

	const videoVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 1 } },
	};

	return (
		<section className={classes.mainSection}>
			<AnimatePresence>
				{!showVideo && (
					<motion.div
						key="image-container"
						className={classes.firstFrame}
						variants={divVariants}
						initial="visible"
						animate={imagesAnimated ? "hidden" : "visible"}
						onAnimationComplete={() => {
							if (imagesAnimated) {
								setShowVideo(true);
							}
						}}>
						<motion.img
							src={LeftImage}
							alt="Left Image"
							className={classes.leftImage}
							initial={{ y: "-25%" }}
							animate={{ y: "0%" }}
							transition={{ type: "spring", duration: 1 }}
							onAnimationComplete={() => setImagesAnimated(true)}
						/>

						<motion.img
							src={RightImage}
							alt="Right Image"
							className={classes.rightImage}
							initial={{ y: "25%" }}
							animate={{ y: "0%" }}
							transition={{ type: "spring", duration: 1 }}
						/>
					</motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence>
				{showVideo && (
					<>
						<motion.div
							key="video-container"
							variants={videoVariants}
							initial="hidden"
							animate="visible"
							className={classes.firstFrame}>
							<div className="">
								<div className={classes.videoContainer}>
									<video className={classes.video} src={Video} controls />
								</div>
							</div>
						</motion.div>
						<p className={classes.mainTitle}>THE HUB OF FUN & VALUE</p>
						<Footer />
					</>
				)}
			</AnimatePresence>
		</section>
	);
};

export default MainSection;
