const uz = {
  gameRules: "O'yin qoidalari",
  balance: 'Balans',
  totalBet: 'JAMI GAROVLAR',
  payments: "To'lovlar",
  numbers: 'Raqamlar',
  returnToLobby: 'Lobbiga qayting',
  close: 'Yopiq',
  loading: 'Yuklanmoqda',
  swiperText: "O'ynash uchun yuqoriga o'ting",
  actions: {
    double: "Garov qo'shing",
    repeat: 'Oxirgi garovni takrorlang ',
    favourite: "Tanlanganlarni ko'rsating",
    rollback: 'Oxirgi garovni qaytaring',
    delete: "Garovlarni o'chiring",
    doBet: 'GAROV TIKING',
    autoPlay: "Avto o'ynash"
  },
  intro: {
    step1: "O'yin ekraniga qayting",
    step2: "Chat uchun o'ngga o'ting",
    step3: "Normal ko'rinishga qayting",
    skip: "Tanishishni o'tkazib yuboring"
  },
  specialBets: {
    color: 'Rangi',
    column: 'Ustun',
    corner: 'Burchak',
    dozen: "O'ntalik",
    half: 'Yarim',
    line: 'Liniya',
    parity: 'Paritet (Tenglik)',
    split: "Bo'lish",
    straightup: 'Yuqorida',
    street: "Ko'cha"
  },
  languages: {
    tr: 'Turkcha',
    en: 'Ingliz tili'
  },
  statics: {
    won: 'SIZ YUTDINGIZ!',
    standard: 'Standart',
    temperature: 'Harorat',
    liveBets: 'Onlayn-garov',
    firstDozen: "1-o'ntalik",
    secondDozen: "2-o'ntalik",
    thirdDozen: "3-o'ntalik",
    firstColumn: '1-ustun',
    secondColumn: '2-ustun',
    thirdColumn: '3-ustun',
    even: 'JUFT',
    odd: 'TOQ',
    lastRound: 'Oxirgi {{round}} raund',
    title: 'Statistika',
    titleUppercase: 'Statistika'
  },
  bet: {
    title: 'Endi garov tikishingiz mumkin!'
  },
  liveBets: {
    live: 'JORIY SESSIYADA{{betCount}} KISHI GAROV TIKDI',
    betItemCount: '{{count}} garov'
  },
  autoGame: {
    title: "AVTOMATIK O'YINLAR",
    start: 'BOSHLANG',
    round: 'Raund',
    noBalance: "Balans yetarli bo'lmaganligi sababli, avtomatik o'yin mavjud emas",
    noBalance2: "Balans yetarli bo'lmaganligi sababli, avtomatik o'yin  to'xtatib turilgan"
  },
  status: {
    open: 'GAROV TIKING',
    lastCall: 'OXIRGI TAKIMLAR',
    playing: 'YANGI SESSIYA KUTILMOQDA',
    finish: 'YANGI SESSIYA KUTILMOQDA',
    betAvailable: 'Endi garov tikishingiz mumkin!',
    betNextAvailable: 'Siz keyingi sessiya uchun garov tikishingiz mumkin',
    bonusAvailable: 'Bonusdan foydalanish mumkin',
    cardAfterBonus: "bonusdan keyingi {{card}} garovi, foydalanish uchun mavjud bo'ladi",
    tooltip1: 'Umumiy balans',
    tooltip2: 'Jami garovlar'
  },
  notification: {
    info: 'Info',
    warning: 'Ogohlantirish',
    error: 'Xatolik',
    success: 'Muvaffaqiyat'
  },
  modal: {
    cancel: 'BEKOR QILISH',
    accept: 'QABUL QILISH',
    okay: 'OKEY'
  },
  rules: [
    {
      title: "O'yin qoidalari",
      content: "<p>Ruletka o'yinining maqsadi, biror  raqamga bir yoki bir nechta pul tikish orqali to'p tushadigan raqamni taxmin qilishdir. Yevropa Ruletidagi g'ildirak, 1-36 va bitta 0 (nol) raqamlarini o'z ichiga oladi.</p><p> Tikish vaqtining oxirida to'p rulet g'ildiragida aylanadi. Oxirida, to'p g'ildirak ichidagi raqamlangan teshiklardan biriga tushadi. Agar sizning garovingiz ushbu raqamni qamrab olsa, siz g'alaba qozonasiz.</p>"
    },
    {
      title: 'Garov Turlari',
      content: " <p>Ruletka stoliga juda ko'p turli xil garov turlarini tikishingiz mumkin. Garovlar, bitta raqamni yoki raqamlarning ma'lum diapazonini qamrab olishi mumkin va har bir garov turi o'zining to'lov koeffitsentiga ega.</p> <p>Maydonidagi yoki ular orasidagi liniyalardagi raqamlangan joylarga tikilgan garovlar ichki garovlar, asosiy raqamlar setkaning ostidagi va yonidagi maxsus joylarga tikilgan garovlar esa, tashqi garovlar deb ataladi.</p> "
    },
    {
      title: 'Ichki Garovlar',
      content: " <ul> <li><strong>To'g'riga</strong> - fishkangizni istalgan bitta raqamga (shu jumladan, nolga) joylashtiring.</li> <li><strong>Bo'lishga Tikish</strong> - fishkangizni vertikal yoki gorizontal, har qanday ikkita raqam orasidagi chiziqqa joylashtiring.</li> <li><strong>Ko'chaga Tikish</strong> - Fishkangizni istalgan raqamlar qatorining oxiriga qo'ying. Street Bet uchta raqamni qamrab oladi.</li> <li><strong>Burchakka Tikish</strong> - fishkangizni to'rtta raqam uchrashadigan burchakka (markaziy chorrahaga) joylashtiring. Barcha to'rtta raqam qoplandi.</li> <li><strong>Chiziqqa Tikish</strong> - fishkangizni ikki qatorning oxiriga, ular orasidagi kesishmaga joylashtiring. Chiziqli garov ikkala qatordagi barcha raqamlarni, jami olti raqamni qamrab oladi.</li> </ul> "
    },
    {
      title: 'Tashqi Garovlar',
      content: " <ul> <li><strong>Ustunga tikish</strong> - fishkangizni ushbu ustundagi barcha 12 ta raqamni qamrab oluvchi ustun oxiridagi \"2 dan 1\" gacha belgilangan bo'shliqlardan biriga joylashtiring. Nol hech qanday ustunga tikish bilan qoplanmaydi.</li> <li><strong>O'nlikka tikish</strong> - quti yonidagi 12 ta raqamni qoplash uchun, fishkangizni \"1-chi 12\", \"2-chi 12\" yoki \"3-12\" deb belgilangan uchta qutidan biriga joylashtiring. </li> <li><strong>Qizil/qora</strong> - 18 ta qizil yoki 18 ta qora raqamlarni qoplash uchun, fishkangizni qizil yoki qora maydonga joylashtiring. Nol, bu garovlar bilan qoplanmaydi.</li> <li><strong>Juft/Toq</strong> - 18 ta juft yoki 18 ta toq sonni qoplash uchun fishkangizni ushbu qutilardan biriga joylashtiring. Nol, bu garovlar bilan qoplanmaydi.</li><li><strong>1-18/19-36</strong> - 18 ta raqamdan iborat birinchi yoki ikkinchi to'plamni qoplash uchun fishkangizni ushbu qutilarning biriga joylashtiring. Nol, bu garovlar bilan qoplanmaydi.</li> </ul> "
    },
    {
      title: "Qo'shni Garovlar",
      content: " <h4>Tiers du Cylindre</h4> <p>Bu garov, 27, 33 va ruletka g'ildiragining nolga qarama-qarshi tomonidagi raqamlar orasidagi raqamlarni o'z ichiga oluvchi jami 12 ta raqamni o'z ichiga oladi. 6 ta fishkalar quyidagi tarzda joylashtiriladi:</p> <ul> <li> 1 fishka 5/8 bo'linishda</li> <li>1 fishka 10/11 bo'linishida</li> <li>1 fishka 13/16 bo'linishida</li> <li>1 fishka 23/24 bo'linishida</li> <li>1 fishka 27/30 bo'linishida</li> <li>1 fishka 33/36 bo'linishida</li> </ul> <h4>Orphelins a Cheval</h4> <p>Bu tikish yuqoridagi voisins du zero va tiers du cylindre garovlari bilan qoplanmagan ruletka g'ildiragining ikkita segmentidagi jami 8 ta raqamni qamrab oladi. 5 ta fishka quyidagicha joylashtiriladi:</p> <ul> <li>1 fishka on 1 (to'g'riga)</li> <li>1 fishka 6/9 bo'linishida</li> <li>1 fishka, 14/17 bo'linishida</li> <li>1 fishka, 17/20 bo'linishida</li> <li>1 fishka, 31/34 bo'linishida</li> </ul> <h4>Voisins du Zero</h4> <p>Uning tikishi, 22, 25 va rulet g'ildiragining nol tomonidagi mavjud raqamlardan iborat jami 17 ta raqamni o'z ichiga oladi. 9 ta chiplar quyidagicha joylashtirilgan:</p> <ul> <li>2 fishka 0/2/3 ko'chasida</li> <li>1 fishka, 4/7 bo'linishida</li> <li>1 fishka, 12/15 bo'linishida</li> <li>1 fishka, 18/21 bo'linishida</li> <li>1 fishka 19/22 bo'linishida</li> <li>2 fishka, 25/26/28/29 burchaklarida</li> <li>1 fishka, 32/35 bo'linishida</li> </ul> <h4>Jeu Zero</h4> <p>Ushbu garov, ruletka g'ildiragidagi nol va unga yaqin joylashgan 6 raqamlarni o'z ichiga oladi: 12, 35, 3, 26, 0, 32 va 15. 4 fishkalar quyidagicha joylashtiriladi:</p> <ul> <li>1 fishka 0/3 bo'linishida</li> <li>1 fishka 12/15 bo'linishida</li> <li>1 fishka, 26 (to'g'ri tepada)</li> <li>1 fishka, 32/35 bo'linishida</li> </ul> <p>Qo'shni garov, Ruletka g'ildiragidagi ma'lum bir raqam va unga yaqin joylashgan boshqa raqamlarni qamrab oladi. Qo'shni garovni tikish uchun, poyga yo'lidagi ma'lum bir raqamni bosing. Fishka, tanlangan raqam va uning o'ng va chap tomonida joylashgan raqamlarga joylashtiriladi. Tanlangan raqamning o'ng va chap tomonidagi qo'shnilar to'plamini oshirish yoki kamaytirish uchun yumaloq \"-\" yoki \"+\" tugmachasini bosing.</p> "
    },
    {
      title: 'Maxsus Garovlar',
      content: '\n        <p>Tanlangan garovlardagi ikkinchi ilova ostida siz Finale en plein va Finale chevalga garovlarini oson joylashtishingiz mumkin.</p>\n        <h4>Finale en Plein</h4>\n        <ul>\n          <li>Finale en plein 4 ta fishkaga 0 garovi, har biri 1 fishkadan iborat 0+10+20+30 ni qoplaydi  </li>\n          <li>Finale en plein 4-fishkaga 1 garovi, har biri 1 fishkadan iborat 1+11+21+31 ni qoplaydi</li>\n          <li>Finale en plein 4 fishkaga 2 garovi, har biri 1 fishkadan iborat 2+12+22+32 ni qoplaydi</li>\n          <li>Finale en plein 4 fishkaga 3 garovi, har biri 1 fishkadan iborat 3+13+23+33 ni qoplaydi</li>\n          <li>Finale en plein 4 fishkaga 4 garovi, har biri 1 fishkadan iborat 4+14+24+34 ni qoplaydi</li>\n          <li>Finale en plein 4 fishkaga 5 garovi, har biri 1 fishkadan iborat 5+15+25+35 ni qoplaydi</li>\n          <li>Finale en plein 4 fishkaga 6 garovi, har biri 1 fishkadan iborat 6+16+26+36 ni qoplaydi</li>\n          <li>Finale en plein 3 fishkaga 7- garovi har biri 1 fishkadan iborat 7+17+27 ni qoplaydi</li>\n          <li>Finale en plein 3 fishkaga 8- garovi har biri 1 fishkadan iborat 8+18+28 ni qoplaydi</li>\n          <li>Finale en plein 3 fishkaga 9 - garov, har biri 1 fishkalik 9+19+29 ni qoplaydi</li>\n        </ul>\n        <h4>Finale a Cheval</h4>\n        <ul>\n          <li>Finale a cheval 4 fishkaga 0/3 garovi, har biri 1 fishkalik 0/3+10/13+20/23+30/33 ni qoplaydi</li>\n          <li>Finale a cheval– 4-fishkaga 1/4 garovi, har biri 1 fishkalik 1/4+11/14+21/24+31/34 ni qoplaydi</li>\n          <li>Finale a cheval 4-fishkaga 2/5 garovi, har biri 1 fishkalik 2/5+12/15+22/25+32/35 ni qoplaydi</li>\n          <li>Finale a cheval 4 fishkaga 3/6 garovi, har bitta fishkalik 3/6+13/16+23/26+33/36 ni qoplaydip</li>\n          <li>Finale a cheval 4 fishkaga 4/7 garovi, har bitta fishkalik 4/7+14/17+24/27+34 ni qoplaydip</li>\n          <li>Finale a cheval 4 fishkaga 5/8 garovi, har bitta fishkalik 5/8+15/18+25/28+35 ni qoplaydip</li>\n          <li>Finale a cheval 4 fishkaga 6/9 garovi, har bitta fishkalik 6/9+16/19+26/29+36 ni qoplaydip</li>\n          <li>Finale a cheval 3 fishkaga 7/10 garovi, har bitta fishkalik 7/10+17/20+27/30 ni qoplaydip</li>\n          <li>Finale a cheval 3 fishkaga 8/11 garovi, har bitta fishkalik 8/11+18/21+28/31 ni qoplaydip</li>\n          <li>Finale a cheval 3 fishkaga 9/12 garovi, har bitta fishkalik 9/12+19/22+29/32 ni qoplaydip</li>\n        <ul>\n      '
    },
    {
      title: "To'lov",
      content: " <p>Sizning to'lovingiz, siz tikkan garov turiga bog'liq bo'ladi</p> <h4>Ichki Garovlar</h4> <div class=\"table--v2\"> <table> <thead> <tr> <th>Garov Turi</th> <th>To'lov</th> </tr> </thead> <tbody> <tr> <td>To'g'ri</td> <td>35:1</td> </tr> <tr> <td>Bo'linish</td> <td>17:1</td> </tr> <tr> <td>Ko'chat</td> <td>11:1</td> </tr> <tr> <td>Burchak</td> <td>8:1</td> </tr> <tr> <td>Liniya</td> <td>5:1</td> </tr> </tbody> </table> </div> <h4>Tashqi Garovlar</h4> <div class=\"table--v2\"> <table> <thead> <tr> <th>Garov Turi</th> <th>To'lov</th> </tr> </thead> <tbody> <tr> <td>ustun</td> <td>2:1</td> </tr> <tr> <td>O'ntalik</td> <td>2:1</td> </tr> <tr> <td>Qizil/Qora</td> <td>1:1</td> </tr> <tr> <td>Juft/Toq</td> <td>1:1</td> </tr> <tr> <td>1-18/19-36</td> <td>1:1</td> </tr> </tbody> </table> </div> <p>* Nosozlik barcha o'yin va to'lovlarni bekor qiladi.</p> "
    },
    {
      title: "Uzib qo'yish siyosati",
      content: "Agar siz o'yin raundidan uzilgan bo'lsangiz, har qanday qo'yilgan garovlar o'z kuchini saqlab qoladi va siz yo'qligingizda hisob-kitob qilinadi. Qayta ulangandan so'ng, siz tikish natijalarini Tarix oynasida ko'rishingiz mumkin."
    },
    {
      title: 'Xatoliklarni bartaraf qilish',
      content: "Agar o'yinda, tizimda yoki o'yin jarayonida xatolik bo'lsa, studiya menejeri xabardor qilinayotganda o'yin raundi vaqtincha to'xtatiladi. Siz va boshqa oʻyinchilar muammo tekshirilayotgani haqida chat orqali xabardor qilinadi. Agar menejer xatoni darhol hal qila olsa, o'yin raundi odatdagidek davom etadi. Agar zudlik bilan hal qilishning iloji bo'lmasa, o'yin raundi bekor qilinadi va dastlabki garovlar o'yin raundida ishtirok etgan barcha o'yinchilarga qaytariladi."
    }
  ],
  bonus: {
    activeListTitle: "Bonuslar ro'yxati",
    wallet: 'Bonus Hamyoni',
    walletDesc: 'Jami Bonus Hamyoni mavjud',
    useAuto: 'Avtomatik tarzda foydalaning',
    dailyBonus: 'Kunlik Bonus',
    welcomeBonus: 'Xush kelibsiz Bonusi',
    eachXBet: "Har bir garov uchun {{count}} sovg'a",
    eachXBetDesc: "{{count}} garovdan so'ng sovg'a garovi bo'ladi",
    eachXBetWarning: 'Siz kartangizni garov tikmasdan ishlatishingiz mumkin',
    eachXBetRemain: 'kartalarning {{count}} tasi sotib olingan.',
    turnoverRemain: "{{remain}} tsiklni tugallash uchun,<i class=\"fa fa-{{currency}}\"></i> hali ham hamyoningizdan o'ynang.",
    standingEarnings: 'Tsikllar kutilmoqda',
    bonusAvailable: 'Siz bonusingizdan foydalanishingiz mumkin.',
    turnoverReward: 'Tsikl yutdi',
    usedAmount: 'Yutilgan miqdor',
    autoUseConfirmations: {
      bonus: 'Ushbu bonus sizning keyingi garovlaringiz uchun avtomatik tarzda ishlatilmaydi, tasdiqlaysizmi?',
      wallet: 'Ushbu bonus hamyoni sizning keyingi garovlaringiz uchun avtomatik tarzda ishlatilmaydi, tasdiqlaysizmi?'
    },
    rules: {
      menuTitle: 'Bonus qoidalari',
      general: {
        title: 'Umumiy Qoidalar',
        content: "<p>Agar hisob qaydi yoki garovlar bilan aktsiyalar va yutuq shartlarini suiiste'mol qilishga qaratilgan harakatlar aniqlansa, \"LiveGames\" rahbariyati bonus va yutuqlarni bekor qilish yoki bekor qilmaslik to'g'risida qaror qabul qilish vakolatiga ega.\". ><p>LiveGames; hech qanday sabab ko‘rsatmasdan, aktsiyalar bilan bog‘liq qoidalarni o‘zgartirish va yangilash huquqini o‘zida saqlab qoladi.</p><p>Quyidagi holatlar aniqlanganda bonuslar hisoblarga o'tkazilmaydi:<ul><li> Bir xil nomdagi hisob qaydlari</li><li>Bir oilaga/uyga tegishli hisob qaydlari</li><li>Bir IP bilan hisob qaydlari</li><li>Bir xil shaxsiy maʼlumotlarni (elektron pochta, telefon raqami, kredit karta, toʻlov usullari) oʻz ichiga olgan hisob qaydlari </li><li>Bir kompyuterdan foydalaniladigan hisob qaydlari </li> <li> Bitta shaxsga tegishli bir nechta hisob qaydlari</li><li>Aldovga urinishning har qanday tasdiqlanishi</li ><li>Bonus shart va qoidalari va umumiy bonus qoidalarining buzilishi</li></ul></p><p></p>LiveGames, kerak bo'lganda, shaxsni tasdiqlovchi hujjat, yashash joyini tasdiqlovchi hujjat va boshqa hujjatlarni talab qilish huquqiga ega. Agar ushbu hujjatlar foydalanuvchi tomonidan taqdim etilmasa, o'yinchining yutuqlari bloklanishi mumkin. Agar o'yinchining bir nechta hisob qaydlariga egaligi haqida dalillar yoki shubhalar mavjud bo'lsa, bonus hisoblanmaydi. Bir marta bonus kiritilgandan so'ng, xavfsizlik bo'limi tomonidan bog'liq hisob qaydlari aniqlansa, hisob qaydi cheksiz muddatga yopiladi va butun hisob balansi muzlatiladi.</p><p>Bonuslar hech qanday uyushgan tashkilotga aloqasi bo'lmagan, bonuslarni yig'ish tarmog'i  bilan bog'liq bo'lmagan bitta hisob qaydiga ega haqiqiy foydalanuvchilar uchun mo'ljallangan.</p><p>Aktsiyalardan foydalanmoqchi bo'lgan foydalanuvchilar amaldagi shartlar va shartlarni o'qib chiqqanliklarini va qabul qilganliklarini tan olgan hisoblanadilar.</p>"
      },
      welcome: {
        title: 'Xush kelibsiz bonusidan foydalanish qoidalari',
        content: "<ul><li>\"Xush kelibsiz bonusi\", o'yinlarda birinchi marta ishtirok etgan har bir foydalanuvchi uchun avtomatik ravishda yuklab olinadi.</li><li> Agar garov miqdori xona qoidalariga ko'ra minimal garov miqdoridan past bo'lsa, qolgan miqdor haqiqiy balansdan yechib olinadi. </li><li>Bonus bilan olingan yutuqdan foydalanish uchun siz haqiqiy balansdan yutgan miqdorni tikishingiz{{multiply}} kerak.</li><li> “Xush kelibsiz bonusi” tsikli, {{day}} kun ichida yakunlanishi kerak. Ushbu davr mobaynida garov tikish talablariga javob bermaydigan bonus yutuqlari, tizim tomonidan bekor qilinadi.</li><li> Xush kelibsiz bonusi bilan yutilgan sovrinlarni haqiqiy pulga aylantirib bo'lmaydi. Tsikl tugagandan so'ng, siz bonus hamyonida to'plangan miqdorni haqiqiy pul sifatida ishlatishingiz mumkin.</li><li> Bonus hamyonidan pul sarflash orqali olingan mukofotlar uchun tikish talablari yo'q.</li><li> Ushbu aktsiya 01.08.2019 dan amal qiladi.</li><li> \"Umumiy bonus qoidalari\", barcha bonuslarga taalluqlidir.</li></ul>"
      },
      eachxsession: {
        title: 'Har bir {{each}} Garov%{{percent}} Bonus',
        content: "<ul><li>Sizning har bir<strong> {{each}}</strong>%<strong>{{percent}}</strong> garovingiz uchun bonus darhol beriladi.</li><li> Bu bonusni Bingo oʻyinida maxsus sovrinlarni yutib olish uchun ishlatib boʻlmaydi (birinchi beshta karta birinchi qator, birinchi 15 ta karta birinchi qator va va va Bingo mukofotlari).</li><li> Ushbu bonus orqali olingan sovrinlar uchun tikish talablari yo'q. </li><li>Agar olingan bonuslar joriy sessiya davomida ishlatilmasa, ular keyingi sessiyaga o'tkazilmaydi.</li><li> Ushbu aktsiya 01.08.2019 dan amal qiladi.</li><li> \"Umumiy bonus qoidalari\",  barcha bonuslarga taalluqlidir.</li></ul>"
      },
      eachxbet: {
        title: 'Har bir {{each}} Garov%{{percent}} Bonus',
        content: "<ul><li>Sizning har bir<strong> {{each}}</strong>%<strong>{{percent}}</strong> garovingiz uchun bonus darhol beriladi.</li><li> Bu bonusni Bingo oʻyinida maxsus sovrinlarni yutib olish uchun ishlatib boʻlmaydi (birinchi beshta karta birinchi qator, birinchi 15 ta karta birinchi qator va va va Bingo mukofotlari).</li><li> Ushbu bonus orqali olingan sovrinlar uchun tikish talablari yo'q. </li><li>Agar olingan bonuslar joriy sessiya davomida ishlatilmasa, ular keyingi sessiyaga o'tkazilmaydi.</li><li> Ushbu aktsiya 01.08.2019 dan amal qiladi.</li><li> \"Umumiy bonus qoidalari\",  barcha bonuslarga taalluqlidir.</li></ul>"
      }
    }
  },
  statistics: {
    title: 'Statistika',
    menuTitle: 'Statistika',
    tab1: 'Standart',
    tab2: 'Harorat',
    tab3: 'Jonli tikish',
    tab4: 'Zonalar',
    heat: 'Issiqlik'
  },
  favouriteBets: {
    title: 'Tanlangan garovlar',
    titleUppercase: 'TANLANGAN GAROVLAR',
    special: {
      title: 'Maxsus garovlar',
      finaleEnPlein: 'Finale En Plein',
      finalesACheval: 'Finales A Cheval',
      fullBets: "To'liq garovlar"
    },
    save: 'OXIRGI GAROVNI SAQLANG',
    noBet: "Oxirgi o'ynalgan garov topilmadi",
    chip: "O'tish (siljish)"
  },
  chat: {
    title: 'Chat',
    clickForChat: 'Chat uchun bosing',
    input: {
      placeholder: "Xabar jo'nating"
    }
  },
  betHistory: {
    noBet: "Hali garov yo'q ",
    title: 'Tikishlar tarixi',
    titleUppercase: 'Tikishlar tarixi',
    session: 'Sessiya',
    bet: 'Garov',
    totalBet: 'Jami garovlar',
    totalGain: 'Jami yutuqlar',
    result: 'Natija',
    black: 'Qora',
    red: 'Qizil',
    even: 'Hatto',
    odd: 'G\'alati',
    clear: 'Toza',
    filter: 'Filtr',
    status: {
      title: 'Holati',
      inProgress: 'Garov amalga oshirilmoqda',
      accepted: "To'lov qabul qilindi",
      paymentError: "To'lov qabul qilinmadi.",
      rewardInProgress: "Mukofot jo'natildi.",
      betClosed: 'Mukofot yutib olinmadi.',
      rewardSent: 'Mukofot yutib olindi.',
      rewardError: "Mukofotni jo'natishdagi xatolik",
      canceled: 'Bekor qilish'
    },
    date: 'Sana',
    detail: {
      title: 'GAROV TAFSILOTLARI',
      titleUppercase: 'BET TAFSIYASI',
      link: "Tafsilotlarni ko'rsatish",
      turnBack: 'Orqaga buriling'
    },
    room: {
      name: 'Xona',
      bcroulettetestfrench: 'Frantsuz xonasi'
    }
  },
  help: {
    title: 'Yordam'
  },
  limits: {
    title: "Cheklov va to'lovlar",
    roomName: 'Xona nomi',
    bet: 'Garov',
    betLimit: 'Garov chegarasi',
    payment: "To'lov",
    sessionNo: 'Sessiya raqami'
  },
  settings: {
    title: 'Sozlamalar',
    titleUppercase: 'Sozlamalar',
    language: 'Tilni tanlash',
    muteChat: "O'yinchilardan xabarlarni yashiring",
    autoVideo: 'Avto-video rejimi',
    videoQuality: 'Video sifati sozlamalari',
    croupierVolume: 'Krupyening ovozi',
    gameVolume: "O'yin tovushlari",
    videoVolume: 'Translyatsiya Ovozi',
    gameSounds: "O'yin Tovushlari",
    warningSounds: 'Ogohlantirish Ovozlari',
    voiceIsOpen: 'Ovoz yoqilgan',
    voiceIsClose: 'Ovozni oʻchirish',
    chatIsOpen: 'Chat yoqilgan',
    chatIsClose: 'Chat o\'chirilgan'
  },
  errors: {
    PURCHASE_DISABLED: "O'yin, garovlar uchun vaqtinchalik yopildi.",
    USER_NOT_FOUND: 'Foydalanuvchi topilmadi.',
    BETS_NOT_FOUND: 'Garovlar topilmadi.',
    USER_LOCKED: 'Bloklangan foydalanuvchi.',
    INSUFFICIENT_FUNDS: "Yetarli bo'lmagan balans",
    BALANCE_NOT_ENOUGH: "Yetarli bo'lmagan balans",
    MAX_STAKE_LIMIT: 'Maks. garov chegarasi!',
    BONUS_ERROR: 'Bonusdan foydalanilmadi.',
    USER_SESSION_NOT_FOUND: 'Foydalanuvchining sessiyasi tugadi, iltimos sahifani yangilang.',
    BONUS_AMOUNT_ERROR: 'Bonusdan foydalanilmadi.',
    BET_CLOSED: 'Garov yopildi',
    MAX_BET_COUNT: 'Garov tikishning maksimal chegarasiga yetildi, endi siz boshqa garov tika olmaysiz.',
    MAX_BETONCARD_COUNT: 'Kartalarga tikishning maksimal chegarasiga yetildi, endi siz kartalarga garov tikishingiz mumkin emas.',
    BONUS_EXCEED_AMOUNT: "Bonusni hisoblab bo'lmaydi, sizning garovlaringiz bekor qilindi.",
    BONUS_EXCEED_BET: 'Bonusdan foydalanishdagi xatolik,sizning garovlaringiz bekor qilindi.',
    INVALID_SIGN_USAGE: 'Internetga ulanishingiz vaqtincha uzilib qolishi mumkin, qayta ulang...',
    INVALID_RESPONSE_ID: 'Sizning garovlaringiz tasdiqlanmadi.',
    INVALID_BET_STATE: 'Garov yopildi',
    TOO_MANY_REQUEST: 'Siz juda koʻp soʻrovlar qildingiz, iltimos kuting...',
    INVALID_TRANSACTION: "Sizning garovlaringiz tasdiqlanmadi, iltimos,keyingi sessiyada yana urinib ko'ring.",
    TRANSACTION_NOT_APPROVED: "Sizning garovlaringiz tasdiqlanmadi, iltimos,keyingi sessiyada yana urinib ko'ring.",
    UNEXPECTED_ERROR: "Kutilmagan xatolik yuz berdi. Iltimos, keyinroq yana urinib ko'ring.",
    REARRANGE_TRX_FAILLED: 'Biz yana urinishimizga qaramasdan sizning garovingiz tasdiqlanmadi.',
    TRANSACTION_NOT_FOUND: "Kutilmagan xatolik yuz berdi. Iltimos, keyinroq yana urinib ko'ring.",
    TRANSACTION_ERROR: "Kutilmagan xatolik yuz berdi. Iltimos, keyinroq yana urinib ko'ring.",
    UNEXPECTED_TRANSACTION_ERROR: "Kutilmagan xatolik yuz berdi. Iltimos, keyinroq yana urinib ko'ring.",
    CONNECTION_DISCONNECTED: 'Ulanish davri tugadi, iltimos yangilang.',
    RECONNECT: 'Qaytadan ulash',
    RECONNECTING: 'Qaytadan ulash',
    REPEATLASTBET_EMPTY: "Oldingi sessiyada garovlar yo'q.",
    REPEATLASTBET_SUCCESS: 'Sizning oldingi sessiyadagi garovlaringiz takrorlandi.'
  },
  warnings: {
    sessionExpireWarning: 'Sizning sessiyangiz tugamoqda, uni davom ettirishni xohlaysizmi?',
    rearrangeFailed: "Sizning raqamlangan kartalaringiz, balans yetarli bo'lmaganligi sababli tasdiqlanmadi.",
    broadcastFailed: 'Iltimos, Layv translyatsiyasini tomosha qilish uchun, <strong>PLAY</strong> tugmasini bosing'
  },
  modals: {
    continue: 'Davom etish',
    randomBet: {
      title: 'Tasodifiy garov',
      text: '{{amount}}{{currency}} garovlar, boshqa {{count}} kartalarga joylashtiriladi. Tasdiqlaysizmi?'
    },
    refreshPage: 'Sizning sessiyangiz tugadi, iltimos sahifani yangilang.',
    realityCheckConfirmation: 'Sizning sessiyangiz tugadi, siz uni davom ettirmoqchimisiz?'
  },
  fullScreen: {
    title: 'To\'liq ekran'
  }
}

export default uz
