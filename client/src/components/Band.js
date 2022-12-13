const Band = ({ bandName }) => {
  function handleClick() {
    alert(`You clicked ${bandName}!`);
  }

  return (
    <div>
      <code onClick={handleClick}>{bandName}</code>
    </div>
  );
};

export default Band;