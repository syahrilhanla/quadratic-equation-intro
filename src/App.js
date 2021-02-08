import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1><span>F4 <i>Solving Quadratic Equations</i></span> <span>Introduction</span></h1>
        <hr />
      </div>

      <div>
        <i>Learning Objectives</i> <br />
        <p>This unit is focused on methods of solving quadratic equations. After completing Unit F4 you should be </p>
        <ul>
          <li>
            able to solve quadratic equations that factorize into linear terms
          </li>
          <li>
            be able to use the formula for solving quadratic equations
          </li>
          <li>
            understand how to complete the square for a quadratic and hence solve the equation.
          </li>
        </ul>
      </div>

      {/* Introduction */}
      <div>
        <h2>Introduction</h2> <br />
        <p>
          We can tell from Old Babylonian clay tablets dating from around 2000 BC that the Babylonians knew how to solve a pair of simultaneous equations of the form
        </p>
        <br />
        <p>x + y p, xy = q</p>
        <br />
        <p>which is equivalent to the equation</p>
        <br />
        <p>x<sup>2</sup> + 2 = px</p>
      </div>

      <div>
        <p>
          In the 8th Century BC quadratic equations of the form ax2 c ax2 bx c = and + = were explored in
          ancient India, using geometric methods. Babylonian mathematicians from circa 400 BC and Chinese
          mathematicians from circa 200 BC used the method of completing the square (see Section F4.3) to
          solve quadratic equations with positive roots, but did not have a general formula.
        </p>
        <br />
        <p>In 628 AD, Brahmagupta, an Indian mathematician, gave the first explicit solution of the quadratic
equation but it was not until 1896 that the first reference to the general solution</p>
        <br />
        <p>
          a x2 + bx + c = 0 (a, b, c are constants, a != 0)
        </p>
        <br />
        as formula ABC
        <br />
        <p>
          was published by Henry Heaton in The American Mathematical Monthly (see information at
        </p>
        <br />
        <p style={{ textAlign: 'center' }}>
          http://en.wikipedia.org/wiki/Quadratic_equation
        </p>
        <p style={{ textAlign: 'center' }}>
          http://www.jstor.org/stable/2971099?seq=1 )
        </p>

        {/* Introduction */}

        {/* Key points and principles */}
        <div>
          <h2><i>Key points and principles</i></h2> <br />

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
                  Note that if (x − a)(x − b) = 0 , then either x − a = 0 or x − b = 0, giving x = a or x = b
                </li>
                <li>
                  Quadratic equations have 2, 1 or 0 real roots according to the value of " b2 − 4ac ":
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
          <h2><i>Facts to remember</i></h2> <br />
          <ul>
            <li>If (x − a)(x − b) = 0 then x = a or x = b
              {/* insert equation here*/}
            </li>
            <li>
              The formula for solving the quadratic equation
              {/* insert equation here*/}
              <p style={{ textAlign: 'center' }}>
                ax2 + bx + c = 0
              </p> is
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

      </div>
    </div>
  );
}

export default App;
