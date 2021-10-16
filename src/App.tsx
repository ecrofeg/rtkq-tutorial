import React from "react";
import { Card, Input, Typography } from "antd";
import "./App.css";

const { Meta } = Card;
const { Title } = Typography;

function App() {
	const src = `https://www.imdb.com/title/tt0083658`;

	return (
		<div>
			<Title>Movies</Title>

			<div className="search">
				<Input placeholder="What are you looking for?" size="large" />
			</div>

			<div className="grid">
				<a href={src} target="_blank">
					<Card
						hoverable
						style={{ width: 240 }}
						cover={
							<img
								alt="example"
								src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
							/>
						}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</a>
			</div>
		</div>
	);
}

export default App;
