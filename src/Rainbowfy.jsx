import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

const Rainbowfy = ({ children, font, fontSize, fontWeight}) => {
	const rainbow = keyframes`
		0% {
    	filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(-360deg);
		}
			`;
	const Rainbowed = styled.div`
		font: ${font};
		font-size: ${fontSize};
		font-weight: ${fontWeight};
		background-image: -webkit-linear-gradient(
			120deg,
			rgb(220, 64, 48),
			rgb(255, 206, 51),
			rgb(112, 183, 76)
		);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		animation: 2s linear 0s infinite normal none running ${rainbow};
	`;
	return <Rainbowed>{children}</Rainbowed>;
};

Rainbowfy.propTypes = {
	font: PropTypes.string,
	fontSize: PropTypes.string,
	fontWeight: PropTypes.string
};
Rainbowfy.defaultProps = {
	children: "Please Enter A Custom Text!",
	font: 'sans-serif',
	fontSize: '1rem',
	fontWeight: '400'
};

export default Rainbowfy;
