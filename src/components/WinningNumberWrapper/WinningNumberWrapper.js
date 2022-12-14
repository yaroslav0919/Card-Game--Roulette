import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import WinningNumber from "../WinningNumber/WinningNumber";
import useWinningNumber from "../../hooks/winningNumber";

const WinningNumberWrapper = ({ vip }) => {
  const winningNumber = useWinningNumber();

  // return (
  //   <AnimatePresence>
  //     {winningNumber >= 0 && (
  //       <WinningNumber
  //         key="win-number"
  //         vip={vip}
  //         number={winningNumber}
  //         showMoney
  //         activeRoom
  //       />
  //     )}
  //   </AnimatePresence>
  // );

  //*****customized for animation test***********
  // const [win, setWin] = useState();

  // setTimeout(() => {
  //   setWin(winningNumber);
  // }, 22000);

  return (
    <AnimatePresence>
      {/* {win >= 0 && ( */}
      <WinningNumber
        key="win-number"
        vip={true}
        number={7}
        showMoney
        activeRoom
      />
      {/* )} */}
    </AnimatePresence>
  );
};

export default WinningNumberWrapper;
