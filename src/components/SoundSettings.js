const SoundSettings = (props) => {
  return (
    <>
      <div>
        <select onChange={props.onSelectSound}>
          <option>notify</option>
          <option>alarm</option>
          <option>vnimenie</option>
        </select>
      </div>
      <div>
        <label htmlFor="volume">Loudness of notification </label>
        <input
          onChange={props.onVolumeChange}
          id="volume"
          type="range"
          min="0"
          max="1"
          defaultValue={props.loudness}
          step="0.1"
        />
      </div>
    </>
  );
};

export default SoundSettings;
