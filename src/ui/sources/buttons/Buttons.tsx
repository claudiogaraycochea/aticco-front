import './Button.css';

export const Button = (props: any) => {
  const { children } = props;
  const propColor = (props.color) ? props.color : '';
  const propSize = (props.size) ? props.size : '';

  return (
    <button className={`btn ${propColor} ${propSize}`} onClick={props.onClick}>
      {children}
    </button>
  );
}