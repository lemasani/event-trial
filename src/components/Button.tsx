import eventEmitter from "../libs/mitt";

const Button = () => {
  const handleClick = () => {
    eventEmitter.emit("buttonClicked", {
      message: "Hello from mitt event bus!",
    });
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Click Me
    </button>
  );
};

export default Button;
