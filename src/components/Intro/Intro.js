import React, { useState, useEffect } from 'react'
import './Intro.scss'
import { Store } from 'uicore'
import {
  IconGesture,
  IconSwipeRight,
  IconSwipeLeft,
  Step1,
  Step2,
  Step3,
  Step1Active,
  Step2Active,
  Step3Active
} from '../Icons'

import Hammer from 'react-hammerjs'
import { translate } from '../../utils/i18n'
import { reaction } from 'mobx'

const Intro = () => {
  const [intro, setIntro] = useState(false)
  const [step, setStep] = useState(1)

  // useEffect(() => {
  //   return reaction(() => {
  //     return Store.AppStore.state.intro
  //   }, (status) => {
  //     setIntro(status)
  //   }, {
  //     fireImmediately: true
  //   })
  // }, [])

  return (intro
    ? <>
      <Hammer onSwipe={(e) => {
        const dashboardScreen = Store.AppStore.state?.dashboardScreen
        if (e.direction === 2) {
          if (dashboardScreen === 2) {
            return
          }
          setStep(dashboardScreen + 1)
          Store.AppStore.updateState('dashboardScreen', dashboardScreen + 1)
        } else if (4) {
          if (dashboardScreen === 0) {
            return
          }
          Store.AppStore.updateState('dashboardScreen', dashboardScreen - 1)
          setStep(dashboardScreen - 1)
        }
      }}
      >
        <div className='intro'>

          {step === 0 &&
            <div className='intro__step intro__step--0'>
              <div className='center'>
                <div className='gesture'>
                  <IconGesture />
                </div>
                <div className='swipe'>
                  <IconSwipeLeft />
                </div>
                <span>
                  {translate('intro.step1')}
                </span>
              </div>
            </div>}

          {step === 1 &&
            <div className='intro__step intro__step--1'>
              <div className='center'>
                <div className='gesture'>
                  <IconGesture />
                </div>
                <div className='swipe'>
                  <IconSwipeRight />
                </div>
                <span>
                  {translate('intro.step2')}
                </span>
              </div>
            </div>}

          {step === 2 &&
            <div className='intro__step intro__step--2'>
              <div className='center'>
                <div className='swipe'>
                  <IconSwipeRight />
                </div>
                <div className='gesture'>
                  <IconGesture />
                </div>
                <span>
                  {translate('intro.step3')}
                </span>
              </div>
            </div>}

          <div className='intro__menu'>
            <Hammer onTap={(e) => {
              setStep(0)
              Store.AppStore.updateState('dashboardScreen', 0)
            }}
            >
              <div>{step === 0 ? <Step1Active /> : <Step1 />}</div>
            </Hammer>
            <Hammer onTap={(e) => {
              setStep(1)
              Store.AppStore.updateState('dashboardScreen', 1)
            }}
            >
              <div>{step === 1 ? <Step2Active /> : <Step2 />}</div>
            </Hammer>
            <Hammer onTap={(e) => {
              setStep(2)
              Store.AppStore.updateState('dashboardScreen', 2)
            }}
            >
              <div> {step === 2 ? <Step3Active /> : <Step3 />}</div>
            </Hammer>
          </div>

          <div className='intro__close'>
            <Hammer onTap={(e) => {
              Store.AppStore.updateState('intro', false)

              localStorage.setItem('intro', 'false')
            }}
            >
              <div>{translate('intro.skip')}</div>
            </Hammer>
          </div>
        </div>
      </Hammer>
    </>
    : null
  )
}

Intro.propTypes = {}

export default Intro
