import { Select, Stack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { atomWithLocation } from "jotai-location";

const locationAtom = atomWithLocation();
export function Router() {
  const [location, setLocation] = useAtom(locationAtom);
  return (
    <Stack direction="row" p={2}>
      <span>location: </span>
      <Select
        display="inline"
        size="xs"
        w="40"
        onChange={(e) => setLocation({ pathname: e.target.value })}
      >
        {[
          { pathname: "/", label: "Home" },
          { pathname: "/about", label: "About" },
        ].map((item) => (
          <option key={item.pathname} value={item.pathname}>
            {item.label}
          </option>
        ))}
      </Select>
    </Stack>
  );
}
