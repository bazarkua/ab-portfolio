import Link from 'next/link';
import React, { useRef, VFC } from 'react';
import { css } from '@emotion/react';
import { colorStyles, useColorManager } from '../../modules/colorManager';
import { Name } from './Name';

export const Menu: VFC = () => {
	const worksRef = useRef<HTMLLIElement>(null)
	const skillsRef = useRef<HTMLLIElement>(null)
	const githubRef = useRef<HTMLLIElement>(null)
	const aboutMeRef = useRef<HTMLLIElement>(null)

	useColorManager([worksRef, skillsRef, githubRef, aboutMeRef])

	return (
		
		<nav css={styles.container}>
			<ul css={styles.list}>
				<li>
					<Name/>	
				</li>
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
				<li ref={aboutMeRef} css={styles.item}>
					<a href="#" target="_blank" rel="noopener noreferrer">
						About me
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
		
	`,
	list: css`
		
		display: flex;
		position: absolute;
		flex-direction: rows;
		grid-gap: 64px;
		margin: 0;
		padding: 30px;
		list-style-type: none;
		top: 0px;
		font-size: 3rem;
		width: 100%;
		
		${colorStyles.mainText};
		@media (max-width: 1200px) {
			flex-direction: column;
			background-color: rgba(0, 0, 0, 0.22);
			border-radius: 0px 0px 36px 36px;
		  }
	`,
	item: css`
		position: relative;
		transition: width 0.5s;
		${colorStyles.mainText}

		&::before {
			content: '';
			position: absolute;
			bottom: 0;
			width: 0%;
			height: 2px;
			transition: width 0.5s;
		}

		&:hover {
			${colorStyles.textBefore}
			&::before {
				width: 100%;
			}
		}
	`
}
