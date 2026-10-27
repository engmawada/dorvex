export type Lang = "ar" | "en"

export const PHONE_LOCAL = "01024413139"
export const PHONE_INTL = "201024413139"

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${PHONE_INTL}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export type ProductKey =
  | "shutterShop"
  | "shutterGarage"
  | "shutterFactory"
  | "shutterWarehouse"
  | "gateWrought"
  | "gateDouble"
  | "gateSliding"
  | "motorSide"
  | "motorCentral"
  | "motorTwoArm"

type ProductText = { name: string; description: string }

export type Dictionary = {
  dir: "rtl" | "ltr"
  switchLabel: string
  switchAria: string
  nav: { home: string; products: string; motors: string; work: string; contact: string }
  menuOpen: string
  menuClose: string
  whatsapp: string
  whatsappAria: string
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    imageAlt: string
    pillars: string[]
  }
  categoryLabel: string
  products: {
    title: string
    subtitle: string
    shutters: { title: string; description: string }
    gates: { title: string; description: string }
  }
  motors: { title: string; subtitle: string; categoryTitle: string; description: string }
  productCta: string
  productInquiry: (name: string) => string
  items: Record<ProductKey, ProductText>
  work: {
    title: string
    subtitle: string
    videos: { title: string; description: string }[]
    unsupported: string
  }
  contact: {
    title: string
    subtitle: string
    phoneLabel: string
    whatsappLabel: string
    whatsappCta: string
    callCta: string
    formTitle: string
    formNote: string
    name: string
    phone: string
    product: string
    productPlaceholder: string
    message: string
    messagePlaceholder: string
    submit: string
    required: string
    invalidPhone: string
    messageHeader: string
    fieldName: string
    fieldPhone: string
    fieldProduct: string
    fieldDetails: string
    opened: string
  }
  footer: { tagline: string; rights: string; quickLinks: string; contact: string }
}

const ar: Dictionary = {
  dir: "rtl",
  switchLabel: "English",
  switchAria: "التبديل إلى اللغة الإنجليزية",
  nav: { home: "الرئيسية", products: "المنتجات", motors: "الموتورات", work: "أعمالنا / الفيديوهات", contact: "تواصل معنا" },
  menuOpen: "فتح القائمة",
  menuClose: "إغلاق القائمة",
  whatsapp: "واتساب",
  whatsappAria: "تواصل مع DORVEX عبر واتساب",
  hero: {
    eyebrow: "DORVEX — أبواب وبوابات أوتوماتيكية",
    title: "حلول متكاملة للشتر والبوابات الأوتوماتيكية",
    subtitle:
      "شتر معدني، بوابات حديد وموتورات أوتوماتيكية للمحلات والجراجات والمصانع والمخازن والفلل — توريد وتركيب بمظهر أنيق وتشغيل سلس.",
    ctaPrimary: "اطلب عرض سعر",
    ctaSecondary: "تصفح المنتجات",
    imageAlt: "شتر معدني أوتوماتيكي مغلق لجراج منزل حديث ليلاً",
    pillars: ["شتر معدني", "بوابات", "موتورات أوتوماتيكية"],
  },
  categoryLabel: "الفئة",
  products: {
    title: "منتجاتنا",
    subtitle: "ثلاث فئات رئيسية تغطي احتياجات المنازل والمنشآت التجارية والصناعية.",
    shutters: {
      title: "الشتر المعدني",
      description: "شتر معدني مصمت للحماية والأمان، بمقاسات وتشطيبات تناسب كل نوع من المنشآت.",
    },
    gates: {
      title: "البوابات",
      description: "بوابات حديد بتصميمات متنوعة تجمع بين المتانة والمظهر الراقي.",
    },
  },
  motors: {
    title: "الموتورات الأوتوماتيكية",
    subtitle: "موتورات لتشغيل الشتر والبوابات أوتوماتيكيًا حسب نوع الفتح.",
    categoryTitle: "الموتورات الأوتوماتيكية",
    description: "اختر نوع الموتور المناسب لطريقة فتح البوابة أو الشتر، وفريقنا يساعدك في الاختيار.",
  },
  productCta: "استفسر عبر واتساب",
  productInquiry: (name) => `مرحبًا DORVEX، أريد الاستفسار عن: ${name}`,
  items: {
    shutterShop: { name: "شتر المحلات التجارية", description: "شتر معدني مصمت لواجهات المحلات والمعارض التجارية." },
    shutterGarage: { name: "شتر الجراجات", description: "شتر معدني لجراجات المنازل والفلل بمظهر نظيف ومتناسق." },
    shutterFactory: { name: "شتر المصانع والمنشآت الصناعية", description: "شتر معدني بمقاسات كبيرة لمداخل المصانع والمنشآت الصناعية." },
    shutterWarehouse: { name: "شتر المخازن والمستودعات", description: "شتر معدني لمداخل المخازن ومناطق التحميل والتخزين." },
    gateWrought: { name: "بوابة حديد مزخرفة", description: "بوابة حديد فورفورجيه بزخارف كلاسيكية للفلل والمداخل." },
    gateDouble: { name: "بوابة مفصلية ذات ضلفتين", description: "بوابة بضلفتين تفتح على مفصلات بتصميم عصري." },
    gateSliding: { name: "بوابة منزلقة", description: "بوابة تنزلق جانبيًا على مجرى أرضي لتوفير المساحة." },
    motorSide: { name: "موتور جانبي", description: "موتور يُركّب بجانب البوابة المنزلقة ويحركها عبر ترس وجريدة مسننة." },
    motorCentral: { name: "موتور مركزي", description: "موتور يُركّب في محور الشتر المعدني، ويُشغَّل بالريموت كنترول." },
    motorTwoArm: { name: "موتور بذراعين", description: "موتوران بذراعين لفتح وغلق ضلفتي البوابة المفصلية." },
  },
  work: {
    title: "أعمالنا / الفيديوهات",
    subtitle: "لقطات حقيقية لتشغيل الشتر والبوابات الأوتوماتيكية.",
    videos: [
      { title: "شتر أوتوماتيكي لمستودع", description: "فتح وغلق شتر معدني أوتوماتيكي لمدخل مستودع." },
      { title: "بوابة مفصلية بموتور ذراعين", description: "فتح وغلق بوابة بضلفتين أوتوماتيكيًا." },
      { title: "بوابة منزلقة بموتور جانبي", description: "تشغيل بوابة منزلقة بموتور جانبي." },
    ],
    unsupported: "متصفحك لا يدعم تشغيل الفيديو.",
  },
  contact: {
    title: "تواصل معنا",
    subtitle: "اتصل بنا أو راسلنا على واتساب، أو املأ نموذج طلب عرض السعر.",
    phoneLabel: "رقم الهاتف",
    whatsappLabel: "واتساب",
    whatsappCta: "راسلنا على واتساب",
    callCta: "اتصل الآن",
    formTitle: "طلب عرض سعر",
    formNote: "عند الإرسال سيتم فتح واتساب برسالة جاهزة تحتوي على بياناتك، ويمكنك مراجعتها قبل إرسالها.",
    name: "الاسم",
    phone: "رقم الهاتف",
    product: "نوع المنتج",
    productPlaceholder: "اختر المنتج",
    message: "تفاصيل الطلب",
    messagePlaceholder: "مثال: المقاسات التقريبية، الموقع، عدد القطع…",
    submit: "إرسال الطلب عبر واتساب",
    required: "هذا الحقل مطلوب",
    invalidPhone: "يرجى إدخال رقم هاتف صحيح",
    messageHeader: "طلب عرض سعر — DORVEX",
    fieldName: "الاسم",
    fieldPhone: "الهاتف",
    fieldProduct: "المنتج",
    fieldDetails: "التفاصيل",
    opened: "تم فتح واتساب برسالتك. إذا لم يُفتح، تأكد من السماح بالنوافذ المنبثقة.",
  },
  footer: {
    tagline: "شتر معدني، بوابات وموتورات أوتوماتيكية.",
    rights: "جميع الحقوق محفوظة.",
    quickLinks: "روابط سريعة",
    contact: "التواصل",
  },
}

const en: Dictionary = {
  dir: "ltr",
  switchLabel: "العربية",
  switchAria: "Switch to Arabic",
  nav: { home: "Home", products: "Products", motors: "Motors", work: "Our Work / Videos", contact: "Contact Us" },
  menuOpen: "Open menu",
  menuClose: "Close menu",
  whatsapp: "WhatsApp",
  whatsappAria: "Contact DORVEX on WhatsApp",
  hero: {
    eyebrow: "DORVEX — Automatic Doors & Gates",
    title: "Premium Roller Shutters, Gates & Automation Solutions",
    subtitle:
      "Metal roller shutters, iron gates and automatic motors for shops, garages, factories, warehouses and villas — supplied and installed with a refined finish and smooth operation.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Browse Products",
    imageAlt: "Closed automatic metal roller shutter on a modern house garage at night",
    pillars: ["Metal Roller Shutters", "Gates", "Automatic Motors"],
  },
  categoryLabel: "Category",
  products: {
    title: "Our Products",
    subtitle: "Three main categories covering residential, commercial and industrial needs.",
    shutters: {
      title: "Metal Roller Shutters",
      description: "Solid metal roller shutters for protection and security, in sizes and finishes suited to every type of property.",
    },
    gates: {
      title: "Gates",
      description: "Iron gates in a range of designs that combine durability with a refined look.",
    },
  },
  motors: {
    title: "Automatic Motors",
    subtitle: "Motors that automate shutters and gates according to how they open.",
    categoryTitle: "Automatic Motors",
    description: "Choose the motor type that matches how your gate or shutter opens — our team will help you choose.",
  },
  productCta: "Ask on WhatsApp",
  productInquiry: (name) => `Hello DORVEX, I would like to ask about: ${name}`,
  items: {
    shutterShop: { name: "Commercial Shop Shutters", description: "Solid metal roller shutters for shop fronts and commercial showrooms." },
    shutterGarage: { name: "Garage Shutters", description: "Metal roller shutters for home and villa garages with a clean, consistent look." },
    shutterFactory: { name: "Factory & Industrial Shutters", description: "Large-format metal roller shutters for factory and industrial facility entrances." },
    shutterWarehouse: { name: "Warehouse & Storage Shutters", description: "Metal roller shutters for warehouse entrances, loading and storage areas." },
    gateWrought: { name: "Decorative Wrought-Iron Gate", description: "Wrought-iron gate with classic ornamental detailing for villas and entrances." },
    gateDouble: { name: "Double-Leaf Hinged Gate", description: "Two-leaf gate that swings open on hinges, with a contemporary design." },
    gateSliding: { name: "Sliding Gate", description: "Gate that slides sideways along a ground track to save space." },
    motorSide: { name: "Side-Mounted Motor", description: "Motor mounted beside a sliding gate, driving it through a gear and toothed rack." },
    motorCentral: { name: "Central Motor", description: "Motor installed on the roller shutter axle and operated by remote control." },
    motorTwoArm: { name: "Two-Arm Motor", description: "A pair of arm motors that open and close both leaves of a hinged gate." },
  },
  work: {
    title: "Our Work / Videos",
    subtitle: "Real footage of automatic shutters and gates in operation.",
    videos: [
      { title: "Automatic Warehouse Shutter", description: "An automatic metal roller shutter opening and closing at a warehouse entrance." },
      { title: "Hinged Gate with Two-Arm Motor", description: "A double-leaf gate opening and closing automatically." },
      { title: "Sliding Gate with Side Motor", description: "A sliding gate operated by a side-mounted motor." },
    ],
    unsupported: "Your browser does not support video playback.",
  },
  contact: {
    title: "Contact Us",
    subtitle: "Call us, message us on WhatsApp, or fill in the quotation request form.",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    whatsappCta: "Message us on WhatsApp",
    callCta: "Call now",
    formTitle: "Request a Quotation",
    formNote: "Submitting opens WhatsApp with a ready-made message containing your details, so you can review it before sending.",
    name: "Name",
    phone: "Phone number",
    product: "Product type",
    productPlaceholder: "Select a product",
    message: "Request details",
    messagePlaceholder: "e.g. approximate dimensions, location, number of units…",
    submit: "Send request via WhatsApp",
    required: "This field is required",
    invalidPhone: "Please enter a valid phone number",
    messageHeader: "Quotation request — DORVEX",
    fieldName: "Name",
    fieldPhone: "Phone",
    fieldProduct: "Product",
    fieldDetails: "Details",
    opened: "WhatsApp has been opened with your message. If it did not open, please allow pop-ups.",
  },
  footer: {
    tagline: "Metal roller shutters, gates and automatic motors.",
    rights: "All rights reserved.",
    quickLinks: "Quick links",
    contact: "Contact",
  },
}

export const dictionaries: Record<Lang, Dictionary> = { ar, en }
