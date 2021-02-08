import React from "react";
import { MathComponent } from "mathjax-react";
export const equations = [
	"x + y p, xy = q",
	"x^2 + 2 = px",
	`a x^2 + bx + c = 0`,
	`a != 0`,
	"(x − a)(x − b) = 0",
	"x − a = 0",
	"x − b = 0",
	"x = a",
	"x = b",
	"x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}",
	"ax^2 = c",
	"ax^2 + bx = c ",
	"a, b, c",
	"a \\neq 0",
];
console.log(equations);

export const EquationsData = ({ text, display }) => {
	return (
		<>
			<MathComponent tex={String.raw`${text}`} display={display} />
		</>
	);
};
