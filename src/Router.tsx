import { Select } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { atomWithLocation } from "jotai-location";

const locationAtom = atomWithLocation();
export function usePath() {
  const [location] = useAtom(locationAtom);
  return location.pathname;
}
export function RouteSelect() {
  const [, setLocation] = useAtom(locationAtom);
  return (
    <Select
      display="inline-block"
      size="md"
      w={40}
      onChange={(e) => setLocation({ pathname: e.target.value })}
    >
      {[
        { pathname: "/demo1", label: "demo1" },
        { pathname: "/demo2", label: "demo2" },
      ].map((item) => (
        <option key={item.pathname} value={item.pathname}>
          {item.label}
        </option>
      ))}
    </Select>
  );
}
