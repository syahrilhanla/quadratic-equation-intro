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
					<ul>
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
					<span>
						<i>Quadratic factorization</i>
					</span>
					<p>This is when you can write a quadratic formula in the form</p>
					<br />
					<p>ax bx c a x p x q 2 + += ( − )( − )</p>
					<br />
					<span>
						<i>Formula for solving quadratic equation</i>
					</span>
					<p>The formula for solving the quadratic equation</p>
					<br />
					<p>ax bx c 2 + += 0</p>
					<br />
					<p>is </p>
					{/* insert equation here */}
					<br />
					<span>
						<i>Formula for solving quadratic equation</i>
					</span>
					<p>The formula for solving the quadratic equation</p>
					<br />
				</div>
			</div>
		</div>
	);
}

export default App;
