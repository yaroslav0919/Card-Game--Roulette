const tr = {
  gameRules: 'OYUN KURALLARI',
  balance: 'BAKİYE',
  totalBet: 'TOPLAM BAHİS',
  payments: 'Ödemeler',
  numbers: 'Sayılar',
  returnToLobby: 'Lobiye Dön',
  close: 'Kapat',
  loading: 'YÜKLENİYOR',
  swiperText: 'Oynamak için yukarı kaydır',
  actions: {
    double: 'Bahisleri Katla',
    repeat: 'Son Bahsi Tekrarla',
    favourite: 'Favorileri Göster',
    rollback: 'Son Bahsi Geri Al',
    delete: 'Bahisleri Sil',
    doBet: 'BAHİS YAP',
    autoPlay: 'Otomatik Oyna'
  },
  intro: {
    title: 'Intro',
    step1: 'Oyun ekranına dönün.',
    step2: 'Sohbet için sağa kaydırın.',
    step3: 'Normal görünüme geri dönün.',
    skip: 'Tanıtımı Geç'
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
    tr: 'Türkçe',
    en: 'English'
  },
  statics: {
    won: 'KAZANDINIZ',
    standard: 'Standart',
    temperature: 'Sıcaklık',
    liveBets: 'Canlı Bahis',
    firstDozen: '1.DÜZİNE',
    secondDozen: '2.DÜZİNE',
    thirdDozen: '3.DÜZİNE',
    firstColumn: '1.SÜTUN',
    secondColumn: '2.SÜTUN',
    thirdColumn: '3.SÜTUN',
    even: 'ÇİFT',
    odd: 'TEK',
    lastRound: 'Son {{round}} Raund',
    titleUppercase: 'İSTATİSTİKLER'
  },
  bet: {
    title: 'HEMEN BAHİS YAP!'
  },
  liveBets: {
    live: 'ŞU ANKİ SEANSTA {{betCount}} BAHİS YAPILDI…',
    betItemCount: '{{count}} bahis'
  },
  autoGame: {
    title: 'OTOMATİK OYUN',
    start: 'Başlat',
    round: 'Tur',
    noBalance: 'Bakiyeniz yetersiz olduğu için otomatik oyun başlatılamıyor',
    noBalance2: 'Bakiyeniz yetersiz olduğu için otomatik oyununuz durdurulmuştur'
  },
  status: {
    open: 'BAHİS YAPIN',
    lastCall: 'SON BAHİSLER',
    playing: 'YENİ SEANS BEKLENİYOR',
    finish: 'YENİ SEANS BEKLENİYOR',
    betAvailable: 'You can bet now',
    betNextAvailable: 'You can bet for next session',
    bonusAvailable: 'Bonus available for use',
    cardAfterBonus: '{{card}} bet after bonus will be available for use',
    tooltip1: 'Toplam Bakiye',
    tooltip2: 'Toplam Bahis'
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
      title: 'Oyun Kuralları',
      content: '<p>Rulet oyununda amaç; belirli rakamların üzerine bir ya da daha fazla bahis oynayarak, topun üzerinde duracağı sayıyı doğru tahmin etmektir. Avrupa ruletinde çarkın üzerinde 1−36 arasındaki sayılar ve bir adet 0 (sıfır) rakamı bulunmaktadır.</p><p>Bahis süresi sona erdikten sonra top rulet çarkında döndürülür. Rulet çarkında dönüşünü tamamlayan top çark üzerindeki numaralandırılmış bölmelerden birinde duracaktır. Bölmenin denk geldiği sayıyı içeren bir bahiste bulunmuşsanız kazanan siz olursunuz.</p>'
    },
    {
      title: 'Bahis Türleri',
      content: `
        <p>Rulet masasına birden fazla farklı bahis koyabilirsiniz. Bahisler tek bir sayıyı ya da belirli bir sayı aralığını kapsayabilir. Bahislerde her türün kendine ait ayrı bir ödeme oranı bulunur.</p>
        <p>Numaralı alana veya bu alan arasındaki dizilere yapılan bahisler "İç Bahis" olarak adlandırılmaktadır. Aşağıdaki özel kutular ile tahtanın sol kısmına yapılan bahislere ise "Dış Bahis" denilmektedir.</p>
      `
    },
    {
      title: 'İç Bahisler',
      content: `
        <ul>
          <li><strong>Düz Bahis</strong> - fişinizi doğrudan tek bir numaraya (sıfır dahil) koyunuz.</li>
          <li><strong>İkili Bahis</strong> - fişinizi dikey ya da yatay olarak herhangi iki numara arasına yerleştiriniz.</li>
          <li><strong>Üçlü Bahis</strong> - fişinizi herhangi bir sayı sırasının sonuna koyunuz. Üçlü bahis; bu üç numarayı da içerecektir.</li>
          <li><strong>Dörtlü Bahis</strong> - fişinizi dört sayının kesiştiği köşenin üzerine koyunuz. Dörtlü bahiste dört sayı da bahse dahil edilecektir.</li>
          <li><strong>Altılı Bahis</strong> - fişinizi iki sayı sırasının uçlarının kesiştiği noktaya koyunuz. Altılı bahis; her iki sırada bulunan toplam altı sayıyı da içerecektir.</li>
        </ul>
      `
    },
    {
      title: 'Dış Bahisler',
      content: `
        <ul>
          <li><strong>Sütun Bahis</strong> - fişinizi  "2 - 1" olarak işaretlenmiş olan ve sütundaki 12 numarayı da içeren kutulardan birine koyunuz. Sıfır; sütun bahislerine dahil değildir.</li>
          <li><strong>Düzinelik Bahis</strong> - fişinizi "1. 12", "2. 12" ya da "3. 12" olarak işaretlenmiş olan ve üst kısımdaki 12 sayıyı da içeren kutulardan birine koyunuz.</li>
          <li><strong>Kırmızı/Siyah</strong> - fişinizi 18 kırmızı ya da 18 siyah numarayı kapsayacak şekilde kırmızı kutuya veya siyah kutuya koyunuz. Sıfır; bu bahislere dahil değildir.</li>
          <li><strong>Even/Odd (Çift/Tek)</strong> - fişinizi 18 çift ya da 18 tek numarayı kapsayacak şekilde bu kutulardan birine koyunuz. Sıfır; bu bahislere dahil değildir.</li>
          <li><strong>1−18/19−36</strong> - fişinizi ilk ya da son 18 numarayı içerecek biçimde bu kutulardan birinin üzerine koyunuz. Sıfır; bu bahislere dahil değildir.</li>
        </ul>
      `
    },
    {
      title: 'Komşu Bahisler',
      content: `
        <h4>Tiers du Cylindre</h4>
        <p>27 ile 33 sayıları dahil olmak üzere 27 ve 33 arasındaki tüm sayıları içerecek şekilde rulet çarkında sıfırın bulunduğu alanın karşısında yer alan, toplam 12 sayıdan oluşan bir bahistir. Bahiste 6 fişin konulacağı yerler şu şekildedir:</p>
        <ul>
          <li>1 fiş ikili olarak 5/8</li>
          <li>1 fiş ikili olarak 10/11</li>
          <li>1 fiş ikili olarak 13/16</li>
          <li>1 fiş ikili olarak 23/24</li>
          <li>1 fiş ikili olarak 27/30</li>
          <li>1 fiş ikili olarak 33/36</li>
        </ul>
        <h4>Orphelins a Cheval</h4>
        <p>Bu bahis; rulet çarkının yukarıda açıklanan "voisins du zero ile tiers du cylindre" bahislerine dahil olmayan iki bölümündeki 8 sayıyı kapsamaktadır. Bu bahiste 5 fişin konulacağı yerler:</p>
        <ul>
          <li>1 fiş 1 üzerine (Düz Bahis)</li>
          <li>1 fiş ikili olarak 6/9</li>
          <li>1 fiş ikili olarak 14/17</li>
          <li>1 fiş ikili olarak 17/20</li>
          <li>1 fiş ikili olarak 31/34</li>
        </ul>
        <h4>Voisins du Zero</h4>
        <p>22 ile 25 sayıları da dahil olmak üzere sayıların arasında yer alan tüm sayıları içerecek şekilde rulet çarkında sıfırın bulunduğu alanda toplam 17 numarayı içeren bir bahistir. Bahiste 9 fişin konulacağı yerler:</p>
        <ul>
          <li>2 fiş üçlü olarak 0/2/3</li>
          <li>1 fiş ikili olarak 4/7</li>
          <li>1 fiş ikili olarak 12/15</li>
          <li>1 fiş ikili olarak 18/21</li>
          <li>1 fiş ikili olarak 19/22</li>
          <li>2 fiş dörtlü olarak 25/26/28/29</li>
          <li>1 fiş ikili olarak 32/35</li>
        </ul>
        <h4>Jeu Zero</h4>
        <p>Bu bahis; sıfırı ve rulet çarkında sıfıra en yakın konumda bulunan 6 numarayı kapsar. Bu numaralar: 12, 35, 3, 26, 0, 32 ve 15. Bahiste; 4 fişin konulacağı yerler:</p>
        <ul>
          <li>1 fiş ikili olarak 0/3</li>
          <li>1 fiş ikili olarak 12/15</li>
          <li>1 fiş 26 üzerine (Düz Bahis)</li>
          <li>1 fiş ikili olarak 32/35</li>
        </ul>
        <p>Komşu bahis; belirli bir sayıyı ve rulet çarkında bu sayı ile benzer uzaklıktaki diğer numaraları içermektedir. Komşu bahsi yatırmak için yarış pisti üzerinde bulunan sayılardan birine tıklayınız. Seçili sayı ile sayının sağındaki ve solundaki sayılar üzerine bir fiş yerleştirilir.</p>
      `
    },
    {
      title: 'Özel Bahisler',
      content: `
        <p>Favori bahislerdeki ikinci sekmenin altından "Finale en plein ve Finale a cheval" bahislerini daha kolay bir şekilde koyabilirsiniz.</p>
        <h4>Finale en Plein</h4>
        <ul>
          <li>Finale en plein 0 – Her birine 1 fiş yerleştirilecek şekilde 0+10+20+30 numaralarını içeren 4 fişlik bir bahis</li>
          <li>Finale en plein 1 – Her birine 4 fiş yerleştirilecek şekilde 1+11+21+31 numaralarını içeren 1 fişlik bir bahis</li>
          <li>Finale en plein 2 – Her birine 1 fiş yerleştirilecek şekilde 2+12+22+32 numaralarını içeren 4 fişlik bir bahis</li>
          <li>Finale en plein 3 – Her birine 1 fiş yerleştirilecek şekilde 3+13+23+33 numaralarını içeren 4 fişlik bir bahis</li>
          <li>Finale en plein 4 – Her birine 4 fiş yerleştirilecek şekilde 4+14+24+34 numaralarını içeren 1 fişlik bir bahis</li>
          <li>Finale en plein 5 – Her birine 1 fiş yerleştirilecek şekilde 5+15+25+35 numaralarını içeren 4 fişlik bir bahis</li>
          <li>Finale en plein 6 – Her birine 1 fiş yerleştirilecek şekilde 6+16+26+36 numaralarını içeren 4 fişlik bir bahis</li>
          <li>Finale en plein 7 – Her birine 1 fiş yerleştirilecek şekilde 7+17+27 numaralarını içeren 3 fişlik bir bahis</li>
          <li>Finale en plein 8 – Her birine 1 fiş yerleştirilecek şekilde 8+18+28 numaralarını içeren 3 fişlik bir bahis</li>
          <li>Finale en plein 9 – Her birine 1 fiş yerleştirilecek şekilde 9+19+29 numaralarını içeren 3 fişlik bir bahis</li>
        </ul>
        <h4>Finale a Cheval</h4>
        <ul>
          <li>Finale a cheval 0/3 – Her birine 1 fiş yerleştirilecek şekilde 0/3+10/13+20/23+30/33 numaralarını içeren 4 fişlik bir bahis</li>
          <li>Finale a cheval 1/4 – Her birine 1 fiş yerleştirilecek şekilde 1/4+11/14+21/24+31/34 numaralarını içeren 4 fişlik bir bahis</li>
          <li>Finale a cheval 2/5 – Her birine 1 fiş yerleştirilecek şekilde 2/5+12/15+22/25+32/35 numaralarını içeren 4 fişlik bir bahis</li>
          <li>Finale a cheval 3/6 – Her birine 1 fiş yerleştirilecek şekilde 3/6+13/16+23/26+33/36 numaralarını içeren 4 fişlik bir bahis</li>
          <li>Finale a cheval 4/7 – Her birine 1 fiş yerleştirilecek şekilde 4/7+14/17+24/27+34 numaralarını içeren 4 fişlik bir bahis</li>
          <li>Finale a cheval 5/8 – Her birine 1 fiş yerleştirilecek şekilde 5/8+15/18+25/28+35 numaralarını içeren 4 fişlik bir bahis</li>
          <li>Finale a cheval 6/9 – Her birine 1 fiş yerleştirilecek şekilde 6/9+16/19+26/29+36 numaralarını içeren 4 fişlik bir bahis</li>
          <li>Finale a cheval 7/10 – Her birine 1 fiş yerleştirilecek şekilde 7/10+17/20+27/30 numaralarını içeren 3 fişlik bir bahis</li>
          <li>Finale a cheval 8/11 – Her birine 1 fiş yerleştirilecek şekilde 8/11+18/21+28/31 numaralarını içeren 3 fişlik bir bahis</li>
          <li>Finale a cheval 9/12 – Her birine 1 fiş yerleştirilecek şekilde 9/12+19/22+29/32 numaralarını içeren 3 fişlik bir bahis</li>
        <ul>
      `
    },
    {
      title: 'Ödemeler',
      content: `
        <p>Alacağınız ödeme koymuş olduğunuz bahis türüne bağlı olarak değişmektedir.</p>
        <h4>İç Bahisler</h4>
        <div class="table--v2">
          <table>
            <thead>
              <tr>
                <th>Bahis Türü</th>
                <th>Ödeme</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Düz Bahis</td>
                <td>35:1</td>
              </tr>
              <tr>
                <td>İkili</td>
                <td>17:1</td>
              </tr>
              <tr>
                <td>Üçlü</td>
                <td>11:1</td>
              </tr>
              <tr>
                <td>Dörtlü</td>
                <td>8:1</td>
              </tr>
              <tr>
                <td>Altılı</td>
                <td>5:1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4>Dış Bahisler</h4>
        <div class="table--v2">
          <table>
            <thead>
              <tr>
                <th>Bahis Türü</th>
                <th>Ödeme</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sütun</td>
                <td>2:1</td>
              </tr>
              <tr>
                <td>Düzine</td>
                <td>2:1</td>
              </tr>
              <tr>
                <td>Kırmızı/Siyah</td>
                <td>1:1</td>
              </tr>
              <tr>
                <td>Çift/Tek</td>
                <td>1:1</td>
              </tr>
              <tr>
                <td>1−18/19−36</td>
                <td>1:1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>* Arıza oluşması durumunda tüm ödemeler ve oyunlar geçersiz olacaktır!</p>
      `
    },
    {
      title: 'Bağlantı Kesintisi Politikası',
      content: 'Bir oyun turunda bağlantınız koparsa koyulan bahisler geçerli olur ve yokluğunuzda bahisle rdağıtılır. Bağlantınızı yeniden sağlandığınızda bahis sonuçlarına "Geçmiş"" penceresinden ulaşabilirsiniz.'
    },
    {
      title: 'Hata Yönetimi',
      content: 'Oyunda, sistemde veya oyun prosedüründe bir hata varsa, stüdyo yöneticisi bilgilendirilirken oyun turu geçiçi olarak duraklatılacaktır. Siz ve diğer oyuncularımız sorunun incelendiği konusunda chat aracılığıyla bilgilendirileceksiniz. Stüdyo yöneticisi hatayı hızlı bir şekilde çözebilirse oyun turu normal şekilde devam edecektir. Anında çözüm mümkün değil ise, oyun turu iptal edilecek ve oyun turuna katılan tüm oyunculara bahisleri iade edilecektir.'
    }
  ],
  bonus: {
    activeListTitle: 'Bonus Listesi',
    wallet: 'Bonus Cüzdanı',
    walletDesc: 'Kullanılabilir toplam bonus cüzdanı',
    useAuto: 'Otomatik Kullan',
    dailyBonus: 'Günlük Bonus',
    welcomeBonus: 'Hoşgeldin Bonusu',
    eachXBet: 'Her {{count}} Bahise Hediye',
    eachXBetDesc: '{{count}} bahis sonra hediye bahis',
    eachXBetWarning: 'Bonusunuzu bahis yapılmamış bir kart üzerinde kullanabilirsiniz.',
    eachXBetRemain: '{{count}} adet kart satın aldınız.',
    turnoverRemain: "Çevrimi tamamlamak için {{remain}} <i class='fa fa-{{currency}}'></i> daha cüzdanınızdan oynamalısınız.",
    standingEarnings: 'Bekleyen Çevrimler',
    bonusAvailable: 'Bonusunuzu kullanabilirsiniz.',
    turnoverReward: 'Çevrim kazanımı',
    autoUseConfirmations: {
      bonus: 'Sonraki bahislerinizde bu bonus otomatik olarak kullanılmayacaktır, onaylıyor musunuz?',
      wallet: 'Sonraki bahislerinizde bonus cüzdanınız otomatik olarak kullanılmayacaktır, onaylıyor musunuz?'
    },
    rules: {
      menuTitle: 'Bonus Kuralları',
      general: {
        title: 'Genel Bonus Kuralları',
        content: '<p>Promosyon şartlarını ve kazançlarını kötüye kullanmaya yönelik hesap veya bahis hareketlerinin tespit edilmesi durumunda, bonus ve bonus kazançlarının iptal edilip edilmeyeceğine dair yetkili karar merci LiveGames yönetimi olacaktır.</p><p>LiveGames, promosyon ile ilgili kuralları, sebep göstermeksizin değiştirme ve güncelleme hakkını saklı tutar.</p><p>Aşağıdaki durumlarda tespit edilen hesaplara bonus ödemesi yapılmaz:<ul><li>Aynı ismi paylaşan hesaplar</li><li>Aynı aileye/eve ait hesaplar</li><li>Aynı IP’yi paylaşan hesaplar</li><li>Aynı kişisel bilgileri içeren hesaplar (e-mail, telefon numarası, kredi kartı, ödeme yöntemleri)</li><li>Aynı bilgisayardan kullanılan hesaplar</li><li>Aynı kişiye ait birden çok hesap</li><li>Herhangi bir hile girişiminin kanıtı</li><li>Genel bonus kural ve şartlarının ihlali</li></ul></p><p></p>LiveGames gerekli olması halinde kullanıcıdan Kimlik, İkamet Belgesi vb. isteme hakkına sahiptir, bu belgelerin kullanıcı tarafından ibraz edilmemesi durumunda oyuncunun kazançları bloke edilebilir. Eğer bir oyuncunun birden fazla hesap sahibi olduğuna dair kanıt veya şüphe var ise bonus yatırılmayacaktır, bonus yatırıldıktan sonra güvenlik departmanı tarafından tespit edilen bağlantılı hesaplar süresiz olarak kapatılacak ve tüm bakiyesi bloke edilecektir.</p><p>Bonus herhangi bir organize olmuş bonus toplama şebekesi ile ilişkisi olmayan tek hesap sahibi gerçek kullanıcılar içindir.</p><p>Promosyonlardan yararlanmak isteyen kullanıcılar, ilgili kural ve şartları okuduklarını ve kabul ettiklerini teyit etmiş sayılacaklardır.</p>'
      },
      welcome: {
        title: 'Hoşgeldin Bonusu Kullanım Kuralları',
        content: '<ul><li>Oyunlara ilk kez giren her kullanıcı için "Hoşgeldin Bonusu" otomatik yüklenecektir.</li><li>Yapılan bahis miktarı, oda kuralları gereği minimum bahis miktarının altında ise kalan miktar reel bakiyeden çekilecektir. </li><li>Bonus ile kazanılan ödülü kullanabilmek için kazanım miktarının {{multiply}} katını reel bakiye ile çevrim şartı gerekmektedir.</li><li>Hoşgeldin Bonusu çevrimi {{day}} gün içinde tamamlanmalıdır. Bu süre içinde çevrim şartı tamamlanmayan bonusların kazançları sistem tarafından iptal edilir.</li><li>Hoşgeldin Bonusu ile kazanılan ödül, reel paraya çevrilememektedir; çevrimini tamamladıktan sonra Bonus Cüzdanında biriken miktarı, reel para gibi kullanabilirsiniz.</li><li>Bonus Cüzdanından yapılan harcamalar ile kazanılan ödüller için çevrim şartı söz konusu değildir.</li><li>Bu promosyon 01.08.2019 tarihinden itibaren geçerlidir.</li><li>Tüm bonuslarda Genel Bonus Kuralları geçerlidir.</li></ul>'
      },
      eachxsession: {
        title: 'Her {{each}} Bahise %{{percent}} Bonus',
        content: '<ul><li>Her <strong>{{each}}</strong> bahisinize <strong>%{{percent}}</strong> bonus anında hediye edilmektedir.</li><li>Bu bonus ile Tombala oyununda bulunan ( ilk 5 kartta 1. çinko, ilk 15 kartta 1. çinko ve Tulum ödülleri ) özel ödüller kazanılamaz.</li><li>Bu bonus ile kazanılan ödüllerin herhangi bir çevirim şartı yoktur. </li><li>Kazanılan bonuslar geçerli seans içinde kullanılmadığı taktirde sonraki seansa devredilmeyecektir.</li><li>Bu promosyon 01.08.2019 tarihinden itibaren geçerlidir.</li><li>Tüm bonuslarda Genel Bonus Kuralları geçerlidir.</li></ul>'
      },
      eachxbet: {
        title: 'Her {{each}} Bahise %{{percent}} Bonus',
        content: '<ul><li>Her <strong>{{each}}</strong> bahisinize <strong>%{{percent}}</strong> bonus anında hediye edilmektedir.</li><li>Bu bonus ile Tombala oyununda bulunan ( ilk 5 kartta 1. çinko, ilk 15 kartta 1. çinko ve Tulum ödülleri ) özel ödüller kazanılamaz.</li><li>Bu bonus ile kazanılan ödüllerin herhangi bir çevirim şartı yoktur. </li><li>Kazanılan bonuslar geçerli seans içinde kullanılmadığı taktirde sonraki seansa devredilmeyecektir.</li><li>Bu promosyon 01.08.2019 tarihinden itibaren geçerlidir.</li><li>Tüm bonuslarda Genel Bonus Kuralları geçerlidir.</li></ul>'
      }
    }
  },
  statistics: {
    title: 'İSTATİSTİKLER',
    menuTitle: 'İstatistikler',
    tab1: 'Standart',
    tab2: 'Sıcaklık',
    tab3: 'Canlı Bahis',
    tab4: 'Bölgeler',

    heat: 'Sıcaklık'

  },
  favouriteBets: {
    title: 'Favori Bahisler',
    titleUppercase: 'FAVORİ BAHİSLER',
    special: {
      title: 'Özel Bahisler',
      finaleEnPlein: 'Finale En Plein',
      finalesACheval: 'Finales A Cheval',
      fullBets: 'Tam Bahisler'
    },
    save: 'SON BAHSİ KAYDET',
    noBet: 'Son oynanan bahis bulunmuyor',
    chip: 'Fiş'
  },
  chat: {
    title: 'Chat',
    clickForChat: 'SOHBET İÇİN TIKLAYIN ',
    input: {
      placeholder: 'Send Message'
    }
  },
  betHistory: {
    noBet: 'Henüz bahsiniz yoktur.',
    title: 'Bahis Geçmişi',
    titleUppercase: 'BAHİS GEÇMİŞİ',
    session: 'Seans',
    bet: 'Bahis',
    totalBet: 'Toplam Bahis',
    totalGain: 'Toplam Kazanç',
    result: 'Sonuç',
    black: 'Siyah',
    red: 'Kırmızı',
    even: 'Çift',
    odd: 'Tek',
    clear: 'Temizle',
    filter: 'Filtrele',
    status: {
      title: 'Durum',
      inProgress: 'Bahis işleniyor.',
      accepted: 'Ödeme alındı.',
      paymentError: 'Ödeme alınamadı.',
      rewardInProgress: 'Ödül gönderim aşamasında.',
      betClosed: 'Ödül kazanılamadı.',
      rewardSent: 'Ödül kazanıldı.',
      rewardError: 'Ödül gönderim hatası',
      canceled: 'İptal'
    },
    date: 'Tarih',
    detail: {
      title: 'Bahis Detayı',
      titleUppercase: 'BAHİS DETAYI',
      link: 'Detaylı Gör',
      turnBack: 'Geri Dön'
    },
    room: {
      name: 'Oda',
      bcroulettetestfrench: 'French Room'
    },
    searchBySessionNumber: 'Seans numarasıyla arayın...'

  },
  help: {
    title: 'Yardım'
  },
  limits: {
    title: 'Limitler ve Ödemeler',
    titleUppercase: 'LİMİTLER VE ÖDEMELER',
    roomName: 'Masa Adı',
    bet: 'Bahis',
    betLimit: 'Bahis Limiti',
    payment: 'Ödeme',
    sessionNo: 'Seans No'
  },
  settings: {
    title: 'Ayarlar',
    titleUppercase: 'AYARLAR',
    language: 'Dil Seçimi',
    muteChat: 'Oyunculardan Gelen Mesajları Gizle',
    autoVideo: 'Oto-Video Modu',
    videoVolume: 'Yayın Sesi',
    gameSounds: 'Oyun Sesleri',
    warningSounds: 'Uyarı Sesleri',
    voiceIsOpen: 'Ses Açık',
    voiceIsClose: 'Ses Kapalı',
    chatIsOpen: 'Sohbet Açık',
    chatIsClose: 'Sohbet Kapalı'
  },
  errors: {
    PURCHASE_DISABLED: 'Oyun kısa bir süreliğine bahis yapmaya kapanmıştır.',
    USER_NOT_FOUND: 'Kullanıcı bulunamadı.',
    BETS_NOT_FOUND: 'Bahis bulunamadı.',
    USER_LOCKED: 'Kilitli kullanıcı.',
    INSUFFICIENT_FUNDS: 'Yetersiz bakiye.',
    BALANCE_NOT_ENOUGH: 'Yetersiz bakiye.',
    MAX_STAKE_LIMIT: 'Maksimum bahis limiti!',
    BONUS_ERROR: 'Bonus kullanılamadı.',
    USER_SESSION_NOT_FOUND: 'Kullanıcı oturumu sona erdi, lütfen sayfayı yenileyiniz.',
    BONUS_AMOUNT_ERROR: 'Bonus kullanılamadı.',
    BET_CLOSED: 'Bahisler kapandı.',
    MAX_BET_COUNT: 'Maksimum bahis limitine ulaşıldı, daha fazla bahis yapamazsınız.',
    MAX_BETONCARD_COUNT: 'Maksimum karta bahis limitine ulaşıldı, daha fazla karta bahis yapamazsınız.',
    BONUS_EXCEED_AMOUNT: 'Bonus hesaplanamadı, bahisleriniz iptal edilmiştir.',
    BONUS_EXCEED_BET: 'Bonus kullanım hatası, bahisleriniz iptal edilmiştir.',
    INVALID_SIGN_USAGE: 'İnternet bağlantınız geçici bir kesintiye uğramış olabilir, tekrar bağlanılıyor...',
    INVALID_RESPONSE_ID: 'Bahisleriniz onaylanmamıştır.',
    INVALID_BET_STATE: 'Bahisler kapandı.',
    TOO_MANY_REQUEST: 'Çok fazla istek yaptınız, lütfen bekleyiniz...',
    INVALID_TRANSACTION: 'Bahisleriniz onaylanmadı, lütfen sonraki seans tekrar deneyiniz.',
    TRANSACTION_NOT_APPROVED: 'Bahisleriniz onaylanmadı, lütfen sonraki seans tekrar deneyiniz.',
    UNEXPECTED_ERROR: 'Beklenmedik bir hata oluştu, lütfen daha sonra tekrar deneyiniz.',
    REARRANGE_TRX_FAILLED: 'Tekrar denememize rağmen bahisleriniz onaylanmamıştır.',
    TRANSACTION_NOT_FOUND: 'Beklenmedik bir hata oluştu, lütfen daha sonra tekrar deneyiniz.',
    TRANSACTION_ERROR: 'Beklenmedik bir hata oluştu, lütfen daha sonra tekrar deneyiniz.',
    UNEXPECTED_TRANSACTION_ERROR: 'Beklenmedik bir hata oluştu, lütfen daha sonra tekrar deneyiniz.',
    CONNECTION_DISCONNECTED: 'Bağlantı sona erdi, lütfen yenileyiniz.',
    RECONNECT: 'Tekrar bağlanılıyor...',
    RECONNECTING: 'Tekrar bağlanılıyor...',
    REPEATLASTBET_EMPTY: 'Bir önceki seansta herhangi bir bahsiniz bulunmamaktadır.',
    REPEATLASTBET_SUCCESS: 'Bir önceki seans bahisleriniz tekrarlanmıştır.'
  },
  warnings: {
    sessionExpireWarning: 'Oturumunuz kısa süre sonra sonlanacaktır, devam etmek istiyor musunuz?',
    rearrangeFailed: 'Numaralı kartlarınız bakiye yetersizliğinden dolayı onaylanmamıştır.',
    broadcastFailed: 'Canlı yayına devam etmek için lütfen <strong>OYNAT</strong> butonuna basın.'
  },
  modals: {
    continue: 'Devam Et',
    randomBet: {
      title: 'Rastgele Bahis',
      text: '{{amount}}{{currency}} tutarında {{count}} adet farklı karta bahis yapılacaktır. Onaylıyor musunuz?'
    },
    refreshPage: 'Oturumunuz sona erdi, lütfen sayfayı yenileyiniz.',
    realityCheckConfirmation: 'Oturumunuz sonlandırılacaktır, devam etmek istiyor musunuz?'
  },
  fullScreen: {
    title: 'Tam Ekran'
  }
}

export default tr
