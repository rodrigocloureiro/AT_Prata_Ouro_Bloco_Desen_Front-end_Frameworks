import "./Select.css";

export default function Select({label, name, item, handleEvent}) {
  return (
    <>
      <label htmlFor={name} className="label">
        {label} <span>*</span>
      </label>
      <select
        className="select"
        name={name}
        required
        onChange={handleEvent}
      >
        <option defaultValue value="" defaultChecked>Selecione uma opção</option>
        {
          item.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))
        }
      </select>
    </>
  );
}
