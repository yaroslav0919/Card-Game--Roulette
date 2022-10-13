const de = {
  gameRules: 'SPIELREGELN',
  balance: 'BILANZ',
  totalBet: 'WETTEN INSGESAMT ',
  payments: 'Zahlungen',
  numbers: 'Zahlen',
  returnToLobby: 'Zurück zur Lobby',
  swiperText: 'Swipe up for play',
  actions: {
    double: 'Wetten zusammenlegen',
    repeat: 'Letzte Wette wiederholen',
    favourite: 'Favoriten anzeigen',
    rollback: 'Letzte Wette zurückgeben',
    delete: 'Wetten löschen',
    doBet: 'EINE WETTE ABGEBEN',
    autoPlay: 'Automatisches Abspielen'
  },
  intro: {
    step1: 'Zurück zum Spiel-Bildschirm.',
    step2: 'Nach rechts für Chat "schieben".',
    step3: 'Zurück zum normalen Ansicht.',
    skip: 'Einführung überspringen'
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
    tr: 'Türkisch',
    en: 'Englisch'
  },
  statics: {
    won: 'SIE HABEN GEWONNEN!',
    standard: 'Standard',
    temperature: 'Temperatur',
    liveBets: 'Online-Wetten',
    firstDozen: '1. DUTZEND',
    secondDozen: '2. DUTZEND',
    thirdDozen: '3. DUTZEND',
    firstColumn: '1. SPALTE',
    secondColumn: '2. SPALTE',
    thirdColumn: '3. SPALTE',
    even: 'PAAR',
    odd: 'EIN',
    lastRound: 'Letzte {{round}} Runde',
    title: 'STATISTIKEN',
    titleUppercase: 'STATISTIKEN'
  },
  bet: {
    title: ' SOFORT WETTEN!'
  },
  liveBets: {
    live: ' IN DER AKTUELLEN SITZUNG {{betCount}} PERSONEN HABEN WETTEN GEMACHT...',
    betItemCount: '{{count}} Wetten'
  },
  autoGame: {
    title: 'AUTOMATISCHES SPIEL',
    start: 'STARTEN',
    round: 'Тур',
    noBalance: 'Automatisches Spiel ist aufgrund unzureichender Bilanz nicht möglich',
    noBalance2: 'Automatisches Spiel wurde aufgrund unzureichender Bilanz angehalten'
  },
  status: {
    open: 'WETTE PLATZIEREN',
    lastCall: 'LETZTE WETTEN',
    playing: 'NEUE SITZUNG WIRD ERWARTET',
    finish: 'NEUE SITZUNG WIRD ERWARTET',
    betAvailable: 'You can bet now',
    betNextAvailable: 'You can bet for next session',
    bonusAvailable: 'Bonus available for use',
    cardAfterBonus: '{{card}} bet after bonus will be available for use',
    tooltip1: 'Bilanz insgesamt',
    tooltip2: 'Wetten insgesamt'
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
    activeListTitle: 'Liste der Boni',
    wallet: 'Bonus-Beutel',
    walletDesc: 'Verfügbarer Bonus-Beutel insgesamt',
    useAuto: 'Automatisch verwenden',
    dailyBonus: 'Täglicher Bonus',
    welcomeBonus: 'Willkommensbonus',
    eachXBet: 'Geschenk für jede {{count}} Wette',
    eachXBetDesc: '{{count}} Nach der Wette - eine Geschenk-Wette',
    eachXBetWarning: 'Sie können Ihren Bonus für eine Spielkarte ohne Wette verwenden.',
    eachXBetRemain: '{{count}} Spielkarten werden gekauft.',
    turnoverRemain: "Um das Zyklus {{remain}} <i class=\'fa fa-{{currency}}\'></i> zu beenden, müssen Sie immer noch aus Ihrem Beutel spielen.",
    standingEarnings: 'Wartezyklen',
    bonusAvailable: 'Sie können Ihren Bonus verwenden.',
    turnoverReward: 'Zyklischer Gewinn',
    usedAmount: 'Verwendeter Betrag',
    autoUseConfirmations: {
      bonus: 'Dieser Bonus wird nicht automatisch für Ihre nächsten Wetten verwendet, bestätigen Sie diese Aktion?',
      wallet: 'Ihr Bonus-Beutel wird nicht automatisch für Ihre nächsten Wetten verwendet, bestätigen Sie diese Aktion?'

    },
    rules: {
      menuTitle: 'Bonusregeln',
      general: {
        title: 'Allgemeine Bonusregeln',
        content: '<p>Wenn Aktionen mit dem Konto oder mit Wetten festgestellt werden, die darauf abzielen, die Bedingungen von Werbeaktionen und Gewinnen zu missbrauchen, ist das Management von "LiveGames" berechtigt zu entscheiden, ob der Bonus und die Gewinne annuliert werden oder nicht.</p><p>LiveGames; behält sich das Recht vor, ohne Angabe von Gründen die Regeln für Werbeaktionen zu ändern und zu aktualisieren.</p><p>Boni werden nicht auf Konten ausgezahlt, wenn die folgenden Situationen festgestellt werden:<ul><li>Konten mit demselben Namen</li><li>Konten derselben Familie/desselben Hauses</li><li>Konten mit derselben IP</li><li>Konten mit denselben persönlichen Daten (E-Mail, Telefonnummer, Kreditkarte, Zahlungsmethoden)</li><li>Konten, die von einem Computer aus verwendet werden</li><li>Mehr als ein Konto im Besitz derselben Person ist</li><li>Jede Bestätigung eines Betrugsversuchs</li><li>Verstoß gegen die Bedingungen und allgemeinen Bonusregeln</li></ul></p><p></p>LiveGames behält sich das Recht vor, bei Bedarf einen Personalausweis, Wohnsitzdokument und andere Dokumente vom Benutzer anzufordern. Wenn diese Dokumente vom Benutzer nicht bereitgestellt werden, können die Gewinne des Spielers gesperrt werden.  Wenn es Hinweise oder Verdacht gibt, dass der Spieler mehr als ein Konto hat, wird der Bonus nicht gutgeschrieben.  Sobald der Bonus eingezahlt wurde, werden verknüpfte Konten, die von der Sicherheitsabteilung entdeckt wurden, auf unbestimmte Zeit geschlossen und der gesamte Kontostand wird eingefroren.</p><p>Boni gelten für echte Benutzer mit einem einzigen Konto, die keinem organisierten Bonussammelnetzwerk angeschlossen sind.</p><p>Es wird davon ausgegangen, dass Benutzer, die von den Werbeaktionen profitieren möchten, die geltenden Geschäftsbedingungen gelesen und akzeptiert haben.</p>'
      },
      welcome: {
        title: 'Nutzungsbedingungen für den Willkommensbonus',
        content: '<ul><li>Für jeden Benutzer, der zum ersten Mal spielt, wird automatisch ein "Willkommensbonus" heruntergeladen.</li><li>Wenn der Betrag der Wette weniger als die Mindestwette gemäß den Regeln des Raums ist, wird der Restbetrag von der realen Bilanz abgezogen. </li><li>Um die mit dem Bonus verdiente Belohnung zu verwenden, müssen Sie den {{multiply}} gewonnenen Betrag aus der realen Bilanz setzen.</li><li>Der Willkommensbonus-Zyklus muss innerhalb von {{day}} Tag abgeschlossen sein. Bonusgewinne, die in diesem Zeitraum die Bedingungen für Wiedergewinnung nicht erfüllen, werden vom System storniert.</li><li>Mit dem Willkommensbonus gewonnene Belohnungen können nicht in echtes Geld umgewandelt werden. Nach dem Ende des Zyklus können Sie den im Bonus-Beutel angesammelten Betrag als echtes Geld verwenden.</li><li>Es gibt keine Bedingungen für Wiedergewinnung für Belohnungen, die durch Ausgaben aus dem Bonus-Beutel verdient werden.</li><li>Diess Sonderangebot ist ab 01.08.2019 gültig.</li><li>"Allgemeine Bonusregeln" gelten für alle Boni.</li></ul>'

      },
      eachxsession: {
        title: '%{{percent}} Bonus für jede {{each}} Wette',
        content: '<ul><li>Für jede <strong>{{each}}</strong> Ihre Wette <strong>%{{percent}}</strong> wird sofort ein Bonus gewährt.</li><li>Dieser Bonus kann nicht verwendet werden, um Sonderbelohnungen im Bingo-Spiel zu gewinnen (die ersten fünf Karten-die erste Reihe, die ersten 15 Karten-die erste Reihe und Bingo-Belohnungen).</li><li>Es gibt keine Bedingungen für Wiedergewinnung für Belohnungen, die durch diesen Bonus verdient werden.</li><li>Wenn verdiente Boni während der aktuellen Sitzung nicht verwendet werden, werden sie nicht auf die nächste Sitzung übertragen.</li><li>Diess Sonderangebot ist ab 01.08.2019 gültig.</li><li>"Allgemeine Bonusregeln" gelten für alle Boni.</li></ul>'
      },
      eachxbet: {
        title: '%{{percent}} Bonus für jede {{each}} Wette',
        content: '<ul><li>Für jede <strong>{{each}}</strong> Ihre Wette <strong>%{{percent}}</strong> wird sofort ein Bonus gewährt.</li><li>Dieser Bonus kann nicht verwendet werden, um Sonderbelohnungen im Bingo-Spiel zu gewinnen (die ersten fünf Karten-die erste Reihe, die ersten 15 Karten-die erste Reihe und Bingo-Belohnungen).</li><li>Es gibt keine Bedingungen für Wiedergewinnung für Belohnungen, die durch diesen Bonus verdient werden.</li><li>Wenn verdiente Boni während der aktuellen Sitzung nicht verwendet werden, werden sie nicht auf die nächste Sitzung übertragen.</li><li>Diess Sonderangebot ist ab 01.08.2019 gültig.</li><li>"Allgemeine Bonusregeln" gelten für alle Boni.</li></ul>'

      }
    }
  },
  statistics: {
    title: 'Statistik',
    menuTitle: 'Statistik',
    tab1: 'Standard',
    tab2: 'Temperatur',
    tab3: 'Live-Wetten',
    tab4: 'Zonen',
    heat: 'Heat'
  },
  favouriteBets: {
    title: 'Lieblingswetten',
    titleUppercase: 'LIEBLINGSWETTEN',
    special: {
      title: 'Sonderwetten',
      finaleEnPlein: 'Finale En Plein',
      finalesACheval: 'Finales A Cheval',
      fullBets: 'Volle Wetten'
    },
    save: 'LETZTE WETTE SPEICHERN',
    noBet: 'Letzte Wette wurde nicht gefunden',
    chip: 'Check'
  },
  chat: {
    title: 'Chat',
    clickForChat: 'Zum chatten klicken',
    input: {
      placeholder: 'Send Message'
    }
  },
  betHistory: {
    noBet: 'Es gibt noch keine Ihre Wette.',
    title: 'Wettengeschichte',
    titleUppercase: 'Wettengeschichte',
    session: 'Sitzung',
    bet: 'Wette',
    totalBet: 'Wetten insgesamt',
    totalGain: 'Gewinn insgesamt',
    result: 'Ergebnis',
    black: 'Black',
    red: 'Red',
    even: 'Even',
    odd: 'Odd',
    clear: 'Klar',
    filter: 'Filter',
    status: {
      title: 'Zustand',
      inProgress: 'Ihre Wette wird bearbeitet.',
      accepted: 'Ihre Zahlung wird genommen.',
      paymentError: 'Ihre Zahlung wird nicht genommen.',
      rewardInProgress: 'Ihre Belohnung wird gesendet.',
      betClosed: 'Die Belohnung wird nicht gewonnen.',
      rewardSent: 'Die Belohnung wird gewonnen.',
      rewardError: 'Fehler beim Senden der Belohnung',
      canceled: 'Abbrechen'
    },
    date: 'Datum',
    detail: {
      title: 'Wetten-Details',
      titleUppercase: 'WETTDETAILS',
      link: 'Details anzeigen',
      turnBack: 'Kehren Sie zurück'
    },
    room: {
      name: 'Raum',
      bcroulettetestfrench: 'French Room'
    }
  },
  help: {
    title: 'Help'
  },
  limits: {
    title: 'Limits und Zahlungen',
    roomName: 'Name des Tisches',
    bet: 'Wette',
    betLimit: 'Wettenlimit',
    payment: 'Zahlung',
    sessionNo: 'Nummer der Sitzung'
  },
  settings: {
    title: 'Settings',
    titleUppercase: 'Settings',
    language: 'Sprache auswählen',
    muteChat: 'Nachrichten von Spielern ausblenden',
    autoVideo: 'Auto-Video-Modus',
    videoQuality: 'Einstellungen für Videoqualität',
    croupierVolume: 'Stimme des Croupiers',
    gameVolume: 'Sounds des Spiels',
    videoVolume: 'Rundfunkton',
    gameSounds: 'Spielaudio',
    warningSounds: 'Warnton',
    voiceIsOpen: 'Lautstärke an',
    voiceIsClose: 'Lautstärke aus',
    chatIsOpen: 'Chatten Sie',
    chatIsClose: 'Chat aus'
  },
  errors: {
    PURCHASE_DISABLED: 'Das Spiel ist vorübergehend für Einsätze geschlossen.',
    USER_NOT_FOUND: 'Benutzer wurde nicht gefunden.',
    BETS_NOT_FOUND: 'Wette wurde nicht gefunden.',
    USER_LOCKED: 'Gesperrter Benutzer.',
    INSUFFICIENT_FUNDS: 'Mangelhafte Bilanz.',
    BALANCE_NOT_ENOUGH: 'Mangelhafte Bilanz.',
    MAX_STAKE_LIMIT: 'Höchstbetrag der Wette!',
    BONUS_ERROR: 'Bonus wurde nicht verwendet.',
    USER_SESSION_NOT_FOUND: 'Die Benutzersitzung ist abgelaufen, bitte aktualisieren Sie die Seite.',
    BONUS_AMOUNT_ERROR: 'Bonus wurde nicht verwendet.',
    BET_CLOSED: 'Keine Wetten mehr.',
    MAX_BET_COUNT: 'Der Höchstbetrag der Wette wurde erreicht und Sie können keine Wetten mehr platzieren.',
    MAX_BETONCARD_COUNT: 'Der Höchstbetrag der Wette für die Spielkarte wurde erreicht und Sie können keine Wetten für die Spielkarte mehr platzieren.',
    BONUS_EXCEED_AMOUNT: 'Der Bonus kann nicht berechnet werden, Ihre Wetten wurden annulliert.',
    BONUS_EXCEED_BET: 'Fehler bei der Bonusnutzung, Ihre Wetten wurden annulliert.',
    INVALID_SIGN_USAGE: 'Möglicherweise wurde Ihre Internetverbindung vorübergehend unterbrochen, die Verbindung wird wiederhergestellt ...',
    INVALID_RESPONSE_ID: 'Ihre Wetten sind nicht bestätigt.',
    INVALID_BET_STATE: 'Keine Wetten mehr.',
    TOO_MANY_REQUEST: 'Sie haben zu viele Anfragen gestellt, bitte warten Sie ...',
    INVALID_TRANSACTION: 'Ihre Wetten sind nicht bestätigt, versuchen Sie es in der nächsten Sitzung erneut.',
    TRANSACTION_NOT_APPROVED: 'Ihre Wetten sind nicht bestätigt, versuchen Sie es in der nächsten Sitzung erneut.',
    UNEXPECTED_ERROR: 'Unerwarteter Fehler. Bitte versuchen Sie es später noch einmal.',
    REARRANGE_TRX_FAILLED: 'Obwohl wir es erneut versucht haben, wurden Ihre Wetten nicht bestätigt.',
    TRANSACTION_NOT_FOUND: 'Unerwarteter Fehler. Bitte versuchen Sie es später noch einmal.',
    TRANSACTION_ERROR: 'Unerwarteter Fehler. Bitte versuchen Sie es später noch einmal.',
    UNEXPECTED_TRANSACTION_ERROR: 'Unerwarteter Fehler. Bitte versuchen Sie es später noch einmal.',
    CONNECTION_DISCONNECTED: 'Die Verbindungsdauer ist abgelaufen, bitte aktualisieren Sie die Seite.',
    RECONNECT: 'Wiederanschließen ...',
    RECONNECTING: 'Wiederanschließen ...',
    REPEATLASTBET_EMPTY: 'Es gibt keine Wetten in der vorherigen Sitzung.',
    REPEATLASTBET_SUCCESS: 'Ihre Wetten aus der vorherigen Sitzung wurden wiederholt.'

  },
  warnings: {
    sessionExpireWarning: 'Ihre Sitzung läuft bald ab. Möchten Sie fortsetzen?',
    rearrangeFailed: 'Ihre nummerierten Spielkarten wurden aufgrund einer unzureichenden Bilanz nicht genehmigt.'
  },
  modals: {
    continue: 'Fortsetzen',
    randomBet: {
      title: 'zufällige Wette',
      text: '{{amount}}{{currency}} Wetten werden auf verschiedene Spielkarten platziert {{count}} . Bestätigen Sie diese Aktion?'
    },
    refreshPage: 'Ihre Sitzung ist abgelaufen, bitte aktualisieren Sie die Seite.',
    realityCheckConfirmation: 'Ihre Sitzung ist beendet, möchten Sie fortsetzen?'
  },
  fullScreen: {
    title: 'Ganzer Bildschirm'
  }
}

export default de
