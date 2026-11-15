/* ============================================
   KAVİ İLETİŞİM — iletişim bilgileri
   Telefon, WhatsApp veya çalışma saatlerini
   değiştirmek için yalnızca bu CONFIG bölümünü
   düzenleyin. Metinlerin çevirisi aşağıdadır.
   ============================================ */
const CONFIG = {
  name: "KAVİ İLETİŞİM",
  phoneDisplay: "0544 786 55 26",
  phoneTel: "+905447865526",
  whatsappUrl: "https://wa.me/905447865526",
  address: "Gökalp Mah. 51. Sokak No: 9-11 Zeytinburnu / İstanbul",
  mapQuery: "Gökalp Mah. 51. Sokak No: 9-11 Zeytinburnu İstanbul",
  hours: {
    weekdaysOpen: "09:00",
    weekdaysClose: "18:00",
    saturdayOpen: "10:00",
    saturdayClose: "15:00",
    sundayClosed: true
  }
};

/* Saat metinleri CONFIG değerlerinden üretilir. */
function formatHours(lang) {
  const h = CONFIG.hours;
  if (lang === "en") {
    return `Monday–Friday ${h.weekdaysOpen}–${h.weekdaysClose}, Saturday ${h.saturdayOpen}–${h.saturdayClose}, Sunday closed`;
  }
  if (lang === "ru") {
    return `Пн–Пт ${h.weekdaysOpen}–${h.weekdaysClose}, сб ${h.saturdayOpen}–${h.saturdayClose}, вс выходной`;
  }
  return `Hafta içi ${h.weekdaysOpen}–${h.weekdaysClose}, Cumartesi ${h.saturdayOpen}–${h.saturdayClose}, Pazar kapalı`;
}

function formatFaqHours(lang) {
  if (lang === "en") {
    return `Gökalp Mah. 51. Sokak No: 9-11 Zeytinburnu / İstanbul. Across the street from Kristal Döviz, next to Merve Kozmetik. ${formatHours("en")}.`;
  }
  if (lang === "ru") {
    return `Gökalp Mah. 51. Sokak No: 9-11, Зейтинбурну / Стамбул. Напротив Kristal Döviz, рядом с Merve Kozmetik. ${formatHours("ru")}.`;
  }
  return `Gökalp Mah. 51. Sokak No: 9-11 Zeytinburnu / İstanbul. Kristal Döviz karşı sokağı, Merve Kozmetik yanı. ${formatHours("tr")}.`;
}

const I18N = {
  tr: {
    skip: "İçeriğe geç",
    brandSub: "Para transferi",
    navServices: "Hizmetler",
    navHow: "Nasıl çalışır",
    navArticles: "Yazılar",
    navFaq: "SSS",
    navContact: "İletişim",
    menu: "Menü",
    menuToggle: "Menüyü aç",
    heroKicker: "Zeytinburnu · Para transferi dükkânı",
    heroLede: "Yurt dışına para göndermek veya yurt dışından para almak için Zeytinburnu’ndaki dükkânımızdayız. KoronaPay (Zolotaya Korona), Ria, UPT, Kwikpay, MoneyGram ve Intel Express ile çalışıyoruz.",
    ctaCall: "Telefon edin",
    ctaBarCall: "Ara",
    ctaWhatsapp: "WhatsApp",
    ctaWhatsappWrite: "WhatsApp’tan yazın",
    ctaMap: "Yol tarifi",
    ctaBarMap: "Harita",
    labelAddress: "Adres:",
    labelHours: "Çalışma saatleri:",
    labelPhone: "Telefon:",
    hours: "",
    servicesTitle: "Hizmetlerimiz",
    servicesIntro: "Dükkânımızda yurt dışına para gönderebilir, yurt dışından gelen parayı teslim alabilirsiniz. Ücret, kur ve süreler firmaya, tutara ve ülkeye göre değişir; güncel bilgi için dükkânımızdan sorun.",
    sendTitle: "Yurt dışına para gönderme",
    sendText: "Geçerli kimliğiniz, alıcının adı ve ülkesi ile dükkânımıza gelin. Size uygun firmayı birlikte seçeriz; işlemden sonra paylaşmanız gereken referans numarasını alırsınız.",
    recvTitle: "Yurt dışından para alma",
    recvText: "Gönderenin ilettiği referans numarası ve geçerli kimliğinizle uğrayın. Ödeme, ilgili firmanın kurallarına göre yapılır.",
    companiesTitle: "Çalıştığımız firmalar",
    companiesIntro: "Aşağıdaki para transferi firmaları ile hizmet veriyoruz.",
    badgePartner: "Firma",
    koronapayNote: "Zolotaya Korona. Türkiye’de PayPorter üzerinden hizmet verir.",
    companyGeneric: "Yurt dışına gönderme ve yurt dışından alma işlemleri için.",
    howTitle: "Nasıl çalışır?",
    howIntro: "İşlemler dükkânımızda, yüz yüze yapılır. Aşağıdaki adımlar genel bir yol gösterir; her firmanın kendi kuralları olabilir.",
    step1Title: "Dükkâna gelin",
    step1Text: "Geçerli kimliğinizi (kimlik kartı veya pasaport) yanınıza alın.",
    step2Title: "Bilgileri paylaşın",
    step2Text: "Gönderiyorsanız alıcının adı ve ülkesini söyleyin. Alıyorsanız referans numarasını getirin.",
    step3Title: "İşlemi tamamlayın",
    step3Text: "Uygun firmayı birlikte seçeriz. Gönderimde size verilen referans numarasını alıcıyla paylaşın.",
    docsTitle: "Gerekli belgeler",
    docsIntro: "Yanınızda bulundurmanız gerekenler:",
    doc1Title: "Geçerli kimlik",
    doc1Text: "T.C. kimlik kartı veya pasaport.",
    doc2Title: "Alıcı bilgisi",
    doc2Text: "Para gönderirken alıcının adı ve ülkesi.",
    doc3Title: "Referans numarası",
    doc3Text: "Para alırken gönderenin size ilettiği işlem kodu.",
    articlesTitle: "Bilgilendirici yazılar",
    articlesIntro: "Dükkânımıza gelmeden önce işinize yarayabilecek kısa notlar.",
    articleLabel: "Rehber",
    art1Title: "Dükkâna gelmeden önce",
    art1Text: "Kimliğinizin geçerli olduğundan emin olun. Para gönderiyorsanız alıcının adını ve ülkesini doğru yazın; para alıyorsanız referans numarasını eksiksiz getirin. Güncel ücret ve süre için dükkânımızdan sorun, bu bilgiler firmaya göre değişir.",
    art2Title: "Referans numarası neden önemli?",
    art2Text: "Referans numarası, transferi bulan işlem kodudur. Gönderen bu numarayı alıcıya iletir; alıcı da parayı teslim alırken kimliğiyle birlikte bu kodu gösterir. Numarayı doğru ve eksiksiz paylaşmak, işlemin sorunsuz ilerlemesine yardımcı olur.",
    art3Title: "Bizi Zeytinburnu’nda nasıl bulursunuz?",
    art3Text: "Dükkânımız Gökalp Mahallesi, 51. Sokak No: 9-11, Zeytinburnu / İstanbul adresindedir. Kristal Döviz’in karşı sokağında, Merve Kozmetik’in yanındayız. Aşağıdaki haritadan yol tarifi alabilir, telefon veya WhatsApp ile de yazabilirsiniz.",
    faqTitle: "Sık sorulan sorular",
    faqIntro: "Kısa yanıtlar. Ücret, kur veya süre gibi değişken bilgiler için lütfen bizi arayın.",
    faq1Q: "Hangi firmalarla çalışıyorsunuz?",
    faq1A: "KoronaPay (Zolotaya Korona), Ria, UPT, Kwikpay, MoneyGram ve Intel Express. KoronaPay, Türkiye’de PayPorter üzerinden hizmet verir.",
    faq2Q: "Yanımda ne getirmeliyim?",
    faq2A: "Geçerli kimlik (kimlik kartı veya pasaport) yeterlidir. Gönderiyorsanız alıcının adı ve ülkesini, alıyorsanız referans numarasını da getirin.",
    faq3Q: "Hem gönderme hem alma yapıyor musunuz?",
    faq3A: "Evet. Yurt dışına para gönderebilir, yurt dışından gelen parayı da dükkânımızdan teslim alabilirsiniz.",
    faq4Q: "Ücret ve süre nedir?",
    faq4A: "Bunlar firmaya, tutara ve ülkeye göre değişir. Bu sitede sabit bir ücret veya süre yazmıyoruz. Güncel bilgi için dükkânımıza gelin, telefon edin veya WhatsApp’tan yazın.",
    faq5Q: "Neredesiniz ve çalışma saatleriniz nedir?",
    faq5A: "",
    contactTitle: "İletişim",
    contactIntro: "Bize telefon veya WhatsApp ile ulaşabilir, haritadan yol tarifi alabilirsiniz.",
    directions: "Kristal Döviz’in karşı sokağı, Merve Kozmetik yanı.",
    footerNote: "Zeytinburnu / İstanbul"
  },
  en: {
    skip: "Skip to content",
    brandSub: "Money transfer",
    navServices: "Services",
    navHow: "How it works",
    navArticles: "Guides",
    navFaq: "FAQ",
    navContact: "Contact",
    menu: "Menu",
    menuToggle: "Open menu",
    heroKicker: "Zeytinburnu · Money transfer shop",
    heroLede: "Visit our shop in Zeytinburnu to send money abroad or receive money from abroad. We work with KoronaPay (Zolotaya Korona), Ria, UPT, Kwikpay, MoneyGram and Intel Express.",
    ctaCall: "Call us",
    ctaBarCall: "Call",
    ctaWhatsapp: "WhatsApp",
    ctaWhatsappWrite: "Message us on WhatsApp",
    ctaMap: "Directions",
    ctaBarMap: "Map",
    labelAddress: "Address:",
    labelHours: "Opening hours:",
    labelPhone: "Phone:",
    hours: "",
    servicesTitle: "Our services",
    servicesIntro: "You can send money abroad or collect an incoming transfer at our shop. Fees, exchange rates and delivery times depend on the company, the amount and the country. Please ask us for current information.",
    sendTitle: "Sending money abroad",
    sendText: "Come to the shop with a valid ID, the recipient’s name and their country. We will help you choose a suitable company. After the transfer you will receive a reference code to share with the recipient.",
    recvTitle: "Receiving money from abroad",
    recvText: "Bring the reference code given by the sender and a valid ID. Payout follows the rules of the company used for the transfer.",
    companiesTitle: "Companies we work with",
    companiesIntro: "We provide service through the money-transfer companies below.",
    badgePartner: "Partner",
    koronapayNote: "Zolotaya Korona. In Turkey, KoronaPay operates under PayPorter.",
    companyGeneric: "For sending money abroad and receiving incoming transfers.",
    howTitle: "How it works",
    howIntro: "Transfers are handled in person at our shop. The steps below are a general guide; each company may have its own rules.",
    step1Title: "Visit the shop",
    step1Text: "Bring a valid ID (national ID card or passport).",
    step2Title: "Share the details",
    step2Text: "If you are sending, give the recipient’s name and country. If you are receiving, bring the reference code.",
    step3Title: "Complete the transfer",
    step3Text: "We will help you choose a suitable company. When sending, share the reference code you receive with the recipient.",
    docsTitle: "Required documents",
    docsIntro: "Please bring the following:",
    doc1Title: "Valid ID",
    doc1Text: "Turkish ID card or passport.",
    doc2Title: "Recipient details",
    doc2Text: "The recipient’s name and country when you are sending money.",
    doc3Title: "Reference code",
    doc3Text: "The transaction code the sender gave you when you are receiving money.",
    articlesTitle: "Helpful guides",
    articlesIntro: "Short notes that may help before you visit.",
    articleLabel: "Guide",
    art1Title: "Before you come in",
    art1Text: "Make sure your ID is valid. If you are sending money, write the recipient’s name and country correctly. If you are receiving money, bring the full reference code. Ask us for current fees and timing; these vary by company.",
    art2Title: "Why the reference code matters",
    art2Text: "The reference code is the number used to find the transfer. The sender shares it with the recipient, and the recipient shows it together with their ID when collecting the money. Sharing the code accurately helps the transfer go smoothly.",
    art3Title: "How to find us in Zeytinburnu",
    art3Text: "Our shop is at Gökalp Mahallesi, 51. Sokak No: 9-11, Zeytinburnu / İstanbul. We are across the street from Kristal Döviz, next to Merve Kozmetik. Use the map below for directions, or contact us by phone or WhatsApp.",
    faqTitle: "Frequently asked questions",
    faqIntro: "Short answers. For fees, rates or timing, which can change, please call us.",
    faq1Q: "Which companies do you work with?",
    faq1A: "KoronaPay (Zolotaya Korona), Ria, UPT, Kwikpay, MoneyGram and Intel Express. In Turkey, KoronaPay operates under PayPorter.",
    faq2Q: "What should I bring?",
    faq2A: "A valid ID (ID card or passport) is required. If you are sending, also bring the recipient’s name and country. If you are receiving, bring the reference code.",
    faq3Q: "Can I both send and receive money?",
    faq3A: "Yes. You can send money abroad and collect incoming transfers at our shop.",
    faq4Q: "What are the fees and how long does it take?",
    faq4A: "These depend on the company, the amount and the country. We do not list fixed fees or times on this site. Please visit, call or message us on WhatsApp for current information.",
    faq5Q: "Where are you, and what are your hours?",
    faq5A: "",
    contactTitle: "Contact",
    contactIntro: "Call or message us on WhatsApp, or use the map for directions.",
    directions: "Across the street from Kristal Döviz, next to Merve Kozmetik.",
    footerNote: "Zeytinburnu / Istanbul"
  },
  ru: {
    skip: "Перейти к содержанию",
    brandSub: "Денежные переводы",
    navServices: "Услуги",
    navHow: "Как это работает",
    navArticles: "Статьи",
    navFaq: "Вопросы",
    navContact: "Контакты",
    menu: "Меню",
    menuToggle: "Открыть меню",
    heroKicker: "Зейтинбурну · Пункт денежных переводов",
    heroLede: "В нашем пункте в Зейтинбурну можно отправить деньги за границу или получить перевод. Мы работаем с KoronaPay (Золотая Корона), Ria, UPT, Kwikpay, MoneyGram и Intel Express.",
    ctaCall: "Позвонить",
    ctaBarCall: "Звонок",
    ctaWhatsapp: "WhatsApp",
    ctaWhatsappWrite: "Написать в WhatsApp",
    ctaMap: "Как добраться",
    ctaBarMap: "Карта",
    labelAddress: "Адрес:",
    labelHours: "Часы работы:",
    labelPhone: "Телефон:",
    hours: "",
    servicesTitle: "Наши услуги",
    servicesIntro: "В пункте можно отправить деньги за границу или получить входящий перевод. Комиссия, курс и сроки зависят от компании, суммы и страны. Актуальную информацию уточняйте у нас.",
    sendTitle: "Отправка денег за границу",
    sendText: "Приходите с действующим документом, именем получателя и страной назначения. Мы поможем выбрать подходящую компанию. После операции вы получите номер перевода (референс), который нужно передать получателю.",
    recvTitle: "Получение перевода",
    recvText: "Приходите с номером перевода, который сообщил отправитель, и с действующим документом. Выплата производится по правилам выбранной компании.",
    companiesTitle: "Компании, с которыми мы работаем",
    companiesIntro: "Мы обслуживаем переводы через компании, указанные ниже.",
    badgePartner: "Компания",
    koronapayNote: "Золотая Корона. В Турции KoronaPay работает через PayPorter.",
    companyGeneric: "Для отправки денег за границу и получения входящих переводов.",
    howTitle: "Как это работает",
    howIntro: "Операции выполняются лично в нашем пункте. Ниже — общий порядок; у каждой компании могут быть свои правила.",
    step1Title: "Приходите в пункт",
    step1Text: "Возьмите с собой действующий документ (удостоверение личности или паспорт).",
    step2Title: "Сообщите данные",
    step2Text: "Если отправляете — назовите имя получателя и страну. Если получаете — принесите номер перевода.",
    step3Title: "Завершите операцию",
    step3Text: "Мы поможем выбрать подходящую компанию. При отправке передайте получателю выданный вам номер перевода.",
    docsTitle: "Необходимые документы",
    docsIntro: "Возьмите с собой:",
    doc1Title: "Действующий документ",
    doc1Text: "Удостоверение личности (кимлик) или паспорт.",
    doc2Title: "Данные получателя",
    doc2Text: "Имя и страна получателя, если вы отправляете деньги.",
    doc3Title: "Номер перевода",
    doc3Text: "Референс, который отправитель передал вам, если вы получаете деньги.",
    articlesTitle: "Полезные статьи",
    articlesIntro: "Короткие материалы, которые могут пригодиться перед визитом.",
    articleLabel: "Справка",
    art1Title: "Перед визитом",
    art1Text: "Проверьте, что документ действителен. Если отправляете деньги, точно укажите имя и страну получателя. Если получаете — принесите полный номер перевода. Комиссию и сроки уточняйте у нас: они зависят от компании.",
    art2Title: "Зачем нужен номер перевода",
    art2Text: "Номер перевода (референс) — это код, по которому находят операцию. Отправитель сообщает его получателю, а получатель предъявляет его вместе с документом при выплате. Важно передать номер точно и полностью.",
    art3Title: "Как нас найти в Зейтинбурну",
    art3Text: "Наш пункт находится по адресу: Gökalp Mahallesi, 51. Sokak No: 9-11, Зейтинбурну / Стамбул. Мы напротив Kristal Döviz, рядом с Merve Kozmetik. Маршрут можно посмотреть на карте ниже, также можно позвонить или написать в WhatsApp.",
    faqTitle: "Частые вопросы",
    faqIntro: "Краткие ответы. Комиссию, курс и сроки, которые могут меняться, уточняйте по телефону.",
    faq1Q: "С какими компаниями вы работаете?",
    faq1A: "KoronaPay (Золотая Корона), Ria, UPT, Kwikpay, MoneyGram и Intel Express. В Турции KoronaPay работает через PayPorter.",
    faq2Q: "Что нужно взять с собой?",
    faq2A: "Нужен действующий документ (кимлик или паспорт). Если отправляете — также имя и страна получателя. Если получаете — номер перевода.",
    faq3Q: "Можно и отправлять, и получать деньги?",
    faq3A: "Да. В нашем пункте можно отправить деньги за границу и получить входящий перевод.",
    faq4Q: "Какая комиссия и сколько идёт перевод?",
    faq4A: "Это зависит от компании, суммы и страны. На сайте мы не указываем фиксированную комиссию или сроки. Актуальную информацию уточняйте в пункте, по телефону или в WhatsApp.",
    faq5Q: "Где вы находитесь и какой график работы?",
    faq5A: "",
    contactTitle: "Контакты",
    contactIntro: "Позвоните нам, напишите в WhatsApp или воспользуйтесь картой.",
    directions: "Напротив Kristal Döviz, рядом с Merve Kozmetik.",
    footerNote: "Зейтинбурну / Стамбул"
  }
};

const STORAGE_KEY = "kavi-lang";

function applyConfig() {
  const tel = "tel:" + CONFIG.phoneTel;
  document.querySelectorAll("[data-phone-href]").forEach((el) => {
    el.setAttribute("href", tel);
  });
  document.querySelectorAll("[data-phone-display]").forEach((el) => {
    el.textContent = CONFIG.phoneDisplay;
  });
  document.querySelectorAll("[data-whatsapp-href]").forEach((el) => {
    el.setAttribute("href", CONFIG.whatsappUrl);
  });
  document.querySelectorAll("[data-address]").forEach((el) => {
    el.textContent = CONFIG.address;
  });
  const map = document.getElementById("map");
  if (map) {
    const hl = document.documentElement.lang || "tr";
    map.src =
      "https://maps.google.com/maps?q=" +
      encodeURIComponent(CONFIG.mapQuery) +
      "&hl=" +
      encodeURIComponent(hl) +
      "&z=17&output=embed";
  }
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

function setLanguage(lang) {
  const dict = I18N[lang] || I18N.tr;
  const resolved = I18N[lang] ? lang : "tr";
  document.documentElement.lang = resolved;
  dict.hours = formatHours(resolved);
  dict.faq5A = formatFaqHours(resolved);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === resolved ? "true" : "false");
  });
  try {
    localStorage.setItem(STORAGE_KEY, resolved);
  } catch (err) {
    /* ignore */
  }
  applyConfig();
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initLang() {
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
  });
  let initial = "tr";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && I18N[saved]) initial = saved;
  } catch (err) {
    /* ignore */
  }
  setLanguage(initial);
}

initMenu();
initLang();
