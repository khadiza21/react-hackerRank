function Input({ setTitle, setDescription, title, description }) {
  return (
    <div className="layout-column justify-content-center align-items-center">
      <input className="w-100" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" value={title} data-testid="title-input" />
      <textarea className="mt-10 w-100" onChange={(e) => setDescription(e.target.value)} placeholder="Enter Description" value={description} data-testid="description-input" />
    </div>
  );
}

export default Input;
