import useTabs from "../hooks/useTabs";
import UseFadeInView from "./UseFadeInView";
import UsePreventLeaveView from "./UserPreventLeaveView";
import UseConfirmView from "./UseConfirmView";
import UseClickView from "./UseClickView";
import UseInputView from "./UseInputView";
/* 
import UseHoverView from "./UseHoverView";
import UseNetworkView from "./UseNetworkView";
import UseScrollView from "./UseScrollView";
import UseFullscreenView from "./UseFullscreenView";
import UseNotificationView from "./UseNotificationView";
import UseAxiosView from "./UseAxiosView"; */

const tabContent = [
  {
    tab: "useFadeIn",
    component: <UseFadeInView />,
  }, 
  {
    tab: "usePreventLeave",
    component: <UsePreventLeaveView />,
  },
  {
    tab: "useConfirm",
    component: <UseConfirmView />,
  },
  {
    tab: "useClick",
    component: <UseClickView />,
  },
  {
    tab: "useInput",
    component: <UseInputView />,
  },
  /* 
  {
    tab: "useHover",
    component: <UseHoverView />,
  },
  {
    tab: "useNetwork",
    component: <UseNetworkView />,
  },
  {
    tab: "useScrollView",
    component: <UseScrollView />,
  },
  {
    tab: "useFullScreen",
    component: <UseFullscreenView />,
  },
  {
    tab: "useNotification",
    component: <UseNotificationView />,
  },
  {
    tab: "useAxios",
    component: <UseAxiosView />,
  }, */
];

function UseTabView({ onTabChanged }) {
  // useTabs
  const { currentItem, changeItem } = useTabs(0, tabContent);

  return (
    <>
      <div style={{ border: "1px solid" }}>
        <div>useTab example</div>
        {tabContent.map((section, index) => (
          <button
            key={index}
            onClick={() => {
              onTabChanged(section.tab);
              changeItem(index);
            }}
          >
            {section.tab}
          </button>
        ))}
      </div>
      {currentItem.component}
    </>
  );
}

export default UseTabView;