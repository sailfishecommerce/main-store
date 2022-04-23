import SignupForm from "@/components/form/SignupForm";
import SigninForm from "@/components/form/SigninForm";
import Tabpanel from "@/components/tabs/Tabpanel";

interface Props {
  tab: number;
}

export default function TabBody({ tab }: Props) {
  return (
    <div className="tab-content" id="tabs-tabContentFill">
      <div className="auth-tab">
        {tab === 0 && (
          <Tabpanel id="signin">
            <SigninForm />
          </Tabpanel>
        )}
        {tab === 1 && (
          <Tabpanel id="signup">
            <SignupForm />
          </Tabpanel>
        )}
      </div>
      <style jsx>
        {`
          .auth-tab {
            width: 40vw;
          }
        `}
      </style>
    </div>
  );
}
