const NewsCard = (props) => {
	return (
		<div className="newsCard">
			<img
				src={props.news.urlToImage}
				className="newsCard__Image"
				alt="newsImage"
			></img>
			<a
				className="newsCard__header"
				href={props.news.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h2>{props.news.title}</h2>
			</a>
			<div className="newsCard__body">{props.news.description}</div>
		</div>
	);
};

export default NewsCard;
