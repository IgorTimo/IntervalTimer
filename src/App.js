import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import { chooseSound } from "./components/chooseSound";
import SoundSettings from "./components/SoundSettings";
import TimerForm from "./components/TimerForm";
import TimerView from "./components/TimerView";

function App() {
  const [phase, setPhase] = useState(0);
  const [arrOfPhase, setArrOfPhase] = useState([]);
  const [isTimerOn, setTimerOn] = useState(false);
  const [sound, setSound] = useState("notify");
  const [loudness, setLoudness] = useState(0.2);

  const firstMinutesRef = useRef();
  const firstSecondsRef = useRef();
  const secondMinutesRef = useRef();
  const secondSecondsRef = useRef();
  const iterCountRef = useRef();

  const [notifySound] = useSound(chooseSound(sound), { volume: loudness });

  useEffect(() => {
    if (phase > 0 && isTimerOn) {
      const timeout = setTimeout(() => setPhase((phase) => phase - 1), 1000);
      return () => clearTimeout(timeout);
    }
    if (phase === 0 && isTimerOn) {
      if (arrOfPhase.length > 0) {
        const [phase, ...rest] = arrOfPhase;
        setPhase(phase);
        setArrOfPhase(rest);
      } else {
        setTimerOn(false);
      }
      notifySound();
    }
  }, [phase, isTimerOn]);

  const handeleSubmitForm = (event) => {
    event.preventDefault();
    if (isTimerOn) {
      setTimerOn(false);
    } else {
      if (arrOfPhase.length === 0) {
        const firstSecondsTotal =
          parseInt(firstMinutesRef.current.value * 60) +
          parseInt(firstSecondsRef.current.value * 1);
        const secondSecondsTotal =
          parseInt(secondMinutesRef.current.value * 60) +
          parseInt(secondSecondsRef.current.value * 1);
        const arr = [];
        for (let i = 0; i < iterCountRef.current.value; i++) {
          firstSecondsTotal && arr.push(firstSecondsTotal);
          secondSecondsTotal && arr.push(secondSecondsTotal);
        }
        setArrOfPhase([...arrOfPhase, ...arr]);
      }
      setTimerOn(true);
    }
  };

  const handelResetClick = () => {
    setPhase(0);
    setArrOfPhase([]);
    setTimerOn(false);
  };

  const handelSelectSound = (event) => {
    setSound(event.target.value);
    notifySound();
  };

  const handelVolumeChange = (event) => {
    setLoudness(event.target.value);
    notifySound();
  };

  return (
    <>
      <h1>Timer</h1>
      <p>You can set only one phase.</p>
      <TimerForm
        onSubmitForm={handeleSubmitForm}
        isTimerOn={isTimerOn}
        refArr={[
          firstMinutesRef,
          firstSecondsRef,
          secondMinutesRef,
          secondSecondsRef,
          iterCountRef,
        ]}
      />
      <button onClick={() => handelResetClick()}>Reset</button>
      <TimerView count={arrOfPhase.length} time={phase} />
      <SoundSettings
        onSelectSound={handelSelectSound}
        onVolumeChange={handelVolumeChange}
        loudness={loudness}
      />
    </>
  );
}

export default App;
