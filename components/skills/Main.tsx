import React, { useRef, VFC } from 'react';
import { css } from '@emotion/react';
import { colorStyles, useColorManager } from '../../modules/colorManager';
import { skillDatas } from '../../modules/datas';
import { SkillData } from '../../modules/types';
import { Card } from './Card';

export const Main: VFC = () => {
	return (
		<div css={styles.container}>
			<SkillGroup header="Programming Languages" datas={skillDatas.languages} />
			<SkillGroup header="Web Development" datas={skillDatas.frameworks} />
			<SkillGroup header="Development tools" datas={skillDatas.developmentTools} />
		</div>
	)
}

type SkillGroupProps = {
	header: string
	datas: SkillData[]
}

const SkillGroup: VFC<SkillGroupProps> = ({ header, datas }) => {
	const headerRef = useRef<HTMLDivElement>(null)

	useColorManager([headerRef])

	return (
		<div css={styles.skillGroup}>
			<div ref={headerRef} css={styles.header}>
				{header}
			</div>
			<div css={styles.cardContainer}>

				{
				
				datas.map(function(data, i){
					return(
						<Card key={i} data={data} />
					)
				} )
				}
				
			</div>
		</div>
	)
}

// ========================================================
// styles

const styles = {
	container: css`
		position: relative;
		width: 100%;
		height: 100%;
		padding: 20px 30px;
		padding-right: 0;
		overflow: auto;
		@media (max-width: 890px) {
			position: fixed;
			margin-top: 260px
		  }
	`,
	header: css`
		margin-bottom: 10px;
		font-size: 3.5rem;
		${colorStyles.mainText}
	`,
	skillGroup: css`
		margin-bottom: 60px;
		@media (max-width:890px) {
			margin-bottom: 260px;
		}
	`,
	cardContainer: css`
		display: flex;
		flex-wrap: wrap;
		grid-gap: 25px;
	`
}
