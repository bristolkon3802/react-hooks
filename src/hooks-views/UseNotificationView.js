import useNotification from "../hooks/useNotification";

function UseNotificationView() {
    const triggerNotif = useNotification("Can I seteal your kongsam?", {body: "I love dont you~"});
    return (
      <div>
        <h3>UseNotification - 알람이 실행되는 function을 만듬...</h3>
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Notification" target="_blank;">Notification API</a>
        <br/>
        <button onClick={triggerNotif}>알람</button>
      </div>
    );
}

export default UseNotificationView;