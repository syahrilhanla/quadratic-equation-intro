import "./App.css";
import { MathComponent } from "mathjax-react";
import { BulletList } from "./BulletList";
import {
	contents,
	Header,
	IntroductionClosing,
	MainTitle,
	Introduction,
	ThreeMethods,
	KeyToRemember,
	FactsToRemember,
} from "./Text";
import { Paragraph } from "./Paragraph";
import { texts } from "./paragraphData";
import { EquationsData, equations } from "./EquationsData";

function App() {
	const txtContents = contents.map((content) => content);

	return (
		<div className='App'>
			<div className='container'>
				<MainTitle />

				<div>
					<Header />
					<ul style={{ marginLeft: "1.9rem" }}>
						{txtContents.map((text, index) => (
							<BulletList text={text.content} key={index} />
						))}
					</ul>
					<br />
				</div>

				{/* INTRODUCTION */}
				<Introduction />
				{/* Introduction */}

				{/* Key points and principles */}
				<div>
					<KeyToRemember />
				</div>
				{/* Key points and principles */}
				{/* Facts to remember */}
				<div>
					<FactsToRemember />
				</div>
				{/* Facts to remember */}
				<div>
					<h3>
						<i>Glossary of Terms</i>
					</h3>{" "}
					<br />
					<span style={{ marginRight: "25%" }}>
						<i>Quadratic factorization</i>
					</span>
					This is when you can write a quadratic formula in the form
					<br />
					<br />
					<p style={{ float: "right", marginRight: "30%" }}>
						<EquationsData text={equations[14]} display={false} />
					</p>
					<br />
					<br />
					<span style={{ marginRight: "25%" }}>
						<i>Formula for solving quadratic equation</i>
					</span>
					The formula for solving the quadratic equation
					<br />
					<br />
					<p style={{ textAlign: "center" }}>
						<EquationsData text={equations[20]} display={false} />
					</p>
					<span style={{ marginLeft: "30%" }}>is </span> <br />
					<p style={{ textAlign: "center" }}>
						<EquationsData text={equations[9]} display={false} />
					</p>
					<br />
					<br />
					<span style={{ marginRight: "25%" }}>
						<i>Completing the square</i>
					</span>
					This is when we write the quadratic in the form
					<br />
					<br />
					<p style={{ textAlign: "center" }}>
						<EquationsData text={equations[15]} display={false} />
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
