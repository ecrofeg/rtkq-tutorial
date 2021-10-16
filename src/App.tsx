import React, { ChangeEvent, useState } from "react";
import { Card, Input, Typography } from "antd";
import "./App.css";
import { useSearchMovieQuery } from "./api";

const { Meta } = Card;
const { Title } = Typography;

function App() {
	const [searchTitle, setSearchTitle] = useState("");
	const { data } = useSearchMovieQuery(searchTitle);
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTitle(event.target.value);
	};

	return (
		<div>
			<Title>Movies</Title>

			<div className="search">
				<Input
					placeholder="What are you looking for?"
					size="large"
					onChange={onChange}
				/>
			</div>

			<div className="grid">
				{data?.map((movie) => (
					<a
						href={`https://www.imdb.com/title/${movie.imdbID}`}
						target="_blank"
					>
						<Card
							hoverable
							style={{ width: 240 }}
							cover={<img alt={movie.Title} src={movie.Poster} />}
						>
							<Meta title={movie.Title} description={movie.Year} />
						</Card>
					</a>
				))}
			</div>
		</div>
	);
}

export default App;
