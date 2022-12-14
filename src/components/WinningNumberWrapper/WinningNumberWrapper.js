import React from "react";
import { AnimatePresence } from "framer-motion";
import WinningNumber from "../WinningNumber/WinningNumber";
import useWinningNumber from "../../hooks/winningNumber";

const WinningNumberWrapper = ({ vip }) => {
  const winningNumber = useWinningNumber();

  return (
    <AnimatePresence>
      {winningNumber >= 0 && (
        <WinningNumber
          key="win-number"
          // vip={vip}
          vip={true}
          number={winningNumber}
          showMoney
          activeRoom
        />
      )}
    </AnimatePresence>
  );
};

export default WinningNumberWrapper;
