import "./App.css";
import { BulletList } from "./BulletList";
import { contents, Header, IntroductionClosing, MainTitle } from "./Text";
import { Paragraph } from "./Paragraph";
import { texts } from "./paragraphData";
import { EquationsData, equations } from "./EquationsData";

function App() {
	const txtContents = contents.map((content) => content);
	console.log(txtContents);
	console.log("equations :>> ", equations);

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
				<div>
					<h3>
						<i>Introduction</i>
					</h3>{" "}
					<Paragraph text={texts[0]} />
					<br />
					<EquationsData text={equations[0]} />
					<br />
					<p>which is equivalent to the equation</p>
					<br />
					<EquationsData text={equations[1]} />
					<br />
				</div>

				<div>
					<Paragraph text={texts[1]} />
					<br />
					<Paragraph text={texts[2]} />
					<br />
					<EquationsData text={equations[2]} />
					<br />
					<IntroductionClosing />
					<br />

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
								<ul>
									<li>
										(i) <b>quadratic factorization</b>, where we can write
										{/* insert equation here */}
									</li>
									<li>
										(ii) <b>formula</b>
										{/* insert equation here */}
									</li>
									<li>
										(iii) <b>completing the square</b> , where we can write
										{/* insert equation here */}
									</li>
									<li>
										Note that if (x − a)(x − b) = 0 , then either x − a = 0 or x
										− b = 0, giving x = a or x = b
									</li>
									<li>
										Quadratic equations have 2, 1 or 0 real roots according to
										the value of " b2 − 4ac ":
										<ul>
											<li>If b2 {`>`} 4ac, there are 2 real distinct roots</li>
											<li>If b2 = 4ac , there is 1 (repeated) real root</li>
											<li>If b2 {`<`} 4ac, there are no real roots.</li>
										</ul>
									</li>
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
		</div>
	);
}

export default App;
