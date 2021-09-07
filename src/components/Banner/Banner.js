import styled from "styled-components";
const Banner = styled.div`
	width: 70vw;
	position: relative;

	left: 15%;
	height: 60vh;

	background-size: cover;
	background-image: url(${(props) => props.imgUrl});
`;
export default Banner;
