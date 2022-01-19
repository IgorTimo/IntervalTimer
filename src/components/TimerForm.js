const TimerForm = (props) => {
  const [
    firstMinutesRef,
    firstSecondsRef,
    secondMinutesRef,
    secondSecondsRef,
    iterCountRef,
  ] = props.refArr;

  return (
    <form onSubmit={props.onSubmitForm}>
      <div>
        <label htmlFor="firstMinutes">Minutes in first phase:</label>
        <input
          ref={firstMinutesRef}
          type="number"
          min="0"
          max="1000"
          name="firstMinutes"
          id="firstMinutes"
        />
        <label htmlFor="firstSeconds">Seconds in first phase:</label>
        <input
          ref={firstSecondsRef}
          type="number"
          min="0"
          max="10000"
          name="firstSecondfirstSeconds"
          id="firstSeconds"
        />
      </div>
      <div>
        <label htmlFor="secondMinutes">Minutes in second phase:</label>
        <input
          ref={secondMinutesRef}
          type="number"
          min="0"
          max="1000"
          name="secondMinutes"
          id="secondMinutes"
        />
        <label htmlFor="secondSeconds">Seconds in second phase:</label>
        <input
          ref={secondSecondsRef}
          type="number"
          min="0"
          max="10000"
          name="secondSeconds"
          id="secondSeconds"
        />
      </div>
      <div>
        <label htmlFor="iterCount">How many iterations:</label>
        <input
          ref={iterCountRef}
          type="number"
          min="1"
          name="iterCount"
          id="iterCount"
          defaultValue="1"
        />
      </div>
      <input type="submit" value={props.isTimerOn ? "Stop" : "Start"} />
    </form>
  );
};

export default TimerForm;
