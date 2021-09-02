import NewsCard from "./NewsCard";
const News = (props) => {
	return (
		<div className="articleContainer">
			{props.articles.map((article, index) => {
				return <NewsCard news={article} key={index}></NewsCard>;
			})}
			<button
				className="articleContainer__prev"
				onClick={() => {
					props.handleClick("prev");
				}}
				value="prev"
				disabled={props.prevIsDisabled}
			>
				Prev
			</button>
			<button
				className="articleContainer__next"
				onClick={(e) => {
					props.handleClick("next");
				}}
				value="next"
			>
				Next
			</button>
		</div>
	);
};

export { News };
