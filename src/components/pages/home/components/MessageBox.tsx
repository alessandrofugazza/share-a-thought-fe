import Form from "react-bootstrap/Form";

function MessageBox() {
  return (
    <div className="d-flex flex-column gap-4">
      <Form.Label htmlFor="new-message">What's on your mind?</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        type="text"
        id="new-message"
        style={{ maxWidth: "30rem", marginInline: "auto", resize: "none" }}
      />
    </div>
  );
}

export default MessageBox;
