import React, { useState, useEffect } from "react";
import { Helper, State, Store } from "uicore";
import Hammer from "react-hammerjs";
import { AnimatePresence, motion } from "framer-motion";
import { reaction, toJS } from "mobx";
import classNames from "classnames";

import "./ActionBar.scss";
import ChipMenu from "../ChipMenu/ChipMenu";

import IconUndo from "../Icons/icon-undo.svg";
import IconDouble from "../Icons/icon-double.svg";
import IconRepeat from "../Icons/icon-repeat.svg";
import IconDelete from "../Icons/icon-delete.svg";
import IconAutoPlay from "../Icons/icon-autoplay.svg";
import IconFavorites from "../Icons/icon-favorites.svg";

import IconUndoVip from "../Icons/icon-undo-vip.svg";
import IconDoubleVip from "../Icons/icon-double-vip.svg";
import IconRepeatVip from "../Icons/icon-repeat-vip.svg";
import IconDeleteVip from "../Icons/icon-delete-vip.svg";
import IconAutoPlayVip from "../Icons/icon-auto-play-vip.svg";
import IconFavoritesVip from "../Icons/icon-favorites-vip.svg";

import { BottomBarLeftCorner } from "../Icons";

const whileTap = { scale: 0.9 };

const ActionBar = ({ vip }) => {
  const [statisticsShow, setStatisticsShow] = useState(false);
  const [chatActive, setChatActive] = useState(false);
  const [betCount, setBetCount] = useState(0);
  const [lastSessionBets, setLastSessionBets] = useState(null);

  useEffect(() => {
    return reaction(
      () => {
        return Store.AppStore.state.dashboardScreen;
      },
      (status) => {
        if (status === 0) {
          setChatActive(true);
        } else {
          setChatActive(false);
        }
      },
      {
        fireImmediately: true,
      }
    );
  }, []);

  useEffect(() => {
    return reaction(
      () => {
        return Store.AppStore.state.statisticsShow;
      },
      (status) => {
        setStatisticsShow(status);
      },
      {
        fireImmediately: true,
      }
    );
  }, []);

  useEffect(() => {
    return reaction(
      () => {
        return Store.BetStore.betCount;
      },
      (result) => {
        setBetCount(result);
      },
      {
        fireImmediately: true,
      }
    );
  }, []);

  useEffect(() => {
    return reaction(
      () => {
        return Store.BetStore.lastSessionBets;
      },
      (bets) => {
        setLastSessionBets(bets);
      },
      {
        fireImmediately: true,
      }
    );
  }, []);

  useEffect(() => {
    return reaction(
      () => {
        return Store.GameStore.session;
      },
      (session) => {
        if (session.flag === State.Open) {
          setShowActionBar(true);
        } else {
          setShowActionBar(false);
        }
      },
      {
        fireImmediately: true,
      }
    );
  }, []);

  const [showActionBar, setShowActionBar] = useState(true);
  const [selectedChip, setSelectedChip] = useState(Store.GameStore.rate);

  const onAutoPlayClick = (e) => {
    e.stopPropagation();
    Store.AppStore.updateState("autoGame", !Store.AppStore.state.autoGame);
  };

  const onFavoritesClick = () => {
    Store.AppStore.updateState(
      "favoriteShow",
      !Store.AppStore.state.favoriteShow
    );
    if (Store.AppStore.state.favoriteShow)
      Helper.mixTrack("action", { type: "favourite-list" });
  };

  return (
    <>
      {!statisticsShow && !chatActive && showActionBar && (
        <div className="action-bar" id="action-bar">
          {vip && (
            <>
              <div className="left-corner">
                <BottomBarLeftCorner />
              </div>
              <div className="right-corner">
                <BottomBarLeftCorner />
              </div>
            </>
          )}

          <Hammer
            onTap={() => {
              Store.BetStore.deleteBets();
              Helper.mixTrack("bet-action", { type: "delete" });
            }}
          >
            <motion.div
              whileTap={whileTap}
              className={classNames("action-bar__delete", {
                "action-bar__item--disabled": betCount === 0,
              })}
            >
              <img src={vip ? IconDeleteVip : IconDelete} />
            </motion.div>
          </Hammer>

          <div className="action-bar__center">
            <Hammer
              onTap={() => {
                Store.BetStore.rollbackLastBet();
                Helper.mixTrack("bet-action", { type: "rollback" });
              }}
            >
              <motion.div
                whileTap={whileTap}
                className={classNames("action-bar__undo", {
                  "action-bar__item--disabled": betCount === 0,
                })}
              >
                <img src={vip ? IconUndoVip : IconUndo} />
              </motion.div>
            </Hammer>
            <ChipMenu vip={vip} />
            {betCount > 0 ? (
              <Hammer
                onTap={() => {
                  Store.BetStore.doubleBets();
                  Helper.mixTrack("bet-action", { type: "double" });
                }}
              >
                <motion.div whileTap={whileTap} className="action-bar__double">
                  <img src={vip ? IconDoubleVip : IconDouble} />
                </motion.div>
              </Hammer>
            ) : (
              <Hammer
                onTap={() => {
                  Store.BetStore.repeatLastBets();
                  Helper.mixTrack("bet-action", { type: "repeat" });
                }}
              >
                <motion.div
                  whileTap={whileTap}
                  className={classNames("action-bar__repeat", {
                    "action-bar__item--disabled":
                      lastSessionBets &&
                      Object.keys(toJS(lastSessionBets)).length === 0,
                  })}
                >
                  <img src={vip ? IconRepeatVip : IconRepeat} />
                </motion.div>
              </Hammer>
            )}
            {betCount > 0 && (
              <Hammer>
                <motion.div
                  onClick={onAutoPlayClick}
                  whileTap={whileTap}
                  className="action-bar__auto-play"
                >
                  <img src={vip ? IconAutoPlayVip : IconAutoPlay} />
                </motion.div>
              </Hammer>
            )}
          </div>
          <Hammer onTap={onFavoritesClick}>
            <motion.div whileTap={whileTap} className="action-bar__favorite">
              <img src={vip ? IconFavoritesVip : IconFavorites} />
            </motion.div>
          </Hammer>
        </div>
      )}
    </>
  );
};

ActionBar.propTypes = {};

export default ActionBar;
