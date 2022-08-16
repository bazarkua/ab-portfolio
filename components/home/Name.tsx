import React, { useRef, VFC } from 'react';
import { css } from '@emotion/react';
import { colorStyles, useColorManager } from '../../modules/colorManager';
import { appState } from '../../modules/store';
import { useSnapshot } from 'valtio';

export const Name: VFC = () => {
	const mainRef = useRef<HTMLDivElement>(null)

	const appSnap = useSnapshot(appState)

	useColorManager([mainRef])

	return (
		<div css={styles.container}>
			<div ref={mainRef} css={styles.subText}>
				{appSnap.displayMode === 'light' ? (
					'Adilbek Bazarkulov | Portfolio'
				) : (
					'Adilbek Bazarkulov | Portfolio'
				)}

			</div>
		</div>
	)
}

// ========================================================
// styles

const styles = {
	container: css`
		display: flex;
		flex-direction: column;
	`,
	subText: css`
		font-size: 3rem;
		@media (max-width: 1200px) {
			font-size: 2.5rem;
			padding-top: 25px;
		  }
		${colorStyles.mainText}
	`
}
