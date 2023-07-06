import usePreventLeave from "../hooks/usePreventLeave";

function UsePreventLeaveView() {
    const { enablePrevent, disablePrevent } = usePreventLeave();

    return (
        <div>
            <h3>usePreventLeave - 보통 웹사이트에서 볼수 있는데 window창을 닫을때 "아직 저장하지 않았어!" 라고 이벤트를 발생</h3>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
    }
  

export default UsePreventLeaveView;
