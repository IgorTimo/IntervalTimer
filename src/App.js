import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import notify from "./sounds/notify.mp3";

function App() {
  const [phase, setPhase] = useState(0);
  const [arrOfPhase, setArrOfPhase] = useState([])
  const [isTimerOn, setTimerOn] = useState(false);

  const firstMinutesRef = useRef();
  const firstSecondsRef = useRef();
  const secondMinutesRef = useRef();
  const secondSecondsRef = useRef();
  const iterCountRef = useRef();
  
  const [notifySound] = useSound(notify);

   



  useEffect(() => {
    if (phase > 0) {
      const timeout = setTimeout(
        () => setPhase((phase) => phase - 1),
        1000
      );
      return () => clearTimeout(timeout);
    } 
    if(phase === 0 && isTimerOn){
      if(arrOfPhase.length > 0){
        console.log(arrOfPhase.length);
        const [phase, ...rest] = arrOfPhase;
        console.log(`phase = ${phase}`)
        console.log(`rest = ${rest}`)

        setPhase(phase);
        setArrOfPhase(rest);
      }else{
        setTimerOn(false);
      }
      notifySound();
    }
  }, [phase, isTimerOn]);

  const handeleSubmitForm = (event) => {
    event.preventDefault();
    console.log(firstMinutesRef.current.value);
    console.log(firstSecondsRef.current.value);
    // setPhase(firstSecondsRef.current.value);
    console.log(secondMinutesRef.current.value);
    console.log(secondSecondsRef.current.value);
    const arr = [];
    for (let i = 0; i < iterCountRef.current.value; i++){
      arr.push(parseInt(firstSecondsRef.current.value))
      arr.push(parseInt(secondSecondsRef.current.value));
    }
    setArrOfPhase([...arrOfPhase, ...arr])
    setTimerOn(true);

  };

  return (
    <>
      <h1>Timer</h1>

      <form onSubmit={handeleSubmitForm}>
        <div>
          <label htmlFor="firstMinutes">Minutes in first phase:</label>
          <input
            ref={firstMinutesRef}
            type="number"
            name="firstMinutes"
            id="firstMinutes"
          />
          <label htmlFor="firstSeconds">Seconds in first phase:</label>
          <input
            ref={firstSecondsRef}
            type="number"
            name="firstSecondfirstSeconds"
            id="firstSeconds"
          />
        </div>
        <div>
          <label htmlFor="secondMinutes">Minutes in second phase:</label>
          <input
            ref={secondMinutesRef}
            type="number"
            name="secondMinutes"
            id="secondMinutes"
          />
          <label htmlFor="secondSeconds">Seconds in second phase:</label>
          <input
            ref={secondSecondsRef}
            type="number"
            name="secondSeconds"
            id="secondSeconds"
          />
        </div>
        <div>
        <label htmlFor="iterCount">How many iterations:</label>
          <input
            ref={iterCountRef}
            type="number"
            name="iterCount"
            id="iterCount"
          />
        </div>
        <input type="submit" value="Start" />
      </form>
      <h2>Time: {phase}</h2>
    </>
  );
}

export default App;
