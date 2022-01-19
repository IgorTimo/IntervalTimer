
import notify from "../sounds/notify.mp3";
import alarm from "../sounds/alarm.mp3";
import vnimenie from "../sounds/vnimenie.mp3";


 export function chooseSound(soundName) {
  if (soundName === "notify"){
    return notify; 
  }
  if (soundName === "alarm"){
    return alarm; 
  }
  if (soundName === "vnimenie"){
    return vnimenie; 
  }
  return notify;
  

}