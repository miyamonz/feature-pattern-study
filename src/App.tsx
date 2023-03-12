import { Heading } from "@chakra-ui/react";

import { Demo as Demo1 } from "./demo/TaskApp";
import { Demo as Demo2 } from "./demo_final/TaskApp";

export function App() {
  return (
    <div className="">
      <Heading p={2}>simple task app</Heading>
      <Demo1 />
      <hr />
      <Demo2 />
    </div>
  );
}

export default App;
