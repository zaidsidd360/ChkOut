import React from 'react'
import styled from 'styled-components'
import Model from '../assets/model2.png'

const Banner = () => {
	return (
		<BannerContainer>
			<div>
				<h1>Feel every beat, nonstop.</h1>
				<h2>Get free Spotify premium for 3 months on purchase of select brands.*</h2>
			</div>
			<img className='model' src={Model} alt="Model" />
		</BannerContainer>
	)
}

const BannerContainer = styled.div`
	width: 100%;
	height: 25em;
	background-color: #345E84;
	display: flex;
	justify-content: center;
	border-radius: 2em;
	margin-top: 3em;
	
	.model {
		height: 100%;
		width: auto;
		transform: scale(1.1);
		transform-origin: bottom;
		filter: drop-shadow(-5px 0px 10px #2c4f70);
	}

	div {
		color: #fff;
		margin-left: 3em;
		h1 {
			font-size: 5em;
		}
	}
`

export default Banner
