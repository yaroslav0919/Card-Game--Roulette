const ru = {
  gameRules: 'ПРАВИЛА ИГРЫ',
  balance: 'БАЛАНС',
  totalBet: 'ТОТАЛ СТАВОК',
  payments: 'Выплаты',
  numbers: 'Числа',
  returnToLobby: 'Вернуться в лобби',
  close: 'Закрыть',
  loading: 'ЗАГРУЗКА',
  swiperText: 'Проведите пальцем вверх для игры',
  actions: {
    double: 'Добавить ставки',
    repeat: 'Повторить последнюю ставку',
    favourite: 'Показать избранные',
    rollback: 'Вернуть последнюю ставку',
    delete: 'Удалить ставки',
    doBet: 'СДЕЛАТЬ СТАВКУ',
    autoPlay: 'Автоигра'
  },
  intro: {
    step1: 'Вернуться на экран игры.',
    step2: 'Проведите пальцем вправо для чата.',
    step3: 'Вернуться к обычному режиму просмотра.',
    skip: 'Пропустить введение'
  },
  specialBets: {
    color: 'Цвет',
    column: 'Колонки',
    corner: 'Угол',
    dozen: 'Дюжина',
    half: 'Половина',
    line: 'Линия',
    parity: 'Чётность',
    split: 'Сплит',
    straightup: 'Прямая ставка',
    street: 'Стрит'
  },
  languages: {
    tr: 'Турецкий',
    en: 'Английский'
  },
  statics: {
    won: 'ВЫ ВЫИГРАЛИ!',
    standard: 'Стандартные',
    temperature: 'Жаркие',
    liveBets: 'Онлайн ставки',
    firstDozen: '1-я ДЮЖИНА',
    secondDozen: '2-я ДЮЖИНА',
    thirdDozen: '3-я ДЮЖИНА',
    firstColumn: '1-я КОЛОНКА',
    secondColumn: '2-я КОЛОНКА',
    thirdColumn: '3-я КОЛОНКА',
    even: 'Чётное',
    odd: 'Нечётное',
    lastRound: 'Последний {{round}} раунд',
    title: 'СТАТИСТИКА',
    titleUppercase: 'СТАТИСТИКА'
  },
  bet: {
    title: 'Вы можете сделать ставку сейчас!'
  },
  liveBets: {
    live: 'В ТЕКУЩЕЙ СЕССИИ {{betCount}} ЧЕЛОВЕК СДЕЛАЛИ СТАВКИ...',
    betItemCount: '{{count}} ставок'
  },
  autoGame: {
    title: 'АВТОМАТИЧЕСКИЕ ИГРЫ',
    start: 'НАЧАТЬ',
    round: 'Раунд',
    noBalance: 'Автоматическая игра невозможна из-за недостаточного баланса',
    noBalance2: 'Автоматическая игра приостановлена из-за отсутствия баланса'
  },
  status: {
    open: 'СДЕЛАТЬ СТАВКУ',
    lastCall: 'ПОСЛЕДНИЕ СТАВКИ',
    playing: 'ОЖИДАЙТЕ НОВУЮ СЕССИЮ',
    finish: 'ОЖИДАЙТЕ НОВУЮ СЕССИЮ',
    betAvailable: 'Вы можете сделать ставку сейчас',
    betNextAvailable: 'Вы можете сделать ставку на следующую сессию',
    bonusAvailable: 'Бонус доступен для использования',
    cardAfterBonus: '{{card}} ставка по бонусу будет доступна для использования',
    tooltip1: 'Общий баланс',
    tooltip2: 'Тотал ставок'
  },
  notification: {
    info: 'ИНФО',
    warning: 'ВНИМАНИЕ',
    error: 'ОШИБКА',
    success: 'ГОТОВО'
  },
  modal: {
    cancel: 'ОТМЕНИТЬ',
    accept: 'ПРИНЯТЬ',
    okay: 'ОКЕЙ'
  },
  rules: [
    {
      title: 'Правила игры',
      content: '<p>Цель игры в Рулетку - предсказать число, на которое упадет шарик, сделав одну или несколько ставок, покрывающих это конкретное число. Колесо в европейской рулетке включает номера 1-36 плюс один 0 (зеро).</p><p>По истечении времени ставок шарик вращается в колесе Рулетки. В итоге шарик попадает в одну из пронумерованных луз колеса. Вы выигрываете, если сделали ставку, покрывающую данное конкретное число.</p>'
    },
    {
      title: 'Типы ставок',
      content: `
        <p>Вы можете разместить множество различных видов ставок на столе Рулетки. Ставки могут охватывать одно число или определенный диапазон чисел, и каждый вид ставок имеет свой коэффициент выплат.</p>
        <p>Ставки, сделанные на пронумерованные места в зоне ставок или на линии между ними, называются Внутренними ставками, а ставки, сделанные на специальные поля ниже и сбоку от основной таблицы чисел, называются Внешними ставками.</p>
      `
    },
    {
      title: 'Внутренние ставки',
      content: `
        <ul>
          <li><strong>Прямая ставка</strong> - поместите свою фишку непосредственно на любое отдельное число (включая зеро).</li>
          <li><strong>Сплит</strong> - поместите свою фишку на линию между любыми двумя числами, по вертикали или горизонтали.</li>
          <li><strong>Стрит</strong> - поместите свою фишку в конец любого ряда чисел. Ставка Cтрит покрывает три числа.</li>
          <li><strong>Угол</strong> - поместите свою фишку в угол (центральное пересечение), где пересекаются четыре числа. Все четыре числа покрыты.</li>
          <li><strong>Линия</strong> - поместите свою фишку в конце двух рядов на месте их пересечения. Ставка на линию охватывает все числа в обоих рядах, всего шесть чисел.</li>
        </ul>
      `
    },
    {
      title: 'Внешние ставки',
      content: `
        <ul>
          <li><strong>Колонка</strong> - поместите свою фишку в одну из ячеек с пометкой "2 к 1" в конце колонки, которая покрывает все 12 чисел в этой колонке. Зеро не покрывается ни одной ставкой на колонку.</li>
          <li><strong>Дюжина</strong> - поместите свою фишку в одно из трех полей, обозначенных "1-е 12", "2-е 12" или "3-и 12", чтобы покрыть 12 чисел, расположенных напротив поля.</li>
          <li><strong>Красное/Чёрное</strong> - поместите свою фишку в поле "Красное" или "Черное", чтобы покрыть 18 красных или 18 чёрных чисел. Зеро не покрывается этими ставками.</li>
          <li><strong>Чётное/Нечётное</strong> - поместите свою фишку в одно из этих полей, чтобы покрыть 18 чётных или 18 нечётных чисел. Зеро не покрывается этими ставками.</li>
          <li><strong>1-18/19-36</strong> - поместите свою фишку в любое из этих полей, чтобы покрыть первую или вторую группу из 18 чисел. Зеро не покрывается этими ставками.</li>
        </ul>
      `
    },
    {
      title: 'Ставки на соседей',
      content: `
        <h4>Tiers du Cylindre</h4>
        <p>Эта ставка покрывает в общей сложности 12 чисел, которые включают 27, 33 и числа, расположенные между ними на стороне колеса Рулетки, противоположной зеро. 6 фишек размещаются следующим образом:</p>
        <ul>
          <li>1 фишка на сплит 5/8</li>
          <li>1 фишка на сплит 10/11</li>
          <li>1 фишка на сплит 13/16</li>
          <li>1 фишка на сплит 23/24</li>
          <li>1 фишка на сплит 27/30</li>
          <li>1 фишка на сплит 33/36</li>
        </ul>
        <h4>Orphelins a Cheval</h4>
        <p> Эта ставка покрывает в общей сложности 8 чисел на двух сегментах колеса Рулетки, не охваченных ставками voisins du zero и tiers du cylindre выше. 5 фишек размещаются следующим образом:</p>
        <ul>
          <li>1 фишка непосредственно на число 1</li>
          <li>1 фишка на сплит 6/9</li>
          <li>1 фишка на сплит 14/17</li>
          <li>1 фишка на сплит 17/20</li>
          <li>1 фишка на сплит 31/34</li>
        </ul>
        <h4>Voisins du Zero</h4>
        <p>Эта ставка покрывает в общей сложности 17 чисел, которые включают 22, 25 и числа, находящиеся между ними на той стороне колеса Рулетки, где находится зеро. 9 фишек размещаются следующим образом:</p>
        <ul>
          <li>2 фишки на стрит 0/2/3</li>
          <li>1 фишка на сплит 4/7</li>
          <li>1 фишка на сплит 12/15</li>
          <li>1 фишка на сплит 18/21</li>
          <li>1 фишка на сплит 19/22</li>
          <li>2 фишки на угол 25/26/28/29</li>
          <li>1 фишка на сплит 32/35</li>
        </ul>
        <h4>Jeu Zero</h4>
        <p>Эта ставка покрывает зеро и 6 чисел, расположенных в непосредственной близости от зеро на колесе Рулетки: 12, 35, 3, 26, 0, 32 и 15. 4 фишки размещаются следующим образом:</p>
        <ul>
          <li>1 фишка на сплит 0/3</li>
          <li>1 фишка на сплит 12/15</li>
          <li>1 фишка непосредственно на число 26</li>
          <li>1 фишка на сплит 32/35</li>
        </ul>
        <p>Ставка на соседей покрывает определенное число, а также другие числа, расположенные в непосредственной близости от него на колесе Рулетки. Чтобы сделать ставку на соседей, нажмите на определенное число на поле. Фишка будет размещена на выбранное число и на соседние с ним числа справа и слева. Нажмите на круглую кнопку "-" или "+", чтобы увеличить или уменьшить количество соседних чисел справа и слева от выбранного числа.</p>
      `
    },
    {
      title: 'Специальные ставки',
      content: `
        <p>На второй вкладке в разделе "Избранные ставки" вы можете проще делать ставки на Finale en plein и Finale a cheval.</p>
        <h4>Финальные ставки на одно число (Finale en Plein)</h4>
        <ul>
          <li>Финал на 0 – ставка 4 фишками покрывает 0+10+20+30, 1 фишка на каждом</li>
          <li>Финал на 1 – ставка 4 фишками покрывает 1+11+21+31, 1 фишка на каждом</li>
          <li> Финал на 2 – ставка 4 фишками покрывает 2+12+22+32, 1 фишка на каждом</li>
          <li>Финал на 3 – ставка 4 фишками покрывает 3+13+23+33, 1 фишка на каждом</li>
          <li>Финал на 4 – ставка 4 фишками покрывает 4+14+24+34, 1 фишка на каждом</li>
          <li>Финал на 5 – ставка 4 фишками покрывает 5+15+25+35, 1 фишка на каждом</li>
          <li>Финал на 6 – ставка 4 фишками покрывает 6+16+26+36, 1 фишка на каждом</li>
          <li>Финал на 7 – ставка 3 фишками покрывает 7+17+27, 1 фишка на каждом</li>
          <li>Финал на 8 – ставка 3 фишками покрывает 8+18+28, 1 фишка на каждом</li>
          <li>Финал на 9 – ставка 3 фишками покрывает 9+19+29, 1 фишка на каждом</li>
        </ul>
        <h4>Финальные ставки на пару чисел (Finale a Cheval)</h4>
        <ul>
          <li>Финал на пару 0/3 – ставка 4 фишками покрывает 0/3+10/13+20/23+30/33, 1 фишка на каждом</li>
          <li>Финал на пару 1/4 – ставка 4 фишками покрывает 1/4+11/14+21/24+31/34, 1 фишка на каждом</li>
          <li>Финал на пару 2/5 – ставка 4 фишками покрывает 2/5+12/15+22/25+32/35, 1 фишка на каждом</li>
          <li>Финал на пару 3/6 – ставка 4 фишками покрывает 3/6+13/16+23/26+33/36, 1 фишка на каждом</li>
          <li>Финал на пару 4/7 – ставка 4 фишками покрывает 4/7+14/17+24/27+34, 1 фишка на каждом</li>
          <li>Финал на пару 5/8 – ставка 4 фишками покрывает 5/8+15/18+25/28+35, 1 фишка на каждом</li>
          <li>Финал на пару 6/9 – ставка 4 фишками покрывает 6/9+16/19+26/29+36, 1 фишка на каждом</li>
          <li>Финал на пару 7/10 – ставка 3 фишками покрывает 7/10+17/20+27/30, 1 фишка на каждом</li>
          <li>Финал на пару 8/11 – ставка 3 фишками покрывает 8/11+18/21+28/31, 1 фишка на каждом</li>
          <li>Финал на пару 9/12 – ставка 3 фишками покрывает 9/12+19/22+29/32, 1 фишка на каждом</li>
        <ul>
      `
    },
    {
      title: 'Выплата',
      content: `
        <p>Ваша выплата зависит от типа сделанной ставки.</p>
        <h4>Внутренние ставки</h4>
        <div class="table--v2">
          <table>
            <thead>
              <tr>
                <th>Тип ставки</th>
                <th>Выплата</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Прямая ставка</td>
                <td>35:1</td>
              </tr>
              <tr>
                <td>Сплит</td>
                <td>17:1</td>
              </tr>
              <tr>
                <td>Стрит</td>
                <td>11:1</td>
              </tr>
              <tr>
                <td>Угол</td>
                <td>8:1</td>
              </tr>
              <tr>
                <td>Линия</td>
                <td>5:1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Внешние ставки</h4>
        <div class="table--v2">
          <table>
            <thead>
              <tr>
                <th>Тип ставки</th>
                <th>Выплата</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Колонка</td>
                <td>2:1</td>
              </tr>
              <tr>
                <td>Дюжина</td>
                <td>2:1</td>
              </tr>
              <tr>
                <td>Красное/Чёрное</td>
                <td>1:1</td>
              </tr>
              <tr>
                <td>Чётное/Нечётное</td>
                <td>1:1</td>
              </tr>
              <tr>
                <td>1-18/19-36</td>
                <td>1:1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>* В случае сбоя все выплаты и игры аннулируются.</p>
      `
    },
    {
      title: 'Политика отключений',
      content: 'Если вы отключились от раунда игры, все сделанные ставки остаются в силе и рассчитываются в ваше отсутствие. При повторном подключении вы можете просмотреть исходы ставок в окне История.'
    },
    {
      title: 'Обработка ошибок',
      content: 'Если в игре, системе или игровом процессе произошла ошибка, игровой раунд будет временно приостановлен пока менеджер студии будет проинформирован. Вы и другие игроки будут уведомлены в Чате о том, что проблема изучается. Если менеджер сможет немедленно устранить ошибку, раунд игры продолжится в обычном режиме. Если немедленное решение невозможно, раунд игры будет отменен, а первоначальные ставки будут возвращены всем игрокам, участвовавшим в раунде игры.'
    }
  ],
  bonus: {
    activeListTitle: 'Список бонусов',
    wallet: 'Кошелёк бонусов',
    walletDesc: 'Общий доступный Кошелёк бонусов',
    useAuto: 'Использовать автоматически',
    dailyBonus: 'Ежедневный бонус',
    welcomeBonus: 'Приветственный бонус',
    eachXBet: 'Подарок {{count}} за каждую ставку',
    eachXBetDesc: '{{count}} После ставки есть ставка в подарок',
    eachXBetWarning: 'Вы можете использовать бонус карты, не делая ставок.',
    eachXBetRemain: '{{count}} карт куплено.',
    turnoverRemain: "Для завершения цикла {{remain}} <i class=\'fa fa-{{currency}}\'></i> продолжайте играть с кошелька.",
    standingEarnings: 'Незавершённые циклы',
    bonusAvailable: 'Вы можете использовать свой бонус.',
    turnoverReward: 'Выигрыш цикла',
    usedAmount: 'Использованная сумма',
    autoUseConfirmations: {
      bonus: 'Данный бонус не будет использоваться автоматически для ваших следующих ставок, вы согласны?',
      wallet: 'Ваш кошелёк бонусов не будет использоваться автоматически для следующих ставок, вы согласны?'

    },
    rules: {
      menuTitle: 'Правила бонусов',
      general: {
        title: 'Общие правила',
        content: '<p>При обнаружении действий с аккаунтом или со ставками, направленных на злоупотребление условиями акций и выигрышей, руководство "LiveGames" уполномочено принять решение об отмене или не отмене бонуса и выигрышей.".</p><p>LiveGames; оставляет за собой право, без объяснения причин, изменять и обновлять правила, касающиеся акций.</p><p>Бонусы не выплачиваются аккаунтам при обнаружении следующих ситуаций:<ul><li>Аккаунты с одинаковым именем</li><li>Аккаунты, принадлежащие одной семье / дому</li><li>Аккаунты с одинаковым IP</li><li>Аккаунты с одинаковыми персональными данными (электронная почта, номер телефона, кредитная карта, способы оплаты)</li><li>Аккаунты, используемые с одного компьютера</li><li>Несколько аккаунтов одного лица</li><li>Любое подтверждение попытки мошенничества</li><li>Нарушение положений и условий и общих правил бонусов</li></ul></p><p></p> LiveGames оставляет за собой право, в случае необходимости, запросить у пользователя документ, удостоверяющий личность, документ о проживании и другие документы. Если эти документы не будут предоставлены пользователем, выигрыш игрока может быть заблокирован. Если есть доказательства или подозрения, что игрок имеет более одного аккаунта, бонус не будет предоставлен. После внесения бонуса связанные аккаунты, обнаруженные отделом безопасности, будут закрыты на неопределенный срок, а весь баланс аккаунта будет заморожен.</p><p>Бонусы предназначены для реальных пользователей с одним аккаунтом, не связанных с какой-либо организованной сетью сбора бонусов.</p><p>Пользователи, желающие воспользоваться преимуществами акций, считаются подтвердившими, что они прочитали и приняли соответствующие положения и условия.</p>'
      },
      welcome: {
        title: 'Правила использования Приветственного бонуса',
        content: '<ul><li>"Приветственный бонус" будет автоматически перечислен каждому пользователю, который впервые принимает участие в играх.</li><li> Если сумма ставки ниже минимальной суммы ставки в соответствии с правилами зала, оставшаяся сумма будет вычтена из реального баланса.</li><li>Чтобы использовать приз, полученный с помощью бонуса, необходимо отыграть {{multiply}} выигранную сумму с реального баланса.</li><li>Цикл "Приветственного бонуса" должен быть завершен в течение {{day}} дней. Бонусные выигрыши, которые не будут соответствовать требованиям по отыгрышу в течение этого периода, будут аннулированы системой.</li><li>Призы, выигранные с помощью приветственного бонуса, не могут быть конвертированы в реальные деньги. После завершения цикла вы можете использовать сумму, накопленную в кошельке бонусов, как реальные деньги.</li><li>Для призов, полученных путём использования средств из Кошелька бонусов, нет требований по отыгрышу.</li><li>Данная акция действует с 01.08.2019.</li><li>"Общие правила бонусов" распространяются на все бонусы.</li></ul>'

      },
      eachxsession: {
        title: 'За каждую {{each}} ставку% {{percent}} бонус',
        content: '<ul><li>За каждую <strong> {{each}} </strong> вашу ставку <strong>% {{percent}} </strong>, немедленно выдается бонус.</li><li>Этот бонус нельзя использовать для получения специальных призов в игре Бинго (первые пять карт - это первая линия, первые 15 карт - первая линия и призы Бинго).</li><li>Для призов, полученных с помощью этого бонуса, нет требований по отыгрышу. </li><li>Если заработанные бонусы не были использованы в течение текущей сессии, они не переносятся на следующую сессию.</li><li>Данная акция действует с 01.08.2019.</li><li>"Общие правила бонусов" распространяются на все бонусы.</li></ul>'
      },
      eachxbet: {
        title: 'За каждые {{each}} ставок % {{percent}} бонус',
        content: '<ul><li>За каждые <strong> {{each}} </strong> ваши <strong>% {{percent}} </strong> ставкок, немедленно выдается бонус.</li><li>Этот бонус нельзя использовать для получения специальных призов в игре Бинго (первые пять карт - это первая линия, первые 15 карт - первая линия и призы Бинго).</li><li>Для призов, полученных с помощью этого бонуса, нет требований по отыгрышу. </li><li>Если заработанные бонусы не были использованы в течение текущей сессии, они не переносятся на следующую сессию.</li><li>Данная акция действует с 01.08.2019.</li><li>Общие правила бонусов" распространяются на все бонусы.</li></ul>'

      }
    }
  },
  statistics: {
    title: 'Статистика',
    menuTitle: 'Статистика',
    tab1: 'Стандартные',
    tab2: 'Жаркие',
    tab3: 'Ставки Live',
    tab4: 'Зоны',
    heat: 'Уровень активности'
  },
  favouriteBets: {
    title: 'Избранные ставки',
    titleUppercase: 'ИЗБРАННЫЕ СТАВКИ',
    special: {
      title: 'Специальные ставки',
      finaleEnPlein: 'Finale En Plein',
      finalesACheval: 'Finales A Cheval',
      fullBets: 'Полные ставки'
    },
    save: 'СОХРАНИТЬ ПОСЛЕДНЮЮ СТАВКУ',
    noBet: 'Последняя сыгранная ставка не найдена',
    chip: 'Купон'
  },
  chat: {
    title: 'Чат',
    clickForChat: 'Нажмите для чата',
    input: {
      placeholder: 'Отправить сообщение'
    }
  },
  betHistory: {
    noBet: 'Пока нет ставок.',
    title: 'История ставок',
    titleUppercase: 'История ставок',
    session: 'Сессия',
    bet: 'Ставка',
    totalBet: 'Всего ставок',
    totalGain: 'Общий выигрыш',
    result: 'Результат',
    black: 'Чёрное',
    red: 'Красное',
    even: 'Даже',
    odd: 'Странный',
    clear: 'чистый',
    filter: 'Фильтр',
    status: {
      title: 'Состояние',
      inProgress: 'Ставка обрабатывается.',
      accepted: 'Платеж получен.',
      paymentError: 'Платеж не получен.',
      rewardInProgress: 'Приз отправлен.',
      betClosed: 'Приз не выигран.',
      rewardSent: 'Приз выигран.',
      rewardError: 'Ошибка отправки приза',
      canceled: 'Аннулирование'
    },
    date: 'Дата',
    detail: {
      title: 'Подробности ставки',
      titleUppercase: 'ДЕТАЛИ СТАВКИ',
      link: 'Просмотреть подробности',
      turnBack: 'Вернуться'
    },
    room: {
      name: 'Зал',
      bcroulettetestfrench: 'Французский зал'
    }
  },
  help: {
    title: 'Справка'
  },
  limits: {
    title: 'Лимиты и платежи',
    roomName: 'Название стола',
    bet: 'Ставка',
    betLimit: 'Лимит ставок',
    payment: 'Платёж',
    sessionNo: 'Номер сессии'
  },
  settings: {
    title: 'Настройки',
    titleUppercase: 'Настройки',
    language: 'Выбор языка',
    muteChat: 'Скрывать сообщения от игроков',
    autoVideo: 'Режим автовидео',
    videoQuality: 'Настройки качества видео',
    croupierVolume: 'Голос крупье',
    gameVolume: 'Звуки игры',
    videoVolume: 'Громкость Трансляции',
    gameSounds: 'Звуки Игры',
    warningSounds: 'Звуки Предупреждения',
    voiceIsOpen: 'Громкость включена',
    voiceIsClose: 'Громкость выключена',
    chatIsOpen: 'Чат включен',
    chatIsClose: 'Отключить чат'
  },
  errors: {
    PURCHASE_DISABLED: 'Игра временно закрыта для ставок.',
    USER_NOT_FOUND: 'Пользователь не найден.',
    BETS_NOT_FOUND: 'Ставки не найдены.',
    USER_LOCKED: 'Заблокированный пользователь.',
    INSUFFICIENT_FUNDS: 'Недостаточный баланс.',
    BALANCE_NOT_ENOUGH: 'Недостаточный баланс.',
    MAX_STAKE_LIMIT: 'Макс. лимит ставок!',
    BONUS_ERROR: 'Бонус не был использован.',
    USER_SESSION_NOT_FOUND: 'Сессия пользователя истекла, пожалуйста, обновите страницу.',
    BONUS_AMOUNT_ERROR: 'Бонус не был использован.',
    BET_CLOSED: 'Ставки закрыты.',
    MAX_BET_COUNT: 'Максимальный лимит ставок достигнут, вы больше не можете делать ставки․',
    MAX_BETONCARD_COUNT: 'Максимальный лимит ставок на карты достигнут, вы больше не можете делать ставки на карты.',
    BONUS_EXCEED_AMOUNT: 'Бонус не может быть рассчитан, ваши ставки были отменены.',
    BONUS_EXCEED_BET: 'Ошибка использования бонуса, ваши ставки аннулированы.',
    INVALID_SIGN_USAGE: ' Возможно, ваше интернет соединение было временно прервано, восстановите подключение ...',
    INVALID_RESPONSE_ID: 'Ваши ставки не подтверждены.',
    INVALID_BET_STATE: 'Ставки закрыты.',
    TOO_MANY_REQUEST: 'Вы сделали слишком много запросов, пожалуйста, подождите ...',
    INVALID_TRANSACTION: 'Ваши заявки не подтверждены, пожалуйста, повторите попытку во время следующей сессии.',
    TRANSACTION_NOT_APPROVED: 'Ваши заявки не подтверждены, пожалуйста, повторите попытку во время следующей сессии.',
    UNEXPECTED_ERROR: 'Произошла непредвиденная ошибка. Пожалуйста, повторите попытку позже.',
    REARRANGE_TRX_FAILLED: 'Несмотря на то, что мы повторили попытку, ваши ставки не были подтверждены.',
    TRANSACTION_NOT_FOUND: 'Произошла непредвиденная ошибка. Пожалуйста, повторите попытку позже.',
    TRANSACTION_ERROR: 'Произошла непредвиденная ошибка. Пожалуйста, повторите попытку позже.',
    UNEXPECTED_TRANSACTION_ERROR: 'Произошла непредвиденная ошибка. Пожалуйста, повторите попытку позже.',
    CONNECTION_DISCONNECTED: 'Время соединения истекло, пожалуйста, обновите.',
    RECONNECT: 'Подключение ...',
    RECONNECTING: 'Подключение ...',
    REPEATLASTBET_EMPTY: 'В предыдущей сессии нет ставок.',
    REPEATLASTBET_SUCCESS: 'Ваши ставки с предыдущей сессии были повторены.'
  },
  warnings: {
    sessionExpireWarning: 'Ваша сессия истекает, вы хотите продолжить?',
    rearrangeFailed: 'Карты с указанными номерами не были подтверждены из-за недостаточного баланса.',
    broadcastFailed: 'Пожалуйста, нажмите на кнопку<strong>ИГРАТЬ</strong> чтобы продолжить просмотр лайв трансляции.'
  },
  modals: {
    continue: 'Продожлить',
    randomBet: {
      title: 'Случайная ставка',
      text: '{{amount}}{{currency}} ставки будут размещены на разные {{count}} карты. Вы согласны?'
    },
    refreshPage: 'Ваша сессия истекла, пожалуйста, обновите страницу.',
    realityCheckConfirmation: 'Ваша сессия заканчивается, вы хотите продолжить?'
  },
  fullScreen: {
    title: 'Полноэкранный'
  }
}

export default ru
