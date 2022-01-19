const TimerView = (props) => {
  const { count, time } = props;


  const secondsToView = (time) =>{ 
      const hours = parseInt(time / 3600, 10) > 9 ? parseInt(time / 3600, 10) : "0" + parseInt(time / 3600, 10)
      const minutes = parseInt(time / 60, 10) % 60 > 9 ? parseInt(time / 60, 10) % 60 : "0" + parseInt(time / 60, 10) % 60
      const seconds = time % 60 > 9 ? time % 60 : "0" + time % 60;

      if(hours === "00"){
        return `${minutes}:${seconds}`;
      }

      return `${hours}:${minutes}:${seconds}`;
  }


  return (
    <>
      <h2>Iterations left: {count}</h2>
      <h2>Time: {secondsToView(time)}</h2>
    </>
  );
};

export default TimerView;
