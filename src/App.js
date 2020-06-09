//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, homeChange] = useState(17);
  const [awayScore, awayChange] = useState(21);

  //New constants for the useEffect function below
  const [mins, updateMinutes] = useState(14);
  const [sec1, updateSec1] = useState(5);
  const [sec2, updateSec2] = useState(9);

  const homeTD = htdEvent => {
    homeChange(homeScore + 7);
  };
  const homeFG = hfgEvent => {
    homeChange(homeScore + 3);
  };
  const awayTD = atdEvent => {
    awayChange(awayScore + 7);
  };
  const awayFG = afgEvent => {
    awayChange(awayScore + 3);
  };

  //Created this only to see if I could help Charlie out
  useEffect(() => {
    setTimeout(() => {
      updateSec2(sec2 - 1);
      if(sec2 === 0) {
        updateSec2(9);
        updateSec1(sec1 - 1);
        if(sec1 === 0) {
          updateSec1(5);
          updateMinutes(mins - 1);
        }
      }
    }, 1000);
  });

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{mins}:{sec1}{sec2}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTD}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFG}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTD}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFG}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
