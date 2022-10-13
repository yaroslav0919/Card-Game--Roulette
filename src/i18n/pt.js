const pt = {
  gameRules: 'REGRAS DO JOGO',
  balance: 'SALDO',
  totalBet: 'TOTAL DE APOSTAS',
  payments: 'Pagamentos',
  numbers: 'Números',
  returnToLobby: 'Retornar ao saguão',
  close: 'Fechar',
  loading: 'CARREGANDO',
  swiperText: 'Deslize para cima para jogar',
  actions: {
    double: 'Adicionar apostas',
    repeat: 'Repetir aposta anterior ',
    favourite: 'Mostrar favoritos',
    rollback: 'Retornar última aposta',
    delete: 'Excluir apostas',
    doBet: 'FAZER APOSTA',
    autoPlay: 'Jogo Automático'
  },
  intro: {
    step1: 'Volte para a tela do jogo.',
    step2: 'Deslize para direita para bate-papo.',
    step3: 'Voltar à visualização normal.',
    skip: 'Pular introdução'
  },
  specialBets: {
    color: 'Cor',
    column: 'Coluna',
    corner: 'Canto',
    dozen: 'Dúzia',
    half: 'Metade',
    line: 'Linha',
    parity: 'Paridade',
    split: 'Dividir',
    straightup: 'Direto',
    street: 'Rua'
  },
  languages: {
    tr: 'Turco',
    en: 'Inglês'
  },
  statics: {
    won: 'VOCÊ GANHOU!',
    standard: 'Padrão',
    temperature: 'Temperatura',
    liveBets: 'Aposta online',
    firstDozen: '1ª DÚZIA',
    secondDozen: '2ª DÚZIA',
    thirdDozen: '3ª DÚZIA',
    firstColumn: '1ª COLUNA',
    secondColumn: '2ª COLUNA',
    thirdColumn: '3ª COLUNA',
    even: 'PAR',
    odd: 'UM',
    lastRound: 'Última {{round}} rodada',
    title: 'ESTATÍSTICAS',
    titleUppercase: 'ESTATÍSTICAS'
  },
  bet: {
    title: 'Já pode apostar!'
  },
  liveBets: {
    live: 'NA SESSÃO ATUAL {{betCount}} PESSOAS FIZERAM APOSTAS…',
    betItemCount: '{{count}} apostas'
  },
  autoGame: {
    title: 'JOGOS AUTOMÁTICOS',
    start: 'COMEÇO',
    round: 'Rodada',
    noBalance: 'Não é possível jogar automaticamente devido ao saldo insuficiente',
    noBalance2: 'O jogo automático foi pausado devido à falta de saldo'
  },
  status: {
    open: 'FAZER UMA APOSTA',
    playing: 'APOSTAS ENCERRADAS',
    finish: 'AGUARDANDO NOVA SESSÃO',
    betAvailable: 'Você pode apostar agora',
    betNextAvailable: 'Você pode apostar para a próxima sessão',
    bonusAvailable: 'Bônus disponível para uso',
    cardAfterBonus: '{{card}} aposta após o bônus estará disponível para uso',
    tooltip1: 'Saldo total',
    tooltip2: 'Apostas totais'
  },
  notification: {
    info: 'INFORMAÇÕES',
    warning: 'AVISO',
    error: 'ERRO',
    success: 'SUCESSO'
  },
  modal: {
    cancel: 'CANCELAR',
    accept: 'ACEITAR',
    okay: 'OK'
  },
  rules: [
    {
      title: 'Regras do jogo',
      content: '<p>O objetivo na Roleta é prever o número em que a bola cairá fazendo uma ou mais apostas que cobrem esse número específico. A roleta na Roleta Europeia inclui os números 1-36 mais um único 0 (zero).</p><p>Após o tempo de aposta ter expirado, a bola é girada dentro da roleta. A bola acabará por parar em uma das cavidades numeradas dentro da roda. Você ganha se fizer uma aposta que cubra esse número específico.</p>'
    },
    {
      title: 'Tipos de aposta',
      content: '`\n\t\t<p>Você pode fazer muitos tipos diferentes de apostas na mesa de roleta. As apostas podem abranger um único número ou um determinado intervalo de números, e cada tipo de aposta tem sua própria taxa de pagamento.</p>\n       <p>As apostas feitas nos espaços numerados na área de apostas, ou nas linhas entre eles, são chamadas de Apostas Internas, enquanto as apostas feitas nas caixas especiais abaixo e ao lado da grade principal de números são chamadas de Apostas Externas.< /p>\n     `'
    },
    {
      title: 'Apostas internas',
      content: '`\r\n        <ul>\r\n          <li><strong>Direto</strong> - coloque sua ficha diretamente em qualquer número único (incluindo zero).</li>\r\n          <li><strong>Aposta dividida</strong> - coloque sua ficha na linha entre dois números quaisquer, na vertical ou na horizontal.</li>\r\n          <li><strong>Aposta de Rua</strong> - coloque sua ficha no final de qualquer linha de números. Uma Aposta de Rua abrange três números.</li>\r\n          <li><strong>Aposta de Canto</strong> - coloque sua ficha no canto (interseção central) onde quatro números se encontram. Todos os quatro numero são cobertos.<li>\n         <strong>Aposta de Linha</strong> - coloque sua ficha no final de duas linhas na interseção entre as duas linhas. Uma aposta de linha cobre todos os números em ambas as linhas, um total de seis números.</li>\n\t\t</ul>\n     `'
    },
    {
      title: 'Apostas externas',
      content: '`\r\n        <ul>\r\n          <li><strong>Coluna de Aposta</strong> - coloque sua ficha em uma das caixas marcadas "2 para 1" no final da coluna que cobre todos os 12 números dessa coluna. O zero não é coberto por nenhuma aposta de coluna.</li>\r\n          <li><strong>Aposta de Dúzia</strong> - coloque sua ficha em uma das três caixas marcadas como "1º 12", "2º 12" ou "3º 12" para cobrir os 12 números ao lado da caixa.</li>\r\n          <li><strong>Vermelho/Preto</strong> - coloque sua ficha na caixa Vermelha ou Preta para cobrir os 18 números vermelhos ou 18 pretos. O zero não é coberto por essas apostas.</li>\r\n          <li><strong>Par/Ímpar</strong> - coloque sua ficha em uma dessas caixas para cobrir os 18 números pares ou 18 ímpares. O zero não é coberto por essas apostas.</li>\r\n          <li><strong>1-18/19-36</strong> - coloque sua ficha em qualquer uma dessas caixas para cobrir o primeiro ou o segundo conjunto de 18 números. O zero não é coberto por essas apostas.</li>\r\n        </ul>\r\n      `'
    },
    {
      title: 'Apostas vizinhas',
      content: '`\r\n        <h4>Tiers du Cylindre</h4>\r\n        <p>Esta aposta cobre um total de 12 números que incluem 27, 33 e os números que estão entre eles no lado da roleta oposto ao zero. 6 fichas são colocadas da seguinte forma:</p>\r\n        <ul>\r\n          <li>1 ficha na divisão de 5/8</li>\r\n          <li>1 ficha na divisão de 10/11</li>\r\n          <li>1 ficha na divisão de 13/16</li>\r\n          <li>1 ficha na divisão 23/24</li>\r\n          <li>1 ficha na divisão 27/30</li>\r\n          <li>1 ficha na divisão 33/36</li>\r\n        </ul>\r\n        <h4>Orphelins a Cheval</h4>\r\n        <p>Esta aposta cobre um total de 8 números nos dois segmentos da roleta não cobertos pelas apostas voisins du zero e tiers du cylindre acima. 5 fichas são colocadas da seguinte forma:</p>\r\n        <ul>\r\n          <li>1 ficha em 1 (para cima)</li>\r\n          <li>1 ficha na divisão de 6/9</li>\r\n          <li>1 ficha na divisão 14/17</li>\r\n          <li>1 ficha na divisão 17/20</li>\r\n          <li>1 ficha na divisão 31/34</li>\r\n        </ul>\r\n        <h4>Voisins du Zero</h4>\r\n        <p>sua aposta cobre um total de 17 números que incluem 22, 25 e os números que estão entre eles no lado da roleta que contém zero. 9 fichas são colocadas da seguinte forma:</p>\r\n        <ul>\r\n          <li>2 fichas na rua 0/2/3</li>\r\n          <li>1 ficha na divisão 4/7</li>\r\n          <li>1 ficha na divisão de 15/12</li>\r\n          <li>1 ficha na divisão 18/21</li>\r\n          <li>1 ficha na divisão de 19/22</li>\r\n          <li>2 fichas no canto 25/26/28/29</li>\r\n          <li>1 ficha na divisão 32/35</li>\r\n        </ul>\r\n        <h4>Jeu Zero</h4>\r\n        <p>Esta aposta cobre zero e os 6 números próximos de zero na roleta: 12, 35, 3, 26, 0, 32 e 15. 4 fichas são colocadas da seguinte forma:</p>\r\n        <ul>\r\n          <li>1 ficha na divisão de 0/3</li>\r\n          <li>1 ficha na divisão de 15/12</li>\r\n          <li>1 ficha em 26 (para cima)</li>\r\n          <li>1 ficha na divisão 32/35</li>\r\n        </ul>\r\n        <p>Uma aposta vizinha cobre um número específico, bem como outros números próximos a ele na roleta. Para fazer uma aposta de vizinho, clique/toque em um número específico na pista. Uma ficha será colocada no número escolhido e nos números vizinhos à direita e à esquerda. Clique/toque no botão circular "-" ou "+" para aumentar ou diminuir o conjunto de vizinhos à direita e à esquerda do número escolhido.</p>\n\t\t`'
    },
    {
      title: 'Apostas Especiais',
      content: '`\r\n       <p>Na segunda guia em Apostas favoritas, você pode fazer apostas Finale en plein e Finale a cheval com mais facilidade.</p>\r\n       <h4>Final em Plein</h4>\r\n       <ul>\r\n         <li>Finale en plein 0 – aposta de 4 fichas cobre 0+10+20+30, cada uma com 1 ficha</li>\r\n         <li>Finale en plein 1 – aposta de 4 fichas cobre 1+11+21+31, cada uma com 1 ficha</li>\r\n         <li>Finale en plein 2 – aposta de 4 fichas cobre 2+12+22+32, cada uma com 1 ficha</li>\r\n         <li>Finale en plein 3 – aposta de 4 fichas cobre 3+13+23+33, cada uma com 1 ficha</li>\r\n         <li>Finale en plein 4 – aposta de 4 fichas cobre 4+14+24+34, cada uma com 1 ficha</li>\r\n         <li>Finale en plein 5 – aposta de 4 fichas cobre 5+15+25+35, cada uma com 1 ficha</li>\r\n         <li>Finale en plein 6 – aposta de 4 fichas cobre 6+16+26+36, cada uma com 1 ficha</li>\r\n         <li>Finale en plein 7 – aposta de 3 fichas cobre 7+17+27, cada uma com 1 ficha</li>\r\n         <li>Finale en plein 8 – aposta de 3 fichas cobre 8+18+28, cada uma com 1 ficha</li>\r\n         <li>Finale en plein 9 – aposta de 3 fichas cobre 9+19+29, cada uma com 1 ficha</li>\r\n       </ul>\r\n       <h4>Finale a Cheval</h4>\r\n       <ul>\r\n         <li>Finale a cheval de 0/3 – 4 fichas cobre 0/3+10/13+20/23+30/33, cada uma com 1 ficha</li>\r\n         <li>Finale a cheval de 1/4 – 4 fichas cobre 1/4+11/14+21/24+31/34, cada uma com 1 ficha</li>\r\n         <li>Finale a cheval de 2/5 – 4 fichas cobre 2/5+12/15+22/25+32/35, cada uma com 1 ficha</li>\r\n         <li>Finale a cheval de 3/6 – 4 fichas cobre 3/6+13/16+23/26+33/36, cada uma com 1 ficha</li>\r\n         <li>Finale a cheval de 4/7 – 4 fichas cobre 4/7+14/17+24/27+34, cada uma com 1 ficha</li>\r\n         <li>Finale a cheval de 5/8 – 4 fichas cobre 5/8+15/18+25/28+35, cada uma com 1 ficha</li>\r\n         <li>Finale a cheval de 6/9 – 4 fichas cobre 6/9+16/19+26/29+36, cada uma com 1 ficha</li>\r\n         <li>Finale a cheval 7/10 – aposta de 3 fichas cobre 7/10+17/20+27/30, cada uma com 1 ficha</li>\r\n         <li>Finale a cheval 11/08 – aposta de 3 fichas cobre 11/08+18/21+28/31, cada uma com 1 ficha</li>\r\n         <li>Finale a cheval 12/09 – aposta de 3 fichas cobre 12/09+19/22+29/32, cada uma com 1 ficha</li>\r\n       <ul>\r\n     `'
    },
    {
      title: 'Pagamento',
      content: '`\r\n       <p>Seu pagamento depende do tipo de aposta feita.</p>\r\n       <h4>Apostas internas</h4>\r\n       <div class="table--v2">\r\n         <tabela>\r\n           <thead>\r\n             <tr>\r\n               <th>Tipo de Aposta</th>\r\n               <th>Pagamento</th>\r\n             </tr>\r\n           </thead>\r\n           <tbody>\r\n             <tr>\r\n               <td>Direto</td>\r\n               <td>35:1</td>\r\n             </tr>\r\n             <tr>\r\n               <td>Dividir</td>\r\n               <td>17:1</td>\r\n             </tr>\r\n             <tr>\r\n               <td>Rua</td>\r\n               <td>11:1</td>\r\n             </tr>\r\n             <tr>\r\n               <td>Canto</td>\r\n               <td>8:1</td>\r\n             </tr>\r\n             <tr>\r\n               <td>Linha</td>\r\n               <td>5:1</td>\r\n             </tr>\r\n           </tbody>\r\n         </table>\r\n       </div>\r\n       <h4>Apostas externas</h4>\r\n       <div class="table--v2">\r\n         <tabela>\r\n           <thead>\r\n             <tr>\r\n               <th>Tipo de Aposta</th>\r\n               <th>Pagamento</th>\r\n             </tr>\r\n           </thead>\r\n           <tbody>\r\n             <tr>\r\n               <td>Coluna</td>\r\n               <td>2:1</td>\r\n             </tr>\r\n             <tr>\r\n               <td>Dúzias</td>\r\n               <td>2:1</td>\r\n             </tr>\r\n             <tr>\r\n               <td>Vermelho/Preto</td>\r\n               <td>1:1</td>\r\n             </tr>\r\n             <tr>\r\n               <td>Par/Ímpar</td>\r\n               <td>1:1</td>\r\n             </tr>\r\n             <tr>\r\n               <td>1-18/19-36</td>\r\n               <td>1:1</td>\r\n             </tr>\r\n           </tbody>\r\n         </table>\r\n       </div>\r\n       <p>* O mau funcionamento anula todos os pagamentos e jogos.</p>\r\n     `'
    },
    {
      title: 'Política de desconexão',
      content: 'Se você for desconectado de uma rodada de jogo, todas as apostas feitas permanecerão válidas e serão liquidadas na sua ausência. Ao reconectar, você pode ver os resultados das apostas na janela Histórico.'
    },
    {
      title: 'Erro no manuseio',
      content: 'Se houver um erro no jogo, sistema ou procedimento do jogo, a rodada do jogo será pausada temporariamente enquanto o gerente do estúdio estiver sendo informado. Você e outros jogadores serão notificados via Bate-papo, que o problema está sendo investigado. Se o gerente puder resolver o erro imediatamente, a rodada do jogo continuará normalmente. Se a resolução imediata não for possível, a rodada do jogo será cancelada e as apostas iniciais serão reembolsadas a todos os jogadores que participaram da rodada.'
    }
  ],
  bonus: {
    activeListTitle: 'Lista de bônus',
    wallet: 'Carteira de bônus',
    walletDesc: 'Carteira de bônus total disponível',
    useAuto: 'Usar automaticamente',
    dailyBonus: 'Bônus diário',
    welcomeBonus: 'Bônus de boas-vindas',
    eachXBet: '{{Count}} Presente para cada aposta',
    eachXBetDesc: '{{count}} Após a aposta, há uma aposta de presente',
    eachXBetWarning: 'Você pode usar seu bônus de cartela sem apostar.',
    eachXBetRemain: '{{count}} cartelas compradas.',
    turnoverRemain: "Para completar o ciclo {{remain}} <i class=\\'fa fa-{{currency}}\\'></i> ainda joga da carteira.",
    standingEarnings: 'Ciclos de espera',
    bonusAvailable: 'Você pode usar seu bônus.',
    turnoverReward: 'Vitória cíclica',
    usedAmount: 'Quantidade usada',
    autoUseConfirmations: {
      bonus: 'Este bônus não será usado automaticamente para suas próximas apostas, você confirma?',
      wallet: 'Sua carteira de bônus não será usada automaticamente para suas próximas apostas, você confirma?'
    },
    rules: {
      menuTitle: 'Regras de bônus',
      general: {
        title: 'Regras gerais',
        content: '<p>Se forem detectadas ações com a conta ou com apostas destinadas a abusar dos termos de promoções e ganhos, a administração de "LiveGames" está autorizada a tomar a decisão de cancelar ou não o bônus e os ganhos.".</p ><p>LiveGames; reserva-se o direito, sem dar explicação, de alterar e atualizar as regras relativas às promoções.</p><p>Os bônus não são pagos às contas quando as seguintes situações são detectadas:<ul><li> Contas com o mesmo nome</li><li>Contas pertencentes à mesma família/casa</li><li>Conta com um IP</li><li>Contas com os mesmos dados pessoais (e-mail, telefone número, cartão de crédito, métodos de pagamento)</li><li>Contas usadas de um computador </li> <li>Mais de uma conta de propriedade de uma pessoa</li><li>Qualquer confirmação de tentativa de fraude</li ><li>Violação dos termos e condições e regras gerais de bônus</li></ul></p><p></p>LiveGames reserva-se o direito, se necessário, de solicitar um bilhete de identidade, documento de residência e outros documentos dos usuários. Se esses documentos não forem fornecidos pelo usuário, os ganhos do jogador poderão ser bloqueados. Se houver evidências ou suspeitas de que o jogador tenha mais de uma conta, o bônus não será creditado. Depois que o bônus for depositado, as contas vinculadas descobertas pelo departamento de segurança serão fechadas indefinidamente e todo o saldo da conta será congelado.</p><p>Os bônus são destinados a usuários reais com uma conta, não afiliados a nenhum bônus organizado rede de coleta.</p><p>Os usuários que desejam aproveitar as promoções são considerados como tendo confirmado que leram e aceitaram os termos e condições aplicáveis.</p>'
      },
      welcome: {
        title: 'Termos de uso do bônus de boas-vindas',
        content: '<ul><li>O "Bônus de boas-vindas" será baixado automaticamente para todos os usuários que participarem dos jogos pela primeira vez.</li><li>Se o valor da aposta for inferior ao valor mínimo da aposta de acordo com as regras do quarto, o valor restante será deduzido do saldo real. </li><li>Para usar o prêmio ganho com o bônus, você precisa apostar {{multiply}} o valor ganho do saldo real.</li><li>O ciclo “Bônus de boas-vindas” deve ser concluído dentro de {{dia}} do dia. Os ganhos de bônus que não atenderem aos requisitos de apostas durante esse período serão cancelados pelo sistema.</li><li>Os prêmios ganhos com o bônus de boas-vindas não podem ser convertidos em dinheiro real. Após o final do ciclo, você pode usar o valor acumulado na carteira de bônus como dinheiro real.</li><li>Não há requisitos de aposta para recompensas obtidas por gastos da Carteira de Bônus.</li><li>ЭEsta promoção é válida a partir de 08/01/2019.</li><li>"Regras Gerais de Bônus" se aplicam a todos os bônus.</li></ul>'
      },
      eachxsession: {
        title: 'Para cada {{each}} Bet% Bônus de {{percent}}',
        content: '<ul><li>Para cada <strong> {{each}} </strong> sua aposta <strong>% {{percent}} </strong>, um bônus é concedido instantaneamente.</li><li>Este bônus não pode ser usado para ganhar prêmios especiais no jogo de Bingo (as cinco primeiras cartelas são a primeira linha, as primeiras 15 cartelas são a primeira linha e os prêmios do Bingo).</li><li>Não há requisitos de aposta para prêmios ganho com este bônus. </li><li>Se os bônus ganhos não forem usados durante a sessão atual, eles não serão transferidos para a próxima sessão.</li><li>Esta promoção é válida a partir de 08/01/2019.</li><li >As "Regras Gerais de Bônus" se aplicam a todos os bônus.</li></ul>'
      },
      eachxbet: {
        title: 'Para cada {{each}} Bet% Bônus de {{percent}}',
        content: '<ul><li>Para cada <strong> {{each}} </strong> sua aposta <strong>% {{percent}} </strong>, um bônus é concedido instantaneamente.</li><li>Este bônus não pode ser usado para ganhar prêmios especiais no jogo de Bingo (as cinco primeiras cartelas são a primeira linha, as primeiras 15 cartelas são a primeira linha e os prêmios do Bingo).</li><li>Não há requisitos de aposta para prêmios ganho com este bônus. </li><li>Se os bônus ganhos não forem usados durante a sessão atual, eles não serão transferidos para a próxima sessão.</li><li>Esta promoção é válida a partir de 08/01/2019.</li><li >As "Regras Gerais de Bônus" se aplicam a todos os bônus.</li></ul>'
      }
    }
  },
  statistics: {
    title: 'Estatísticas',
    menuTitle: 'Estatísticas',
    tab1: 'Padrão',
    tab2: 'Temperatura',
    tab3: 'Apostas online',
    tab4: 'Zonas',
    heat: 'Calor'
  },
  favouriteBets: {
    title: 'Apostas favoritas',
    titleUppercase: 'APOSTAS FAVORITAS',
    special: {
      title: 'Apostas especiais',
      finaleEnPlein: 'Finale En Plein',
      finalesACheval: 'Finales A Cheval',
      fullBets: 'Apostas completas'
    },
    save: 'SALVAR A ÚLTIMA APOSTA',
    noBet: 'A última aposta jogada não foi encontrada',
    chip: 'Slip'
  },
  chat: {
    title: 'Bate-papo',
    clickForChat: 'Pressione para conversar',
    input: {
      placeholder: 'Enviar mensagem'
    }
  },
  betHistory: {
    noBet: 'No entanto, nenhuma aposta.',
    title: 'Histórico das apostas',
    titleUppercase: 'Histórico das apostas',
    session: 'Sessão',
    bet: 'Aposta',
    totalBet: 'Apostas totais',
    totalGain: 'Ganho total',
    result: 'Resultado',
    black: 'Preto',
    red: 'Vermelho',
    even: 'Par',
    odd: 'Ímpar',
    clear: 'Clara',
    filter: 'Filtro',
    status: {
      title: 'Condição',
      inProgress: 'A aposta está sendo processada.',
      accepted: 'Pagamento recebido.',
      paymentError: 'Pagamento não recebido.',
      rewardInProgress: 'A recompensa foi enviada.',
      betClosed: 'Prêmio não recebido.',
      rewardSent: 'Prêmio recebido.',
      rewardError: 'Erro no envio do prêmio',
      canceled: 'Cancelamento'
    },
    date: 'Data',
    detail: {
      title: 'Detalhes da aposta',
      titleUppercase: 'DETALHE DA APOSTA',
      link: 'Ver detalhes',
      turnBack: 'Voltar'
    },
    room: {
      name: 'Sala',
      bcroulettetestfrench: 'Sala Francesa'
    }
  },
  help: {
    title: 'Ajuda'
  },
  limits: {
    title: 'Limites e pagamentos',
    roomName: 'Nome da tabela',
    bet: 'Aposta',
    betLimit: 'Limite de aposta',
    payment: 'Pagamento',
    sessionNo: 'Número da sessão'
  },
  settings: {
    title: 'Configurações',
    titleUppercase: 'Configurações',
    language: 'Seleção de idioma',
    muteChat: 'Ocultar mensagens dos jogadores',
    autoVideo: 'Modo de vídeo automático',
    videoQuality: 'Configurações de qualidade de vídeo',
    croupierVolume: 'Voz do Crupiê',
    gameVolume: 'Sons do jogo',
    videoVolume: 'Volume De Transmissão',
    gameSounds: 'Sons Do Jogo',
    warningSounds: 'Sons De Alerta',
    voiceIsOpen: 'Volume ligado',
    voiceIsClose: 'Volume desligado',
    chatIsOpen: 'Bate-papo ativado',
    chatIsClose: 'Bate-papo desligado'
  },
  errors: {
    PURCHASE_DISABLED: 'O jogo está temporariamente fechado para apostas.',
    USER_NOT_FOUND: 'O usuário não foi encontrado.',
    BETS_NOT_FOUND: 'As apostas não foram encontradas.',
    USER_LOCKED: 'Usuário bloqueado.',
    INSUFFICIENT_FUNDS: 'Saldo insuficiente.',
    BALANCE_NOT_ENOUGH: 'Saldo insuficiente.',
    MAX_STAKE_LIMIT: 'Máx. limite de aposta!',
    BONUS_ERROR: 'O bônus não foi usado.',
    USER_SESSION_NOT_FOUND: 'A sessão do usuário expirou, atualize a página.',
    BONUS_AMOUNT_ERROR: 'O bônus não foi usado.',
    BET_CLOSED: 'Apostas encerradas.',
    MAX_BET_COUNT: 'O limite máximo de apostas foi atingido, você não pode mais fazer apostas.',
    MAX_BETONCARD_COUNT: 'O limite máximo de aposta das cartelas foi atingido, você não pode mais fazer apostas nas cartelas.',
    BONUS_EXCEED_AMOUNT: 'O bônus não pode ser calculado, suas apostas foram canceladas.',
    BONUS_EXCEED_BET: 'Erro de uso de bônus, suas apostas são canceladas.',
    INVALID_SIGN_USAGE: 'Sua conexão com a internet pode ter sido interrompida temporariamente, reconecte-se...',
    INVALID_RESPONSE_ID: 'Suas apostas não estão confirmadas.',
    INVALID_BET_STATE: 'Apostas encerradas.',
    TOO_MANY_REQUEST: 'Você fez muitos pedidos, por favor aguarde...',
    INVALID_TRANSACTION: 'Seus lances não foram confirmados. Tente novamente na próxima sessão.',
    TRANSACTION_NOT_APPROVED: 'Seus lances não foram confirmados. Tente novamente na próxima sessão.',
    UNEXPECTED_ERROR: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
    REARRANGE_TRX_FAILLED: 'Embora tenhamos tentado novamente, suas apostas não foram confirmadas.',
    TRANSACTION_NOT_FOUND: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
    TRANSACTION_ERROR: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
    UNEXPECTED_TRANSACTION_ERROR: 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
    CONNECTION_DISCONNECTED: 'O período de conexão expirou, atualize.',
    RECONNECT: 'Reconectando...',
    RECONNECTING: 'Reconectando...',
    REPEATLASTBET_EMPTY: 'Não há apostas na sessão anterior.',
    REPEATLASTBET_SUCCESS: 'As suas apostas da sessão anterior foram repetidas.'
  },
  warnings: {
    sessionExpireWarning: 'Sua sessão está prestes a expirar, deseja continuar?',
    rearrangeFailed: 'Suas cartelas numeradas não foram aprovadas devido ao saldo insuficiente.',
    broadcastFailed: 'Clique no botão <strong>REPRODUZIR</strong> para continuar assistindo a transmissão ao vivo.'
  },
  modals: {
    continue: 'Continuar',
    randomBet: {
      title: 'Aposta aleatória',
      text: '{{amount}}{{currency}} apostas serão feitas em diferentes {{count}} cartelas. Você confirma?'
    },
    refreshPage: 'Sua sessão expirou. Atualize a página.',
    realityCheckConfirmation: 'Sua sessão terminará, você quer continuar?'
  },
  fullScreen: {
    title: 'Tela cheia'
  }
}

export default pt
