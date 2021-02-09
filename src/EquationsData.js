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
	"ax^2 + bx + c = a(x-p)(x-q)",
	"ax^2 + bx + c = a( x + \\frac{b}{2a})^2 - \\frac{b^2}{4a} + c",
	"b^2 − 4ac",
	"b^2 < 4ac",
	"b^2 = 4ac",
	"b^2 < 4ac",
	"ax^2 + bx + c = 0",
];
console.log(equations);

export const EquationsData = ({ text, display }) => {
	return (
		<>
			<MathComponent tex={String.raw`${text}`} display={display} />
		</>
	);
};
