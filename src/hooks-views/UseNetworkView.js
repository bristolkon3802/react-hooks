import useNetwork from "../hooks/useNework";

function UseNetworkView() {
    const handleNetworkChange = onLine => {
        console.log(onLine? "online" : "offline");
    }
    const onLine = useNetwork();
    return (
      <div>
        <h3>useNetwork - navigator 가 online 또는 offline이 되는걸 막아줌</h3>
        <h3>네트워크 - log - online, offline </h3>
        <h1>{onLine ? "Online" : "Offline"}</h1>
        <h1>{handleNetworkChange}</h1>
      </div>
    );
}

export default UseNetworkView;