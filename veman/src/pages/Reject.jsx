const RejectForm = ({ request }) => {
  return (
    <div>
      {/* Display request details and form for rejection */}
      <p>Request Details for Rejection: {JSON.stringify(request)}</p>
      {/* Implement the rejection form logic here */}
    </div>
  );
};

export default RejectForm;
