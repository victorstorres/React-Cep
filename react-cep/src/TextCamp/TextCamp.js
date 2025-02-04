import "./TextCamp.css"

const TextCamp = (props) => {
    return (
        <div className="text-camp">
          <label>{props.label}</label>
          <input
            value={props.value}
            required={props.obrigatorio}
            placeholder={props.placeholder}
          />
        </div>
      );
}


export default TextCamp; 