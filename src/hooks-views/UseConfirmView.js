import useConfirm from "../hooks/useConfirm";

function UseConfirmView() {
    const deleteWorld = () => console.log("삭제 실행");
    const abort = () => console.log("삭제 취소");
    const confirmDelete = useConfirm("Are yo sure", deleteWorld, abort);
    return (
      <div>
        <h3>useConfirm - 이벤트를 실행하기전 message로 물어보거나, 확인하는 이벤트</h3>
        <button onClick={confirmDelete}>삭제</button>
      </div>
    );
}

export default UseConfirmView;