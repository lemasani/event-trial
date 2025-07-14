import eventEmitter from "../libs/mitt";

const DemoControls = () => {
  const sendSuccessNotification = () => {
    eventEmitter.emit("notification", {
      type: "success",
      message: "Operation completed successfully!",
    });
  };

  const sendErrorNotification = () => {
    eventEmitter.emit("notification", {
      type: "error",
      message: "Something went wrong!",
    });
  };

  const sendInfoNotification = () => {
    eventEmitter.emit("notification", {
      type: "info",
      message: "This is some useful information.",
    });
  };

  const triggerUserAction = () => {
    eventEmitter.emit("userAction", {
      action: "demo_button_clicked",
      timestamp: Date.now(),
    });
  };

  return (
    <div className="demo-controls">
      <h3>Demo Controls</h3>
      <div className="flex">
        <button onClick={sendSuccessNotification} className="btn btn-success">
          Success Notification
        </button>
        <button onClick={sendErrorNotification} className="btn btn-danger">
          Error Notification
        </button>
        <button onClick={sendInfoNotification} className="btn btn-info">
          Info Notification
        </button>
        <button onClick={triggerUserAction} className="btn btn-purple">
          User Action
        </button>
      </div>
    </div>
  );
};

export default DemoControls;
