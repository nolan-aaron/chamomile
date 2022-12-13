import Spinner from "react-bootstrap/Spinner";

const Loading = ({ isLoading }) => {
  return (
    <div className="d-flex justify-content-center">
      {isLoading && (
        <Spinner animation="border" variant="primary" role="status" />
      )}
    </div>
  );
};

export default Loading;
