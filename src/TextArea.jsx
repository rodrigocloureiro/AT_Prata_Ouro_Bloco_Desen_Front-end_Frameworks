import "./Input.css";

export default function TextArea({ label, name, id, placeholder }) {
  return (
    <>
      <label htmlFor={name} className="label">
        {label} <span>*</span>
      </label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        className="input"
      />
    </>
  );
}
