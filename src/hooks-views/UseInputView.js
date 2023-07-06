import useInput from "../hooks/useInput";

function UseInputView() {
    //글자 크기 검증
    const maxLen = value => value.length <= 10;
    //const maxLen = value => !value.includes("@");
    const name = useInput("Mr.", maxLen);
    return (
      <div>
        <h3>useInput - 이벤트를 분리된 파일, 다른 entity에 연결해서 처리 할 수있음</h3>
        <input placeholder="Name" value={name.value} onChange={name.onChange} />
        <input placeholder="Name" {...name} />
      </div>
    );
}

export default UseInputView;