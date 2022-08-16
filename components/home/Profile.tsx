import React, { useRef, useState, VFC } from 'react';
import { css } from '@emotion/react';
import { colorStyles, useColorManager } from '../../modules/colorManager';
import Image from 'next/image';
import GmailIcon from '../../public/assets/svg/GmailIcon.svg'

export const Profile: VFC = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const titleRef = useRef<HTMLButtonElement>(null)
	const dividerRef = useRef<HTMLDivElement>(null)
	const linkRef = useRef<HTMLAnchorElement>(null)

	const [profile, setProfile] = useState(false)

	useColorManager([titleRef, dividerRef, linkRef])

	const handleClick = () => {
		containerRef.current!.classList.toggle('active')
		titleRef.current!.classList.toggle('active')
		dividerRef.current!.classList.toggle('active')
		setProfile(true)

	}

	return (
		<div ref={containerRef} css={styles.container}>
			<button ref={titleRef} css={styles.title} onClick={handleClick}>
				{profile ? 'Profile' : 'Profile'}
			</button>
			<div css={styles.detailContainer}>
				<div ref={dividerRef} css={styles.divider} />
				<Block title="Name">Adilbek Bazarkulov</Block>
				<Block title="Location">USA, Corvallis, OR</Block>
				<Block title="Contact">
					<a
						ref={linkRef}
						css={styles.link}
						href="mailto:bazarkua@oregonstate.edu"
						target="_blank"
						rel="noopener noreferrer">
						<Image src={GmailIcon} width={20} height={20} />
					</a>
				</Block>
				<Block title="Quote">“It seems impossible, untill it's done...”</Block>
			</div>
		</div>
	)
}

const Block: VFC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
	const textRef = useRef<HTMLDivElement>(null)

	useColorManager([textRef])

	return (
		<div>
			<div css={styles.subTitle}>{title}</div>
			<div ref={textRef} css={styles.text}>
				{children}
			</div>
		</div>
	)
}

// ========================================================
// styles

const styles = {
	container: css`
		position: absolute;
		bottom: 20px;
		left: 30px;
		width: 300px;
		border: solid 5px white;

		transform: translate(0, 91%);
		transition: all 0.5s;

		&.active {
			transform: translate(0, 0%);
		}
		@media (max-width: 700px) {
			background-color: rgba(0, 0, 0, 0.95);
			border-radius: 0px 20px 0px 0px;
			left: 0px;
			bottom: 0px;
			width: 280px;
		  }
	`,

	title: css`
		position: relative;
		background-color: rgba(0, 0, 0, 0);
		border: none;
		padding: 0;
		font-family: 'Poppins', sans-serif;
		font-size: 3rem;
		transition: all 0.5s;
		${colorStyles.subText}
		@media (max-width: 700px) {
			font-size:20px
		  }
		&:hover {
			${colorStyles.mainText}
			cursor: pointer;
		}

		&.active {
			${colorStyles.mainText}
		}
	`,
	detailContainer: css`
		display: flex;
		flex-direction: column;
		grid-gap: 5px;
	`,
	divider: css`
		width: 0%;
		height: 2px;
		${colorStyles.textDivider}
		transition: width 0.5s;

		&.active {
			transition: width 0.5s 0.5s;
			width: 100%;
		}
	`,
	subTitle: css`
		font-size: 2.5rem;
		${colorStyles.subText}
	`,
	text: css`
		padding-left: 20px;
		font-size: 2rem;
		${colorStyles.mainText}
	`,
	link: css`
		position: relative;
		display: flex;
		align-items: center;
		width: 140px;
		${colorStyles.textBefore}
		${colorStyles.textAfter}

		&::before,	
		&::after {
			content: '';
			position: absolute;
			right: 0;
			width: 100px;
			height: 2px;
			background-color:white;
			transform-origin: left;
			transition: transform 0.3s, width 0.3s;
		}

		&:hover {
			&::before {
				transform: rotate(45deg);
				width: 100px;
			}
			&::after {
				transform: rotate(-45deg);
				width: 100px;
			}
		}
	`
}
