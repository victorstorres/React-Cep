import "./TextCamp.css"

const TextCamp = (props) => {
    return (
        <div className="text-camp">
          <label>{props.label}</label>
          <input
            value = {props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
          />
        </div>
      );
}


export default TextCamp; 