import { Suspense } from "react";
import { MemberCreateForm } from "./pages/member/CreateForm";

function App() {
  return (
    <div>
      <Suspense fallback={<>Loading...</>}>
        <MemberCreateForm />
      </Suspense>
    </div>
  );
}

export default App;
