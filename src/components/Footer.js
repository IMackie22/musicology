import React from "react";
import styled from "styled-components";

export default function Footer() {
	return <Container>Footer</Container>;
}

const Container = styled.div`
	background-color: #346751;
	height: 100%;
	width: 100%;
	border-top: 3px solid #161616;
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	align-items: center;
	justify-content: center;
	padding: 0 1rem;
`;
