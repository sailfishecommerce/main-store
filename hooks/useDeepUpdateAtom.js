import { useAtom } from "jotai";
import { useCallback, useEffect, useRef } from "react";
import isEqual from "react-fast-compare";

export function useDeepUpdateAtom(anAtom, scope) {
  const [currentAtomValue, _setAtomValue] = useAtom(anAtom, scope);

  const currentAtomValueRef = useRef(currentAtomValue);

  useEffect(() => {
    currentAtomValueRef.current = currentAtomValue;
  }, [currentAtomValue]);

  const setAtomValue = useCallback((update) => {
    const currAtomValue = currentAtomValueRef.current;

    const nextAtomValue =
      typeof update === "function" ? update(currAtomValue) : update;

    if (!isEqual(currAtomValue, nextAtomValue)) {
      _setAtomValue(nextAtomValue);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [currentAtomValue, setAtomValue];
}
