import { useEffect, useState } from "react";
import eventEmitter from "../libs/mitt";

const MessageDisplay = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleButtonClick = (data: { message: string }) => {
      setMessage(data.message);
    };

    eventEmitter.on("buttonClicked", handleButtonClick);

    return () => {
      eventEmitter.off("buttonClicked", handleButtonClick);
    };
  }, []);

  return <div>{message}</div>;
};

export default MessageDisplay;
