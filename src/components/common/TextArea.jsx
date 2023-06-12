import "./styles/Input.css";

export default function TextArea({ label, name, id, placeholder, valor, handleEvent, handleInput }) {
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
        value={valor}
        onChange={handleEvent}
        onInput={handleInput}
      />
    </>
  );
}
