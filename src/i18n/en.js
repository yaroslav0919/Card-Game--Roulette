const en = {
  gameRules: 'GAME RULES',
  balance: 'BALANCE',
  totalBet: 'TOTAL BETS',
  payments: 'Payments',
  numbers: 'Numbers',
  returnToLobby: 'Return to lobby',
  close: 'Close',
  loading: 'LOADING',
  swiperText: 'Swipe up for play',
  actions: {
    double: 'Add bets',
    repeat: 'Repeat Last Bet ',
    favourite: 'Show Favorites',
    rollback: 'Return Last Bet',
    delete: 'Delete bets',
    doBet: 'PLACE BET',
    autoPlay: 'Auto Play'
  },
  intro: {
    step1: 'Return to the game screen.',
    step2: 'Swipe right for chat.',
    step3: 'Return to normal view.',
    skip: 'Skip introduction'
  },
  specialBets: {
    color: 'Color',
    column: 'Column',
    corner: 'Corner',
    dozen: 'Dozen',
    half: 'Half',
    line: 'Line',
    parity: 'Parity',
    split: 'Split',
    straightup: 'Straight Up',
    street: 'Street'
  },
  languages: {
    tr: 'Turkish',
    en: 'English'
  },
  statics: {
    won: 'YOU WON!',
    standard: 'Standard',
    temperature: 'Temperature',
    liveBets: 'On-line bet',
    firstDozen: '1st DOZEN',
    secondDozen: '2nd DOZEN',
    thirdDozen: '3rd DOZEN',
    firstColumn: '1st COLUMN',
    secondColumn: '2nd COLUMN',
    thirdColumn: '3rd COLUMN',
    even: 'PAIR',
    odd: 'ONE',
    lastRound: 'Last {{round}} Round',
    title: 'STATISTICS',
    titleUppercase: 'STATISTICS'
  },
  bet: {
    title: 'You can bet now!'
  },
  liveBets: {
    live: 'IN THE CURRENT SESSION {{betCount}} OF PEOPLE MADE BETS…',
    betItemCount: '{{count}} of bets'
  },
  autoGame: {
    title: 'AUTOMATIC GAMES',
    start: 'BEGIN',
    round: 'Round',
    noBalance: 'Automatic play is not possible due to insufficient balance',
    noBalance2: 'Automatic play paused due to lack of balance'
  },
  status: {
    open: 'PLACE A BET',
    lastCall: 'LAST BETS',
    playing: 'WAITING FOR NEW SESSION',
    finish: 'WAITING FOR NEW SESSION',
    betAvailable: 'You can bet now',
    betNextAvailable: 'You can bet for next session',
    bonusAvailable: 'Bonus available for use',
    cardAfterBonus: '{{card}} bet after bonus will be available for use',
    tooltip1: 'Total balance',
    tooltip2: 'Total bets'
  },
  notification: {
    info: 'INFO',
    warning: 'WARNING',
    error: 'ERROR',
    success: 'SUCCESS'
  },
  modal: {
    cancel: 'CANCEL',
    accept: 'ACCEPT',
    okay: 'OKAY'
  },
  rules: [
    {
      title: 'Game Rules',
      content: '<p>The objective in Roulette is to predict the number on which the ball will land by placing one or more bets that cover that particular number. The wheel in European Roulette includes the numbers 1-36 plus a single 0 (zero).</p><p>After betting time has expired, the ball is spun within the Roulette wheel. The ball will eventually come to rest in one of the numbered pockets within the wheel. You win if you have placed a bet that covers that particular number.</p>'
    },
    {
      title: 'Bet Types',
      content: `
        <p>You can place many different kinds of bets on the Roulette table. Bets can cover a single number or a certain range of numbers, and each type of bet has its own payout rate.</p>
        <p>Bets made on the numbered spaces on the betting area, or on the lines between them, are called Inside Bets, while bets made on the special boxes below and to the side of the main grid of numbers are called Outside Bets.</p>
      `
    },
    {
      title: 'Inside Bets',
      content: `
        <ul>
          <li><strong>Straight Up</strong> - place your chip directly on any single number (including zero).</li>
          <li><strong>Split Bet</strong> - place your chip on the line between any two numbers, either on the vertical or horizontal.</li>
          <li><strong>Street Bet</strong> - place your chip at the end of any row of numbers. A Street Bet covers three numbers.</li>
          <li><strong>Corner Bet</strong> - place your chip at the corner (central intersection) where four numbers meet. All four numbers are covered.</li>
          <li><strong>Line Bet</strong> - place your chip at the end of two rows on the intersection between the two rows. A line bet covers all the numbers in both rows, a total of six numbers.</li>
        </ul>
      `
    },
    {
      title: 'Outside Bets',
      content: `
        <ul>
          <li><strong>Column Bet</strong> - place your chip in one of the boxes marked "2 to 1" at the end of the column that covers all 12 numbers in that column. The zero is not covered by any column bet.</li>
          <li><strong>Dozen Bet</strong> - place your chip in one of the three boxes marked "1st 12," "2nd 12" or "3rd 12" to cover the 12 numbers alongside the box.</li>
          <li><strong>Red/Black</strong> - place your chip in the Red or Black box to cover the 18 red or 18 black numbers. The zero is not covered by these bets.</li>
          <li><strong>Even/Odd</strong> - place your chip in one of these boxes to cover the 18 even or 18 odd numbers. The zero is not covered by these bets.</li>
          <li><strong>1-18/19-36</strong> - place your chip in either of these boxes to cover the first or second set of 18 numbers. The zero is not covered by these bets.</li>
        </ul>
      `
    },
    {
      title: 'Neighbour Bets',
      content: `
        <h4>Tiers du Cylindre</h4>
        <p>This bet covers a total of 12 numbers that include 27, 33 and the numbers that lie between them on the side of the Roulette wheel opposite to zero. 6 chips are placed as follows:</p>
        <ul>
          <li>1 chip on the 5/8 split</li>
          <li>1 chip on the 10/11 split</li>
          <li>1 chip on the 13/16 split</li>
          <li>1 chip on the 23/24 split</li>
          <li>1 chip on the 27/30 split</li>
          <li>1 chip on the 33/36 split</li>
        </ul>
        <h4>Orphelins a Cheval</h4>
        <p>This bet covers a total of 8 numbers on the two segments of the Roulette wheel not covered by the voisins du zero and tiers du cylindre bets above. 5 chips are placed as follows:</p>
        <ul>
          <li>1 chip on 1 (straight up)</li>
          <li>1 chip on the 6/9 split</li>
          <li>1 chip on the 14/17 split</li>
          <li>1 chip on the 17/20 split</li>
          <li>1 chip on the 31/34 split</li>
        </ul>
        <h4>Voisins du Zero</h4>
        <p>his bet covers a total of 17 numbers that include 22, 25 and the numbers that lie between them on the side of the Roulette wheel that contains zero. 9 chips are placed as follows:</p>
        <ul>
          <li>2 chips on the 0/2/3 street</li>
          <li>1 chip on the 4/7 split</li>
          <li>1 chip on the 12/15 split</li>
          <li>1 chip on the 18/21 split</li>
          <li>1 chip on the 19/22 split</li>
          <li>2 chips on the 25/26/28/29 corner</li>
          <li>1 chip on the 32/35 split</li>
        </ul>
        <h4>Jeu Zero</h4>
        <p>This bet covers zero and the 6 numbers in close proximity to zero on the Roulette wheel: 12, 35, 3, 26, 0, 32 and 15. 4 chips are placed as follows:</p>
        <ul>
          <li>1 chip on the 0/3 split</li>
          <li>1 chip on the 12/15 split</li>
          <li>1 chip on 26 (straight up)</li>
          <li>1 chip on the 32/35 split</li>
        </ul>
        <p>A neighbour bet covers a particular number as well as other numbers that lie in close proximity to it on the Roulette wheel. To place a neighbour bet, click/tap a specific number on the racetrack. A chip will be placed on the chosen number and on numbers that neighbour it to the right and left. Click/tap on the circular "-"or "+" button to increase or decrease the set of neighbours to the right and left of the chosen number.</p>
      `
    },
    {
      title: 'Special Bets',
      content: `
        <p>Under the second tab in Favourite Bets, you can place Finale en plein and Finale a cheval bets more easily.</p>
        <h4>Finale en Plein</h4>
        <ul>
          <li>Finale en plein 0 – 4-chip bet covers 0+10+20+30, each with 1 chip</li>
          <li>Finale en plein 1 – 4-chip bet covers 1+11+21+31, each with 1 chip</li>
          <li>Finale en plein 2 – 4-chip bet covers 2+12+22+32, each with 1 chip</li>
          <li>Finale en plein 3 – 4-chip bet covers 3+13+23+33, each with 1 chip</li>
          <li>Finale en plein 4 – 4-chip bet covers 4+14+24+34, each with 1 chip</li>
          <li>Finale en plein 5 – 4-chip bet covers 5+15+25+35, each with 1 chip</li>
          <li>Finale en plein 6 – 4-chip bet covers 6+16+26+36, each with 1 chip</li>
          <li>Finale en plein 7 – 3-chip bet covers 7+17+27, each with 1 chip</li>
          <li>Finale en plein 8 – 3-chip bet covers 8+18+28, each with 1 chip</li>
          <li>Finale en plein 9 – 3-chip bet covers 9+19+29, each with 1 chip</li>
        </ul>
        <h4>Finale a Cheval</h4>
        <ul>
          <li>Finale a cheval 0/3 – 4-chip bet covers 0/3+10/13+20/23+30/33, each with 1 chip</li>
          <li>Finale a cheval 1/4 – 4-chip bet covers 1/4+11/14+21/24+31/34, each with 1 chip</li>
          <li>Finale a cheval 2/5 – 4-chip bet covers 2/5+12/15+22/25+32/35, each with 1 chip</li>
          <li>Finale a cheval 3/6 – 4-chip bet covers 3/6+13/16+23/26+33/36, each with 1 chip</li>
          <li>Finale a cheval 4/7 – 4-chip bet covers 4/7+14/17+24/27+34, each with 1 chip</li>
          <li>Finale a cheval 5/8 – 4-chip bet covers 5/8+15/18+25/28+35, each with 1 chip</li>
          <li>Finale a cheval 6/9 – 4-chip bet covers 6/9+16/19+26/29+36, each with 1 chip</li>
          <li>Finale a cheval 7/10 – 3-chip bet covers 7/10+17/20+27/30, each with 1 chip</li>
          <li>Finale a cheval 8/11 – 3-chip bet covers 8/11+18/21+28/31, each with 1 chip</li>
          <li>Finale a cheval 9/12 – 3-chip bet covers 9/12+19/22+29/32, each with 1 chip</li>
        <ul>
      `
    },
    {
      title: 'Payment',
      content: `
        <p>Your payout depends on the type of placed bet.</p>
        <h4>Inside Bets</h4>
        <div class="table--v2">
          <table>
            <thead>
              <tr>
                <th>Bet Type</th>
                <th>Payout</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Straight Up</td>
                <td>35:1</td>
              </tr>
              <tr>
                <td>Split</td>
                <td>17:1</td>
              </tr>
              <tr>
                <td>Street</td>
                <td>11:1</td>
              </tr>
              <tr>
                <td>Corner</td>
                <td>8:1</td>
              </tr>
              <tr>
                <td>Line</td>
                <td>5:1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Outside Bets</h4>
        <div class="table--v2">
          <table>
            <thead>
              <tr>
                <th>Bet Type</th>
                <th>Payout</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Column</td>
                <td>2:1</td>
              </tr>
              <tr>
                <td>Dozen</td>
                <td>2:1</td>
              </tr>
              <tr>
                <td>Red/Black</td>
                <td>1:1</td>
              </tr>
              <tr>
                <td>Even/Odd</td>
                <td>1:1</td>
              </tr>
              <tr>
                <td>1-18/19-36</td>
                <td>1:1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>* Malfunction voids all pays and play.</p>
      `
    },
    {
      title: 'Disconnection Policy',
      content: 'If you are disconnected from a game round, any placed bets remain valid and are settled in your absence. Upon reconnecting, you can view bet outcomes in the History window.'
    },
    {
      title: 'Error Handling',
      content: 'If there is an error in the game, system or game procedure, the game round will be temporarily paused while the studio manager is being informed. You and other players will be notified via Chat, that the issue is being investigated. If the manager can immediately resolve the error, the game round will continue as normal. If immediate resolution is not possible, the game round will be cancelled, and initial bets will be refunded to all players who participated in the game round.'
    }
  ],
  bonus: {
    activeListTitle: 'Bonus List',
    wallet: 'Bonus wallet',
    walletDesc: 'Total Bonus Wallet Available',
    useAuto: 'Use automatically',
    dailyBonus: 'Daily Bonus',
    welcomeBonus: 'Welcome Bonus',
    eachXBet: 'Gift {{count}} for each bet',
    eachXBetDesc: '{{count}} After bet there is gift bet',
    eachXBetWarning: 'You can use your card bonus without betting.',
    eachXBetRemain: '{{count}} pieces of cards purchased.',
    turnoverRemain: "To complete the cycle {{remain}} <i class=\'fa fa-{{currency}}\'></i> still play from the wallet.",
    standingEarnings: 'Waiting Cycles',
    bonusAvailable: 'You can use your bonus.',
    turnoverReward: 'Cyclic win',
    usedAmount: 'Used amount',
    autoUseConfirmations: {
      bonus: 'This bonus will not be used automatically for your next bets, do you confirm?',
      wallet: 'Your bonus wallet will not be used automatically for your next bets, do you confirm?'

    },
    rules: {
      menuTitle: 'Bonus rules',
      general: {
        title: 'General Rules',
        content: '<p>If actions are detected with the account or with bets aimed at abusing the terms of promotions and winnings, the management of "LiveGames" is authorized to make a decision to cancel or not cancel the bonus and winnings.".</p><p>LiveGames; reserves the right, without giving any reason, to change and update the rules regarding promotions.</p><p>Bonuses are not paid to accounts when the following situations are detected:<ul><li>Accounts with the same name</li><li>Accounts belonging to the same family / house</li><li>Account with one IP</li><li>Accounts containing the same personal data (e-mail, phone number, credit card, payment methods)</li><li>Accounts used from one computer </li> <li> More than one account owned by one person</li><li>Any confirmation of attempted deception</li><li>Violation of the terms and conditions and general bonus rules</li></ul></p><p></p>LiveGames reserves the right, if necessary, to request an identity card, residence document and other documents from the user. If these documents are not provided by the user, the player\'s winnings may be blocked. If there is evidence or suspicions that the player has more than one account, the bonus will not be credited. Once the bonus has been deposited, linked accounts discovered by the security department will be closed indefinitely and the entire account balance will be frozen.</p><p>Bonuses are intended for real users with one account, not affiliated with any organized bonus collection network.</p><p>Users wishing to take advantage of the promotions are deemed to have confirmed that they have read and accepted the applicable terms and conditions.</p>'
      },
      welcome: {
        title: 'Welcome Bonus Terms of Use',
        content: '<ul><li>"Welcome Bonus" will be automatically downloaded for every user who participates in the games for the first time.</li><li>If the bet amount is below the minimum bet amount according to the rules of the room, the remaining amount will be deducted from the real balance. </li><li>To use the prize earned with the bonus, you need to wager {{multiply}} the amount won from the real balance..</li><li>The “Welcome Bonus” cycle must be completed within {{day}} of the day. Bonus wins that do not meet the wagering requirements during this period will be canceled by the system.</li><li>Prizes won with the welcome bonus cannot be converted into real money. After the end of the cycle, you can use the amount accumulated in the bonus wallet as real money.</li><li>There are no wagering requirements for rewards earned by spending from the Bonus Wallet.</li><li>ЭThis promotion is valid from 01.08.2019.</li><li>"General Bonus Rules" apply to all bonuses.</li></ul>'

      },
      eachxsession: {
        title: 'For every {{each}} Bet% {{percent}} Bonus',
        content: '<ul><li>For every <strong> {{each}} </strong> your bet <strong>% {{percent}} </strong>, a bonus is instantly given.</li><li>This bonus cannot be used to win special prizes in the Bingo game (the first five cards are the first line, the first 15 cards are the first line and and Bingo prizes).</li><li>There are no wagering requirements for prizes earned through this bonus. </li><li>If earned bonuses are not used during the current session, they do not carry over to the next session.</li><li>This promotion is valid from 01.08.2019.</li><li>The "General Bonus Rules" apply to all bonuses.</li></ul>'
      },
      eachxbet: {
        title: 'For every {{each}} Bet% {{percent}} Bonus',
        content: '<ul><li>For every <strong> {{each}} </strong> your <strong>% {{percent}} </strong> bet, a bonus is instantly given.</li><li>This bonus cannot be used to win special prizes in the Bingo game (the first five cards are the first line, the first 15 cards are the first line and and Bingo prizes).</li><li>There are no wagering requirements for prizes earned through this bonus. </li><li>If earned bonuses are not used during the current session, they do not carry over to the next session.</li><li>This promotion is valid from 01.08.2019.</li><li>The "General Bonus Rules" apply to all bonuses.</li></ul>'

      }
    }
  },
  statistics: {
    title: 'Statistics',
    menuTitle: 'Statistics',
    tab1: 'Standard',
    tab2: 'Temperature',
    tab3: 'Live Bets',
    tab4: 'Zones',
    heat: 'Heat'
  },
  favouriteBets: {
    title: 'Favourite bets',
    titleUppercase: 'FAVOURITE BETS',
    special: {
      title: 'Special bets',
      finaleEnPlein: 'Finale En Plein',
      finalesACheval: 'Finales A Cheval',
      fullBets: 'Full bets'
    },
    save: 'SAVE LAST BET',
    noBet: 'Last played bet was not found',
    chip: 'Slip'
  },
  chat: {
    title: 'Chat',
    clickForChat: 'Press for chat',
    input: {
      placeholder: 'Send Message'
    }
  },
  betHistory: {
    noBet: 'Yet no bet.',
    title: 'History of betting',
    titleUppercase: 'History of betting',
    session: 'Session',
    bet: 'Bet',
    totalBet: 'Total bets',
    totalGain: 'Total win',
    result: 'Result',
    black: 'Black',
    red: 'Red',
    even: 'Even',
    odd: 'Odd',
    clear: 'Clear',
    filter: 'Filter',
    status: {
      title: 'Condition',
      inProgress: 'Bet is processing.',
      accepted: 'Payment received.',
      paymentError: 'Payment not received.',
      rewardInProgress: 'The reward is sent.',
      betClosed: 'Award not won.',
      rewardSent: 'Award is won.',
      rewardError: 'Error of award sending',
      canceled: 'Cancellation'
    },
    date: 'Date',
    detail: {
      title: 'Bet details',
      titleUppercase: 'BET DETAIL',
      link: 'View details',
      turnBack: 'Turn Back'
    },
    room: {
      name: 'Room',
      bcroulettetestfrench: 'French Room'
    }
  },
  help: {
    title: 'Help'
  },
  limits: {
    title: 'Limits and payments',
    roomName: 'Table name',
    bet: 'Bet',
    betLimit: 'Bet limit',
    payment: 'Payment',
    sessionNo: 'Session number'
  },
  settings: {
    title: 'Settings',
    titleUppercase: 'SETTINGS',
    language: 'Language selection',
    muteChat: 'Hide messages from players',
    autoVideo: 'Auto-video mode',
    videoQuality: 'Video quality settings',
    croupierVolume: 'Croupier\'s Voice',
    gameVolume: 'Game sounds',
    videoVolume: 'Broadcast Volume',
    gameSounds: 'Game Sounds',
    warningSounds: 'Warning Sounds',
    voiceIsOpen: 'Volume On',
    voiceIsClose: 'Volume Off',
    chatIsOpen: 'Chat On',
    chatIsClose: 'Chat Off'
  },
  errors: {
    PURCHASE_DISABLED: 'The game is temporarily closed for bets.',
    USER_NOT_FOUND: 'User is not found.',
    BETS_NOT_FOUND: 'Bets are not found.',
    USER_LOCKED: 'Blocked user.',
    INSUFFICIENT_FUNDS: 'Insufficient balance.',
    BALANCE_NOT_ENOUGH: 'Insufficient balance.',
    MAX_STAKE_LIMIT: 'Max. bet limit!',
    BONUS_ERROR: 'Bonus has not been used.',
    USER_SESSION_NOT_FOUND: 'The user session has expired, please refresh the page.',
    BONUS_AMOUNT_ERROR: 'Bonus has not been used.',
    BET_CLOSED: 'Bets closed.',
    MAX_BET_COUNT: 'The maximum bet limit has been reached, you can no longer place bets.',
    MAX_BETONCARD_COUNT: 'The maximum card bet limit has been reached, you can no longer place bets on the cards.',
    BONUS_EXCEED_AMOUNT: 'The bonus cannot be calculated, your bets have been canceled.',
    BONUS_EXCEED_BET: 'Bonus usage error, your bets are canceled.',
    INVALID_SIGN_USAGE: 'Your internet connection may have been temporarily interrupted, reconnect ...',
    INVALID_RESPONSE_ID: 'Your bets are not confirmed.',
    INVALID_BET_STATE: 'Bets closed.',
    TOO_MANY_REQUEST: 'You have made too many requests, please wait ...',
    INVALID_TRANSACTION: 'Your bids are not confirmed, please try again in the next session.',
    TRANSACTION_NOT_APPROVED: 'Your bids are not confirmed, please try again in the next session.',
    UNEXPECTED_ERROR: 'An unexpected error has occurred. Please try again later.',
    REARRANGE_TRX_FAILLED: 'Even though we tried again, your bets were not confirmed.',
    TRANSACTION_NOT_FOUND: 'An unexpected error has occurred. Please try again later.',
    TRANSACTION_ERROR: 'An unexpected error has occurred. Please try again later.',
    UNEXPECTED_TRANSACTION_ERROR: 'An unexpected error has occurred. Please try again later.',
    CONNECTION_DISCONNECTED: 'Connection period expired, please update.',
    RECONNECT: 'Reconnect ...',
    RECONNECTING: 'Reconnect ...',
    REPEATLASTBET_EMPTY: 'There are no bets in the previous session.',
    REPEATLASTBET_SUCCESS: 'Your bets from the previous session have been repeated.'
  },
  warnings: {
    sessionExpireWarning: 'Your session is about to expire, would you like to continue?',
    rearrangeFailed: 'Your numbered cards have not been approved due to insufficient balance.',
    broadcastFailed: 'Please click on <strong>PLAY</strong> button to continue watch live broadcast.'
  },
  modals: {
    continue: 'Continue',
    randomBet: {
      title: 'Random bet',
      text: '{{amount}}{{currency}} bets will be placed on different {{count}} cards. Do you confirm?'
    },
    refreshPage: 'Your session has expired, please refresh the page.',
    realityCheckConfirmation: 'Your session will be over, do you want to continue?'
  },
  fullScreen: {
    title: 'Fullscreen'
  }
}

export default en
