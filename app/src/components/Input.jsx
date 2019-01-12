import React from 'React';

const Input = (props) => {
  return (
    <div className = "in">
      <label for={props.name} className="form-label">{props.title}</label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props} />
    </div>
  )
}

export default Input
