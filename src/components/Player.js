function Player(props) {
  const onClickIncrement = () => {
    props.incrementScore(props.id);
  };
  return (
    <li className="Player">
      <p>
        {props.name}: score {props.score}
      </p>
      <button onClick={onClickIncrement}>Increment</button>
    </li>
  );
}

export default Player;
