import { useEffect, useState } from "react";
import { reaction, toJS } from "mobx";
import { State, Store } from "uicore";

export default function useWinningNumber() {
  const [number, setNumber] = useState();

  useEffect(() => {
    return reaction(
      () => {
        return Store.GameStore.sessionResult;
      },
      (result) => {
        if (result?.rewards.length > 0) {
          setNumber(Number(result?.rewards?.[0].number));
        } else {
          setNumber(undefined);
        }
      },
      {
        fireImmediately: true,
      }
    );
  });

  return number;
}
