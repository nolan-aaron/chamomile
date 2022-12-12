const Error = (props) => {
  return (
    <div>
      <code>{props.error.message}</code>
    </div>
  );
};

export default Error;
