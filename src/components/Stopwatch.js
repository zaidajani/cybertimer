import React from "react";
import checkOdd from "../functions/CheckOdd";

export default function Stopwatch() {
  React.useEffect(() => {
    var input = document.getElementById("time");
    let time = 0;
    let spacebartime = 0;
    document.addEventListener("keyup", function (event) {
      spacebartime += 1;
      if (checkOdd(spacebartime)) {
        clearInterval();
      }
      if (event.key === ' ' ||  event.key === 'Spacebar') {
        setInterval(() => {
          time = time + 1;
          input.innerText = time;
        }, 1000);
      }
    });
  }, []);

  return (
    <div>
      <center>
        <h1 id="time">0.00</h1>
      </center>
    </div>
  );
}
