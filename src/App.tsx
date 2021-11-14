import React, { ChangeEvent, useState } from "react";
import { Card, Input, Button, Typography } from "antd";
import "./App.css";
import { useAddMovieMutation, useSearchMovieQuery } from "./api";

const { Meta } = Card;
const { Title } = Typography;

function App() {
	const [searchTitle, setSearchTitle] = useState("Dune");
	const { data } = useSearchMovieQuery(searchTitle);
	const [addMovie] = useAddMovieMutation();
	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTitle(event.target.value);
	};
	const onClick = () => {
		addMovie();
	};

	return (
		<div>
			<div className="title">
				<Title>Movies</Title>

				<Button type="primary" onClick={onClick}>
					Add movie
				</Button>
			</div>

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
