import useBeforeLeave from "./hooks/useBeforeLeave";
import UseTabView from "./hooks-views/UseTabView";
import useTitle from "./hooks/useTitle";
import UseAxiosView from "./hooks/useAxios";
export default function App() {
  // useTitle
  const titleUpdater = useTitle("Loading...");
  // useBeforeLeave
  const begForLife = () => console.log("please dont leave");
  useBeforeLeave(begForLife);

  return (
    <div>
      <div>
        <UseAxiosView />
      </div>
      <h1>Custom hook examples</h1>
      <div>
        <UseTabView onTabChanged={titleUpdater} />
      </div>
    </div>
  );
}