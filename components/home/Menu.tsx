import Link from 'next/link';
import React, { useRef, VFC } from 'react';
import { css } from '@emotion/react';
import { colorStyles, useColorManager } from '../../modules/colorManager';

export const Menu: VFC = () => {
	const worksRef = useRef<HTMLLIElement>(null)
	const skillsRef = useRef<HTMLLIElement>(null)
	const githubRef = useRef<HTMLLIElement>(null)
	const telegramRef = useRef<HTMLLIElement>(null)

	useColorManager([worksRef, skillsRef, githubRef, telegramRef])

	return (
		<nav css={styles.container}>
			<ul css={styles.list}>
				<li ref={worksRef} css={styles.item}>
					<Link href="/works">
						<a>Projects</a>
					</Link>
				</li>
				<li ref={skillsRef} css={styles.item}>
					<Link href="/skills">
						<a>Skills</a>
					</Link>
				</li>
				<li ref={githubRef} css={styles.item}>
					<a href="https://github.com/bazarkua" target="_blank" rel="noopener noreferrer">
						GitHub
					</a>
				</li>
			</ul>
		</nav>
	)
}

// ========================================================
// styles

const styles = {
	container: css`
		position: absolute;
		top: 150px;
		left: 30px;
	`,
	list: css`
		display: flex;
		flex-direction: column;
		grid-gap: 20px;
		margin: 0;
		padding: 0;
		list-style-type: none;
		font-size: 3rem;
		${colorStyles.mainText};
		@media (max-width: 700px) {
			background-color: rgba(0, 0, 0, 0.8);
			border-radius: 30px;
			padding:10px
		
		  }
	`,
	item: css`
		position: relative;
		width: 100%;
		transition: width 0.5s;

		${colorStyles.textBefore}

		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			width: 0%;
			height: 2px;
			transition: width 0.5s;
		}

		&:hover {
			${colorStyles.mainText}
			&::before {
				width: 100%;
			}
		}
	`
}
