import { MathComponent } from "mathjax-react";
import { Paragraph } from "./Paragraph";
import { texts } from "./paragraphData";
import { EquationsData, equations } from "./EquationsData";

const textContents = [
	"be able to solve quadratic equations that factorize into linear terms",
	"be able to use the formula for solving quadratic equations",
	"understand how to complete the square for a quadratic and hence solve the equation.",
];

export const contents = textContents.map((content) => ({ content }));

export const Introduction = () => {
	return (
		<>
			<div>
				<h3>
					<i>Introduction</i>
				</h3>{" "}
				<Paragraph text={texts[0]} />
				<br />
				<p style={{ textAlign: "center" }}>
					<EquationsData text={equations[0]} />
				</p>
				<br />
				<p>which is equivalent to the equation</p>
				<br />
				<p style={{ textAlign: "center" }}>
					<EquationsData text={equations[1]} />
				</p>
				<br />
			</div>

			<div>
				<p>
					In the 8th Century BC quadratic equations of the form{" "}
					{<MathComponent tex={String.raw`ax^2 = c`} display={false} />}
					and {<MathComponent tex={String.raw`ax2 + bx = c`} display={false} />}
					were explored in ancient India, using geometric methods. Babylonian
					mathematicians from circa 400 BC and Chinese mathematicians from circa
					200 BC used the method of completing the square (
					{<i>see Section F4.3</i>}) to solve quadratic equations with positive
					roots, but did not have a general formula.
				</p>
				<br />
				<Paragraph text={texts[2]} />
				<br />
				<p style={{ textAlign: "center" }}>
					<span>
						<EquationsData text={equations[11]} display={false} />{" "}
					</span>
					<span style={{ float: "right" }}>
						<EquationsData text={equations[12]} display={false} /> are
						constants, <EquationsData text={equations[13]} display={false} />
					</span>
				</p>
				<br />
				<br />
				<p style={{ textAlign: "center" }}>
					<span style={{ float: "left" }}>as</span>

					<EquationsData text={equations[9]} display={false} />
				</p>
				<br />
				<IntroductionClosing />
				<br />
				{/* Introduction */}
			</div>
		</>
	);
};

export const Header = () => (
	<>
		<h3>
			<i>Learning Objectives</i>
		</h3>{" "}
		<br />
		<p>
			This unit is focused on methods of solving quadratic equations. After
			completing Unit F4 you should{" "}
		</p>
	</>
);

export const MainTitle = () => (
	<>
		<div className='main-title'>
			<h1>
				<span>
					F4 <i>Solving Quadratic Equations</i>
				</span>{" "}
				<span style={{ float: "right" }}>Introduction</span>
			</h1>
			<hr />
			<br />
		</div>
	</>
);

export const IntroductionClosing = () => {
	return (
		<>
			<p>
				was published by Henry Heaton in The American Mathematical Monthly (see
				information at
			</p>
			<br />
			<p style={{ textAlign: "center" }}>
				http://en.wikipedia.org/wiki/Quadratic_equation
			</p>
			<p style={{ textAlign: "center" }}>
				<span style={{ float: "left" }}>and </span>
				http://www.jstor.org/stable/2971099?seq=1 )
			</p>
		</>
	);
};

console.log(contents);
