import react from "react";

const textContents = [
	"be able to solve quadratic equations that factorize into linear terms",
	"be able to use the formula for solving quadratic equations",
	"understand how to complete the square for a quadratic and hence solve the equation.",
];

export const contents = textContents.map((content) => ({ content }));

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
			as formula ABC
			<br />
			<p>
				was published by Henry Heaton in The American Mathematical Monthly (see
				information at
			</p>
			<br />
			<p style={{ textAlign: "center" }}>
				http://en.wikipedia.org/wiki/Quadratic_equation
			</p>
			<p style={{ textAlign: "center" }}>
				http://www.jstor.org/stable/2971099?seq=1 )
			</p>
		</>
	);
};

console.log(contents);
