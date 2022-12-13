const Band = ({ bandName }) => {
  function handleClick() {
    alert(`You clicked ${bandName}!`);
  }

  return (
    <spa className="me-4">
      <code onClick={handleClick}>{bandName}</code>
    </spa>
  );
};

export default Band;
