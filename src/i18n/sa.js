const sa = {
  gameRules: 'قواعد اللعبة',
  balance: 'الرصيد',
  totalBet: 'إجمالي الرهانات',
  payments: 'المدفوعات',
  numbers: 'الارقام',
  returnToLobby: 'العودة إلى اللوبي',
  swiperText: 'Swipe up for play',
  actions: {
    double: ' إضافة الرهانات',
    repeat: 'كرر آخر رهان ',
    favourite: 'إظهار المفضلات ',
    rollback: 'رد الرهان الأخير ',
    delete: ' إلغاء الرهان',
    doBet: 'وضع رهان',
    autoPlay: 'تشغيل تلقائي'
  },
  intro: {
    step1: ' العودة إلى شاشة اللعبة.',
    step2: ' اسحب لليمين للدردشة.',
    step3: 'العودة إلى العرض الطبيعي ',
    skip: ' تخطي المقدمة'
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
    tr: 'تركي',
    en: 'انكليزي'
  },
  statics: {
    won: 'أنت ربحت',
    standard: 'قياسي',
    temperature: 'درجة الحرارة',
    liveBets: 'المراهنة على الانترنيت',
    firstDozen: 'أول دوزان',
    secondDozen: 'ثاني دوزان ',
    thirdDozen: 'ثالث دوزان ',
    firstColumn: 'العمود الأول ',
    secondColumn: 'العمود الثاني',
    thirdColumn: 'العمود الثالث',
    even: 'حتى',
    odd: 'مفرد',
    lastRound: 'اخيرة {{round}} جولة',
    titleUppercase: 'إحصائيات'
  },
  bet: {
    title: ' الرهان على الفور!'
  },
  liveBets: {
    live: '{{betCount}} الناس عملت الرهانات ....',
    betItemCount: '{{count}} الرهانات'
  },
  autoGame: {
    title: ' لعبة أوتوماتيكية',
    start: 'بدء',
    round: 'جولة',
    noBalance: ' اللعبة الاتوماتيكية غير ممكنة بسبب عدم كفاية الرصيد',
    noBalance2: ' اللعبة الاتوماتيكية متوقفة بسبب عدم كفاية الرصيد '
  },
  status: {
    open: ' ضع الرهان',
    lastCall: 'الرهانات الأخيرة',
    playing: ' يتم انتظار جلسة جديدة',
    finish: ' يتم انتظار جلسة جديدة',
    betAvailable: 'You can bet now',
    betNextAvailable: 'You can bet for next session',
    bonusAvailable: 'Bonus available for use',
    cardAfterBonus: '{{card}} bet after bonus will be available for use',
    tooltip1: ' مجموع الرصيد',
    tooltip2: ' مجموع الرهانات'
  },
  notification: {
    info: 'معلومات',
    warning: 'تحذير',
    error: 'خطأ',
    success: 'النجاح'
  },
  modal: {
    cancel: 'إلغاء',
    accept: 'قبول',
    okay: 'حسنا'
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
    activeListTitle: ' قائمة المكافآت ',
    wallet: ' محفظة المكافآت',
    walletDesc: ' إجمالي محفظة المكافآت المتاحة',
    useAuto: ' استخدم تلقائيًا ',
    dailyBonus: 'مكافأة يومية',
    welcomeBonus: ' مكافأة ترحيبية',
    eachXBet: 'رهان مكافأة{{count}} عن كل ',
    eachXBetDesc: '{{count}} بعد الرهان رهان هدية ',
    eachXBetWarning: ' يمكنك استخدام مكافأة بطاقتك دون الحاجة إلى الرهان ',
    eachXBetRemain: '{{count}} تم شراء قطع من البطاقات.',
    turnoverRemain: " لإكمال الدورة {{remain}} <i class=\'fa fa-{{currency}}\'></i> العب من محفظتك.",
    standingEarnings: ' دورات الانتظار',
    bonusAvailable: 'يمكنك استخدام مكافأتك ',
    turnoverReward: ' ربح دوري',
    usedAmount: 'المبلغ المستخدم',
    autoUseConfirmations: {
      bonus: ' لن يتم استخدام هذه المكافأة تلقائيًا في رهاناتك التالية ، هل تؤكد ذلك؟',
      wallet: ' لن يتم استخدام محفظة المكافآت الخاصة بك تلقائيًا في رهاناتك التالية ، هل تؤكد ذلك؟'

    },
    rules: {
      menuTitle: ' قواعد المكافأت',
      general: {
        title: 'قواعد المكافأت العامة',
        content: '<p> إذا تم الكشف عن إجراءات مع الحساب أو مع الرهانات التي تهدف إلى إساءة استخدام شروط الترقيات والمكاسب ، فإن الإدارة مخولة لاتخاذ قرار بإلغاء أو عدم إلغاء المكافآت والمكاسب. "LiveGames".</p><p>LiveGames; تحتفظ بالحق في تغيير وتحديث القواعد المتعلقة بالعروض الترويجية دون إبداء الأسباب.</p><p> لا يتم دفع المكافآت للحسابات في حالة اكتشاف الحالات التالية:<ul><li> حسابات باسم واحد </li><li> حسابات تنتمي لنفس العائلة / المنزل </li><li> حسابات مع واحد IP</li><li> الحسابات التي تحتوي على نفس البيانات الشخصية (البريد الإلكتروني ، رقم الهاتف ، بطاقة الائتمان ، طرق الدفع)</li><li> الحسابات المستخدمة من جهاز كمبيوتر واحد </li><li> أكثر من حساب يملكه شخص واحد </li><li> أي تأكيد لمحاولة الخداع </li><li> مخالفة الشروط والأحكام وقواعد المكافأة العامة </li></ul></p><p></p> تحتفظ LiveGames بالحق ، إذا لزم الأمر ، في طلب بطاقة هوية ووثيقة إقامة ووثائق أخرى من المستخدم. إذا لم يتم توفير هذه المستندات من قبل المستخدم ، فقد يتم حظر مكاسب اللاعب. إذا كان هناك دليل أو شكوك على أن اللاعب لديه أكثر من حساب ، فلن يتم إضافة المكافأة. بمجرد إيداع المكافأة ، سيتم إغلاق الحسابات المرتبطة التي اكتشفها قسم الأمن إلى أجل غير مسمى وسيتم تجميد رصيد الحساب بالكامل.</p><p> المكافآت هي للمستخدمين الحقيقيين الذين لديهم حساب واحد ، وليسوا منتسبين إلى أي شبكة جمع مكافآت منظمة.</p><p> يعتبر المستخدمون الذين يرغبون في الاستفادة من العروض الترويجية قد أكدوا أنهم قد قرأوا وقبلوا الشروط والأحكام المعمول بها.</p>'
      },
      welcome: {
        title: 'شروط استخدام مكافأة الترحيب',
        content: '<ul><li>« مكافأة ترحيبية » سيتم تنزيله تلقائيًا لكل مستخدم يلعب الألعاب لأول مرة.</li><li> إذا كان مبلغ الرهان أقل من الحد الأدنى لمبلغ الرهان وفقًا لقواعد الغرفة ، فسيتم خصم المبلغ المتبقي من الرصيد الحقيقي. </li><li> لاستخدام الجائزة التي حصلت عليها مع المكافأة ، عليك أن تراهن {{multiply}} مقدار المكاسب من الرصيد الحقيقي.</li><li>دورة « مكافأة ترحيبية » يجب أن تكتمل في غضون {{day}} أيام. سيتم إلغاء مكافآت المكافآت التي لا تفي بمتطلبات الرهان خلال هذه الفترة من قبل النظام.</li><li> لا يمكن تحويل الجوائز التي تم ربحها مع المكافأة الترحيبية إلى أموال حقيقية. بعد انتهاء الدورة ، يمكنك استخدام المبلغ المتراكم في محفظة المكافآت كأموال حقيقية.</li><li> لا توجد متطلبات الرهان على المكافآت المستلمة بسبب الإنفاق من محفظة المكافآت.</li><li> هذا العرض ساري من 01.08.2019.</li><li>« قواعد المكافآت العامة » تنطبق على جميع المكافآت.</li></ul>'

      },
      eachxsession: {
        title: 'لكل{{each}} مراهنة %{{percent}} مكافأة',
        content: '<ul><li>لكل <strong>{{each}}</strong> مراهنتك <strong>%{{percent}}</strong> يتم منح مكافأة على الفور.</li><li> لا يمكن استخدام هذه المكافأة للفوز بجوائز خاصة في لعبة بينغو (أول خمس بطاقات هي السطر الأول ، وأول 15 بطاقة هي السطر الأول وجوائز البنغو).</li><li> لا توجد متطلبات مراهنة على الجوائز المكتسبة من خلال هذه المكافأة. </li><li> إذا لم يتم استخدام المكافآت المكتسبة خلال الجلسة الحالية ، فلن يتم ترحيلها إلى الجلسة التالية.</li><li>Эта акция действует с 01.08.2019.</li><li>«قواعد المكافآت العامة» تنطبق على جميع المكافآت.</li></ul>'
      },
      eachxbet: {
        title: 'لكل{{each}} رهان %{{percent}} مكافأة',
        content: '<ul><li>لكل <strong>{{each}}</strong> رهانك<strong>%{{percent}}</strong> يتم منح مكافأة على الفور.</li><li> لا يمكن استخدام هذه المكافأة للفوز بجوائز خاصة في لعبة بينغو (أول خمس بطاقات هي السطر الأول ، وأول 15 بطاقة هي السطر الأول وجوائز البنغو).</li><li> لا توجد متطلبات مراهنة على الجوائز المكتسبة من خلال هذه المكافأة. </li><li> إذا لم يتم استخدام المكافآت المكتسبة خلال الجلسة الحالية ، فلن يتم ترحيلها إلى الجلسة التالية.</li><li> هذا العرض ساري من 01.08.2019.</li><li>«قواعد المكافآت العامة» تنطبق على جميع المكافآت.</li></ul>'

      }
    }
  },
  statistics: {
    title: 'إحصائية',
    menuTitle: 'إحصائية',
    tab1: 'قياسي',
    tab2: 'درجة الحرارة',
    tab3: 'الرهانات الحية',
    tab4: 'المناطق',
    heat: 'الحرارة'
  },
  favouriteBets: {
    title: ' الرهانات المفضلة',
    titleUppercase: ' الرهانات المفضلة',
    special: {
      title: ' الرهانات الخاصة',
      finaleEnPlein: 'Finale En Plein',
      finalesACheval: 'Finales A Cheval',
      fullBets: ' رهانات كاملة'
    },
    save: 'احفظ الرهان الأخير',
    noBet: ' لم يتم العثور على آخر رهان تم لعبه',
    chip: ' إيصال '
  },
  chat: {
    title: 'دردشة',
    clickForChat: ' انقر للدردشة ',
    input: {
      placeholder: 'أرسل رسالة'
    }
  },
  betHistory: {
    noBet: ' لايوجد رهانك بعد ',
    title: ' تاريخ الرهانات',
    titleUppercase: ' تاريخ الرهانات',
    session: 'جلسة',
    bet: 'رهان',
    totalBet: ' مجموع الرهانات',
    totalGain: ' محجموع الارباح',
    result: 'النتيجة',
    black: 'Black',
    red: 'Red',
    even: 'حتى',
    odd: 'الفردية',
    clear: 'صافي',
    filter: 'منقي',
    status: {
      title: 'الحالة',
      inProgress: ' الرهان قيد المعالجة',
      accepted: 'تم استلام الدفعة.',
      paymentError: 'لم يتم استلام الدفعة',
      rewardInProgress: 'يتم إرسال المكافأة.',
      betClosed: ' لم تفز بالجائزة.',
      rewardSent: 'فزت بالجائزة.',
      rewardError: ' خطأ في إرسال المكافأة ',
      canceled: ' إلغاء '
    },
    date: 'تاريخ',
    detail: {
      title: ' تفاصيل الرهان',
      titleUppercase: 'تفاصيل الرهان',
      link: ' انظر التفاصيل',
      turnBack: 'تراجع'
    },
    room: {
      name: 'غرفة',
      bcroulettetestfrench: 'French Room'
    }
  },
  help: {
    title: 'مساعدة'
  },
  limits: {
    title: ' الحدود والمدفوعات',
    roomName: 'اسم الطاولة',
    bet: 'الرهان',
    betLimit: ' حد الرهان',
    payment: 'الدفع',
    sessionNo: 'رقم الجلسة '
  },
  settings: {
    title: 'إعدادات',
    titleUppercase: 'إعدادات',
    language: ' اختيار اللغة',
    muteChat: ' إخفاء الرسائل من اللاعبين',
    autoVideo: ' وضع الفيديو التلقائي',
    videoQuality: 'إعدادات جودة الفيديو ',
    croupierVolume: 'صوت الموزع',
    gameVolume: ' أصوات اللعبة',
    videoVolume: 'إذاعة الصوت',
    gameSounds: 'أصوات اللعبة',
    warningSounds: 'أصوات تحذيرية',
    voiceIsOpen: 'تشغيل الصوت',
    voiceIsClose: 'الصوت مغلق',
    chatIsOpen: 'تشغيل الدردشة',
    chatIsClose: 'الدردشة مطفئة'
  },
  errors: {
    PURCHASE_DISABLED: ' اللعبة مغلقة مؤقتًا للرهانات.',
    USER_NOT_FOUND: ' لم يتم العثور على المستخدم.',
    BETS_NOT_FOUND: ' لم يتم الغثور على الرهان.',
    USER_LOCKED: 'مستخدم محظور.',
    INSUFFICIENT_FUNDS: 'لا يكفي الرصيد.',
    BALANCE_NOT_ENOUGH: 'لايكفي الرصيد.',
    MAX_STAKE_LIMIT: 'الحد الأقصى للرهان  ',
    BONUS_ERROR: 'لم يتم استخدام المكافأة.',
    USER_SESSION_NOT_FOUND: ' انتهت جلسة المستخدم ، يرجى تحديث الصفحة ',
    BONUS_AMOUNT_ERROR: ' لم يتم استخدام المكافأة.',
    BET_CLOSED: 'الرهانات مغلقة.',
    MAX_BET_COUNT: 'تم الوصول إلى الحد الأقصى للرهان ، ولم يعد بإمكانك المراهنة',
    MAX_BETONCARD_COUNT: 'تم الوصول إلى الحد الأقصى لرهان البطاقة ، ولم يعد بإمكانك المراهنة على البطاقات.',
    BONUS_EXCEED_AMOUNT: 'لا يمكن احتساب المكافأة ، تم إلغاء رهاناتك..',
    BONUS_EXCEED_BET: 'خطأ في استخدام المكافأة ، يتم إلغاء رهاناتك.',
    INVALID_SIGN_USAGE: 'ربما تم قطع اتصالك بالإنترنت مؤقتًا ، جاري إعادة الاتصال ... ',
    INVALID_RESPONSE_ID: 'لم يتم تأكيد رهاناتك.',
    INVALID_BET_STATE: 'الرهانات مغلقة.',
    TOO_MANY_REQUEST: 'لقد قدمت طلبات كثيرة ، يرجى الانتظار ....',
    INVALID_TRANSACTION: ' لم يتم تأكيد عروض التسعير الخاصة بك ، يرجى المحاولة مرة أخرى في الجلسة التالية.',
    TRANSACTION_NOT_APPROVED: ' لم يتم تأكيد عروض التسعير الخاصة بك ، يرجى المحاولة مرة أخرى في الجلسة التالية.',
    UNEXPECTED_ERROR: 'لقد حدث خطأ غير متوقع. الرجاء معاودة المحاولة في وقت لاحق.',
    REARRANGE_TRX_FAILLED: ' على الرغم من أننا حاولنا مرة أخرى ، لم يتم تأكيد رهاناتك.',
    TRANSACTION_NOT_FOUND: ' لقد حدث خطأ غير متوقع. الرجاء معاودة المحاولة في وقت لاحق.',
    TRANSACTION_ERROR: 'لقد حدث خطأ غير متوقع. الرجاء معاودة المحاولة في وقت لاحق.',
    UNEXPECTED_TRANSACTION_ERROR: 'لقد حدث خطأ غير متوقع. الرجاء معاودة المحاولة في وقت لاحق.',
    CONNECTION_DISCONNECTED: 'انتهت فترة الاتصال ، يرجى التحديث ',
    RECONNECT: 'جاري إعادة الاتصال ...',
    RECONNECTING: 'جاري إعادة الاتصال ...',
    REPEATLASTBET_EMPTY: 'لا توجد رهانات في الجلسة السابقة ',
    REPEATLASTBET_SUCCESS: 'تم تكرار رهاناتك من الجلسة السابقة.'
  },
  warnings: {
    sessionExpireWarning: 'جلستك على وشك الانتهاء ، هل ترغب في المتابعة؟',
    rearrangeFailed: 'لم تتم الموافقة على بطاقاتك المرقمة بسبب عدم كفاية الرصيد.'
  },
  modals: {
    continue: 'متابعة',
    randomBet: {
      title: 'رهان عشوائي ',
      text: '{{amount}}{{currency}} سيتم وضع الرهانات على بطاقات مختلفة {{count}} . انت موافق؟'
    },
    refreshPage: 'لقد انتهت جلستك ، يرجى تحديث الصفحة.',
    realityCheckConfirmation: 'جلستك ستنتهي ، هل تريد الاستمرار؟'
  },
  fullScreen: {
    title: 'شاشة كاملة'
  }
}

export default sa
