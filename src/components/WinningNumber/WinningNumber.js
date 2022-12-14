import React, { useEffect, useState } from "react";
import { reaction, toJS } from "mobx";
import { Store, Helper } from "uicore";
import { motion, AnimatePresence } from "framer-motion";
import BezierEasing from "bezier-easing";
import { Wheel } from "../Icons";

import {
  IconWinning,
  IconWinningEn,
  IconWinningRu,
  IconWinningPo,
  IconWinningSh,
  WinningNumber0,
  WinningNumber26,
  WinningNumber32,
  WinningNumberBlack,
  WinningNumberRed,
  WinningNumber0Vip,
  WinningNumber26Vip,
  WinningNumber32Vip,
  WinningNumberBlackVip,
  WinningNumberRedVip,
  IconWinningDesktop,
  IconWinningEnDesktop,
  IconWinningRuDesktop,
  IconWinningPoDesktop,
  IconWinningShDesktop,
} from "../Icons";
import { numbers } from "../../utils/numbers";
import CurrencySymbol from "currency-symbol-map";
import "./WinningNumber.scss";
import audio from "../../utils/audio";
import { translate } from "../../utils/i18n";

const winningNumberVariants = {
  visible: {
    opacity: 1,
    scale: [0.5, 1, 0.8, 1],
    transition: { ease: "easeInOut" },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const numberVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const container = {
  hidden: { opacity: 0 },
  exit: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const container2 = {
  hidden: { opacity: 0, y: 10 },
  exit: { opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ease = BezierEasing(0.15, 0.86, 0.86, 0.015);

const colors = (vip) => ({
  green: {
    color1: vip ? "#165026" : "#008023",
    color2: vip ? "#3a7244" : "#0f9c28",
  },
  red: {
    color1: vip ? "#782615" : "#be361a",
    color2: vip ? "#a7321b" : "#d44030",
  },
  black: {
    color1: vip ? "#000000" : "#090809",
    color2: vip ? "#282828" : "#292229",
  },
});

const getItem = (number, vip) => {
  const found = numbers.find((item) => item.number === number);

  let item;

  if (found) {
    item = { ...found };
    item.color = colors(vip)[item.color];
    item.before = getOtherItem(item.before, vip);
    item.after = getOtherItem(item.after, vip);
    item.bgColor = found.color;
  }
  return item;
};

const getOtherItem = (num, vip) => {
  const found = numbers.find((item) => item.number === num);

  let item;

  if (found) {
    item = { ...found };
    item.color = colors(vip)[item.color];
  }
  return item;
};

const onUpdate = (latest) => {
  const wrapper = document.querySelector(".winning-number__text-wrapper");
  const text = document.querySelector(".winning-number__text");
  const flare = document.querySelector(".winning-number__flare");

  var n = parseInt(latest.w) / 100;
  n = ease(n);

  var i = 1 - 2 * Math.abs(n - 0.5);
  flare.style.transform = "matrix(" + i + ", 0, 0, " + i + ", 0, 0)";
  flare.style.left = `${latest.w}%`;
  text.style.width = `${latest.w}%`;
};

const WinningNumberBackground = ({ start, end, number, vip }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="55"
      viewBox="0 0 65 55"
    >
      {vip ? (
        <>
          <defs>
            <linearGradient
              x1="50%"
              y1="100%"
              x2="50%"
              y2="1.114%"
              id={"xbo9z927ka" + number}
            >
              <stop stopColor={start} offset="0%" />
              <stop stopColor={end} offset="100%" />
            </linearGradient>
            <linearGradient
              x1="50%"
              y1="100%"
              x2="50%"
              y2="0%"
              id={"b8e7oqmgld" + number}
            >
              <stop stopColor="#8D794E" offset="0%" />
              <stop stopColor="#E4D5A8" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="50%"
              y1="100%"
              x2="50%"
              y2="0%"
              id={"enabpz4zbe" + number}
            >
              <stop stopColor="#8D794E" offset="0%" />
              <stop stopColor="#E4D5A8" offset="100%" />
            </linearGradient>
            <filter
              x="-3.3%"
              y="-3.8%"
              width="106.5%"
              height="107.6%"
              filterUnits="objectBoundingBox"
              id={"zjcy65hgpc" + number}
            >
              <feGaussianBlur
                stdDeviation="1"
                in="SourceAlpha"
                result="shadowBlurInner1"
              />
              <feOffset
                dy="1"
                in="shadowBlurInner1"
                result="shadowOffsetInner1"
              />
              <feComposite
                in="shadowOffsetInner1"
                in2="SourceAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
                result="shadowInnerInner1"
              />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                in="shadowInnerInner1"
              />
            </filter>
            <path
              d="M31.046 0C42.404 0 53.056.511 63 1.534L56.192 53c-5.406-.632-13.788-.948-25.146-.948-11.36 0-19.437.293-24.235.88L0 1.448C9.338.483 19.687 0 31.046 0z"
              id={"eq730pc38b" + number}
            />
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)">
              <use
                fill={"url(#xbo9z927ka" + number + ")"}
                xlinkHref={"#eq730pc38b" + number}
              />
              <use
                fill="#000"
                filter={"url(#zjcy65hgpc" + number + ")"}
                xlinkHref={"#eq730pc38b" + number}
              />
              <use
                stroke={"url(#b8e7oqmgld" + number + ")"}
                xlinkHref={"#eq730pc38b" + number}
              />
            </g>
            <path
              d="M31.5 6c3-2.653 4.502-3.975 4.506-3.967 6.342.086 15.34.586 26.994 1.501L56.192 51c-7.55-.564-14.284-.872-20.204-.926L31.5 47.052l-4.482 3.013c-6.174.042-12.91.331-20.207.867L0 3.448c11.485-.884 20.49-1.36 27.017-1.427 0 .008 1.494 1.334 4.483 3.979z"
              stroke={"url(#enabpz4zbe" + number + ")"}
              strokeWidth=".5"
              transform="translate(1 1)"
            />
          </g>
        </>
      ) : (
        <>
          <defs>
            <linearGradient
              id={"jy2km405ja" + number}
              x1="50%"
              x2="50%"
              y1="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={start} />
              <stop offset="100%" stopColor={end} />
            </linearGradient>
            <filter
              id={"h9nvroh98c" + number}
              width="106.3%"
              height="108.7%"
              x="-3.2%"
              y="-4.7%"
              filterUnits="objectBoundingBox"
            >
              <feGaussianBlur
                in="SourceAlpha"
                result="shadowBlurInner1"
                stdDeviation="1"
              />
              <feOffset
                dy="1"
                in="shadowBlurInner1"
                result="shadowOffsetInner1"
              />
              <feComposite
                in="shadowOffsetInner1"
                in2="SourceAlpha"
                k2="-1"
                k3="1"
                operator="arithmetic"
                result="shadowInnerInner1"
              />
              <feColorMatrix
                in="shadowInnerInner1"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
              />
            </filter>
            <path
              id={"mz1c3euahb" + number}
              d="M76.046 0c9.789 0 19.052.38 27.79 1.14 2.201.19 3.83 2.13 3.64 4.33l-.02.179-5.636 42.6c-.346 2.616-2.665 4.512-5.298 4.332-5.163-.353-11.989-.529-20.476-.529-8.264 0-14.792.155-19.583.466-2.626.17-4.935-1.725-5.28-4.334l-5.638-42.62c-.29-2.19 1.25-4.2 3.44-4.49l.184-.02C57.392.353 66.351 0 76.046 0z"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <g>
              <g transform="translate(-155 -126) translate(111 127)">
                <use
                  fill={"url(#jy2km405ja" + number + ")"}
                  href={"#mz1c3euahb" + number}
                />
                <use
                  fill="#000"
                  filter={"url(#h9nvroh98c" + number + ")"}
                  href={"#mz1c3euahb" + number}
                />
                <use
                  stroke="#FDE463"
                  strokeWidth="2"
                  href={"#mz1c3euahb" + number}
                />
              </g>
            </g>
          </g>
        </>
      )}
    </svg>
    /*<svg width="65" height="51" viewBox="0 0 65 51" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="qncwfavl9a">
              <stop stop-color="#8D794E" offset="0%"/>
              <stop stop-color="#E4D5A8" offset="100%"/>
            </linearGradient>
          </defs>
          <path d="M76.5 6c3-2.653 4.502-3.975 4.506-3.967 6.342.086 15.34.586 26.994 1.501L101.192 51c-7.55-.564-14.284-.872-20.204-.926L76.5 47.052l-4.482 3.013c-6.174.042-12.91.331-20.207.867L45 3.448c11.485-.884 20.49-1.36 27.017-1.427 0 .008 1.494 1.334 4.483 3.979z" transform="translate(-44 -1)" stroke="url(#qncwfavl9a)" stroke-width=".5" fill="none" fill-rule="evenodd"/>
        </svg>*/
  );
};

const Background = ({ vip, number }) => {
  const item = getItem(number, vip);
  if (item.number === 32) {
    return vip ? <WinningNumber32Vip /> : <WinningNumber32 />;
  }
  if (item.number === 26) {
    return vip ? <WinningNumber26Vip /> : <WinningNumber26 />;
  }
  if (item.bgColor === "black") {
    return vip ? <WinningNumberBlackVip /> : <WinningNumberBlack />;
  }
  if (item.bgColor === "red") {
    return vip ? <WinningNumberRedVip /> : <WinningNumberRed />;
  }
  if (item.bgColor === "green") {
    return vip ? <WinningNumber0Vip /> : <WinningNumber0 />;
  }
};

const WinningNumber = ({ number, showMoney, vip, activeRoom }) => {
  const [currentItem, setCurrentItem] = useState(null);
  const [money, setMoney] = useState(null);
  const [finishWin, setFinishWin] = useState(false);

  useEffect(() => {
    const winner = getItem(number, vip);
    setCurrentItem(winner);
    if (activeRoom) {
      audio.playWarning(winner.bgColor);
      winner.number !== 0 &&
        setTimeout(() => {
          audio.playWarning(String(winner.number));
        }, 500);
    }
  }, [number]);

  useEffect(() => {
    return reaction(
      () => {
        return Store.WinnerStore.userRewards;
      },
      (userRewards) => {
        const totalMoney = userRewards?.r?.reduce(
          (acc, item) => acc + item.won,
          0
        );
        if (totalMoney) {
          audio.playEffect("won");
          setMoney(Helper.formatMoney(totalMoney));
          Helper.addClassName(document.body, "show-winner-screen");
          const wrapper = document.querySelector(
            ".winning-number__text-wrapper"
          );
          const text = document.querySelector(".winning-number__text");
          const flare = document.querySelector(".winning-number__flare");
          const fakeText = document.querySelector(".winning-number__fake-text");
          wrapper && (wrapper.style.width = `${fakeText.offsetWidth}px`);
        } else {
          Helper.removeClassName(document.body, "show-winner-screen");
        }
      }
    );
  }, []);

  return (
    <motion.div
      className="winning-number"
      exit={{ opacity: 0 }}
      style={{
        transform: "translate(0,0,100)",
      }}
    >
      {currentItem && vip && <Wheel winningNumber={number} />}
      {currentItem && !vip && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="winning-number__numbers"
        >
          <motion.div
            variants={numberVariants}
            className="winning-number__numbers__left"
          >
            {currentItem.before.number}
          </motion.div>
          <motion.div
            variants={numberVariants}
            className="winning-number__numbers__right"
          >
            {currentItem.after.number}
          </motion.div>
          <Background vip={vip} number={number} />
          <motion.div
            variants={winningNumberVariants}
            className="winning-number__number"
          >
            <span>{currentItem.number}</span>
            <WinningNumberBackground
              vip={vip}
              number={currentItem.number}
              start={currentItem?.color?.color1}
              end={currentItem?.color?.color2}
            />
          </motion.div>
        </motion.div>
      )}
      {currentItem && showMoney && money && vip && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="winning-number__winner2"
        >
          <div className="winning-number__text-wrapper">
            <motion.span
              className="winning-number__text"
              animate={{ w: 100 }}
              transition={{ duration: 2 }}
              onAnimationStart={() => setFinishWin(false)}
              onUpdate={onUpdate}
              onAnimationComplete={() => setFinishWin(true)}
            >
              {translate("statics.won")}
            </motion.span>
            <div className="winning-number__flare">
              <div className="winning-number__flare-icon"></div>
            </div>
          </div>
        </motion.div>
      )}
      {money && currentItem && (vip ? finishWin : true) && (
        <motion.div
          variants={container2}
          initial="hidden"
          animate="visible"
          className="winning-number__winner2"
        >
          <div>
            {!vip && (
              <>
                {Store.UserStore.language === "tr" && <IconWinning />}
                {Store.UserStore.language === "ru" && <IconWinningRu />}
                {Store.UserStore.language === "bp" && <IconWinningPo />}
                {Store.UserStore.language === "pt" && <IconWinningPo />}
                {Store.UserStore.language === "al" && <IconWinningSh />}
                {["en", "de", "sa"].indexOf(Store.UserStore.language) !==
                  -1 && <IconWinningEn />}
              </>
            )}
            <div className="won-money-text">
              {money} {CurrencySymbol(Store.UserStore.user.currency)}
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

WinningNumber.propTypes = {};

export default WinningNumber;
