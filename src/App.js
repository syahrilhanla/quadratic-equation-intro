import "./App.css";
import { MathComponent } from "mathjax-react";
import { BulletList } from "./BulletList";
import {
	contents,
	Header,
	IntroductionClosing,
	MainTitle,
	Introduction,
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
					<h3>
						<i>Key points and principles</i>
					</h3>{" "}
					<br />
					<ul>
						<li>
							There are three methods of solving quadratic equations:
							<ol type='i' className='key-points'>
								<li>
									<b>quadratic factorization</b>, where we can write
									<br />
									<div style={{ marginLeft: "40%" }}>
										<p>
											<EquationsData text={equations[14]} display={false} />{" "}
											when <EquationsData text={"p"} display={false} /> and{" "}
											<EquationsData text={"q"} display={false} /> are rational
											numbers <br /> <br />
											<span>
												which has solution{" "}
												<EquationsData text={"x = p"} display={false} /> or{" "}
												<EquationsData text={"x = q"} display={false} />
											</span>
										</p>
									</div>
								</li>
								<br />
								<br />
								<li>
									<b>formula</b>
									<span style={{ marginLeft: "30%" }}>
										<EquationsData text={equations[9]} display={false} />
									</span>
								</li>
								<br />
								<br />
								<li>
									<b>completing the square</b> , where we can write
									<br />
									<br />
									<p style={{ textAlign: "center" }}>
										<EquationsData text={equations[15]} display={false} />
									</p>
								</li>
							</ol>
							<br />
							<br />
						</li>
						<li>
							<p>
								{<span>{<EquationsData text={equations[4]} />}</span>}{" "}
								{`, then
									either`}{" "}
								<span>{<EquationsData text={equations[5]} />}</span>
								{`or`}
								<span>{<EquationsData text={equations[6]} />}</span>
								{`, giving`}
								<span>{<EquationsData text={equations[7]} />}</span> {`or`}
								<span>{<EquationsData text={equations[8]} />}</span>
							</p>
						</li>
						<li>
							Quadratic equations have 2, 1 or 0 real roots according to the
							value of " b2 − 4ac ":
							<ul>
								<li>If b2 {`>`} 4ac, there are 2 real distinct roots</li>
								<li>If b2 = 4ac , there is 1 (repeated) real root</li>
								<li>If b2 {`<`} 4ac, there are no real roots.</li>
							</ul>
						</li>
					</ul>
				</div>
				<div>
					<h3>
						<i>Facts to remember</i>
					</h3>{" "}
					<br />
					<ul>
						<li>
							If (x − a)(x − b) = 0 then x = a or x = b
							{/* insert equation here*/}
						</li>
						<li>
							The formula for solving the quadratic equation
							{/* insert equation here*/}
							<p style={{ textAlign: "center" }}>ax2 + bx + c = 0</p> is
							{/* insert equation here*/} formula abc
						</li>
						<li>
							The number of real roots of a quadratic is
							<p>2 if b2 {`>`} 4ac</p>
							<p>1 if b2 = 4ac</p>
							<p>0 if b2 {`<`} 4ac</p>
						</li>
					</ul>
				</div>
				<div>
					<h3>
						<i>Facts to remember</i>
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
