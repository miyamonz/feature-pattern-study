import { Heading } from "@chakra-ui/react";

import { Demo, Demo as Demo1 } from "./demo1/TaskApp";
import { Demo as Demo2 } from "./demo2/TaskApp";
import { Router, usePath } from "./Router";

export function App() {
  const path = usePath();
  return (
    <div className="">
      <Heading p={2}>
        simple task app
        <Router />
      </Heading>
      {path === "/demo1" && <Demo1 />}
      {path === "/demo2" && <Demo2 />}
    </div>
  );
}

export default App;
