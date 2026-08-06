import { useState } from "react";

export function useAppView<T extends string>(initialView: T) {
  const [view, setView] = useState(initialView);
  return { view, setView };
}
