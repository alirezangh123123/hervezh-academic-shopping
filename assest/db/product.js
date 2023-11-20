let $ = document;
const product = [
  {
    id: 1,
    title: "دوره آموزش گوگل آنالیتیکس",
    cover: `assest/img/google-analytics-1-500x500.png`,
    member: 543,
    price: `${345},${999}`,
    main_description_1: `
    دوره آموزشی گوگل آنالیتیکس یک برنامه جامع و کاربردی است که نحوه استفاده از قدرتمندترین ابزار تجزیه و تحلیل وب را به شما آموزش می دهد. با گوگل آنالیتیکس به راحتی می توانید داده های مربوط به بازدیدکنندگان وب سایت خود را تجزیه و تحلیل کنید و تصمیمات بهتری برای بهبود عملکرد وب سایت خود بگیرید.
    `,
    main_description_2: `
    این دوره موضوعاتی مانند راه اندازی Google Analytics، پیکربندی و اتصال آن به وب سایت شما، تجزیه و تحلیل ترافیک وب سایت، درک رفتار کاربر، ردیابی اهداف و تبدیل ها، ایجاد گزارش های سفارشی و موارد دیگر را پوشش می دهد.
    `,
    main_description_3: `
    با شرکت در این دوره، قادر خواهید بود عملکرد وب سایت خود را درک کرده و بهبود بخشید، رفتار کاربران را تجزیه و تحلیل کنید و استراتژی های بهینه سازی را برای دستیابی به بهترین نتایج از وب سایت خود در نظر بگیرید.
    `,
    advice_1: "برای کسانی که علاقمند به  بازار های دیجیتال هستند",
    advice_2:
      "برای کسانی که میخواند عملکرد کسب کار خود را با گوگل ارزیابی کنند",
    advice_3: "کسانیکه مخواهند مهارت تحلیل داده خود را تقویت کنند",
    avoid_1:
      "کسانی که تازه وارد حوزه تحلیل وبسایت هستند و اصول اساسی را هنوز یاد نگرفته‌اند، ",
    avoid_2: " برای افرادی که میخواهند وارد سطح پیشرفته این حوزه شوند",
    avoid_3: "برای کسانی که علاقه به پیشرفت کسب  و کار خود ندارند",
    faq_1: "آیا برای این دوره نیاز به تخصص قبلی دارم؟",
    faq_res_1:
      "با توجه به ساختار و محتوای دوره، هیچ تخصص قبلی خاصی لازم نیست. این دوره برای همه افرادی که علاقه‌مند به یادگیری گوگل انالیتیکس هستند، مناسب است",
    faq_2:
      "آیا می‌توانم از گوگل انالیتیکس برای وبسایت‌هایی با حجم بالا استفاده کنم؟",
    faq_res_2:
      "بله، گوگل انالیتیکس قابلیت پشتیبانی از وبسایت‌های با حجم بالا را دارد. با استفاده از ابزارها و تکنیک‌های مناسب، می‌توانید داده‌های ترافیک و عملکرد وبسایت خود را به طور همزمان و به صورت دقیق بررسی کنید",
    course_motto_time: 48,
    course_motto_desc_1: "48ساعت آموزش پروژه محور",
    second_motto_course: "پشتیبانی کامل در طول دوره‌های آموزشی",
    second_motto_course_desc:
      "ما تاکید بر ارائه پشتیبانی فعال و مستمر در طول دوره‌های آموزشی داریم. تیم ما آماده است تا در هر مرحله از یادگیری شما را همراهی کند و سوالات شما را پاسخ دهد.",
    third_motto_course: "مدرک معتبر برای اعتبار و توسعه شغلی",
    third_motto_course_desc:
      "پس از اتمام دوره‌های ما، شما مدارک معتبری دریافت خواهید کرد که به شما در اعتبارسنجی و توسعه شغلی کمک می‌کند",
    fourth_motto_course: "کیفیت بالا با مدرسین مجرب و متخصص",
    fourth_motto_course_desc:
      "دوره‌های ما با کیفیت بالا و با اساتید مجرب و متخصص ارائه می‌شوند. ما به ارائه محتوای آموزشی حرفه‌ای و تجربه یادگیری ممتاز علاقه‌مندیم.",
    course_sec_title_1: `
  آنالیز مقدماتی
  `,
    course_sec_title_desc_1: `در ابتدا به مفاهیم مقدماتی درباره آنالیز گوگل میپردازیم`,
    course_sec_title_2: `
  آنالیز متوسط
  `,
    course_sec_title_desc_2: `در این بخش به مفاهیم اصلی آنالیز گوگل میپردازیم`,
    course_sec_title_3: `
  آنالیز پیشرفته
  `,
    course_sec_title_desc_3: `در این بخش به درک عمیق رفتار کاربران به صورت پیشرفته میپردازیم`,
    session_begginer_1: "معرفی این دوره گوگل آنالیتکس",
    session_begginer_2: "مفاهیم اولیه و روش‌های تجزیه و تحلیل ترافیک",
    session_begginer_3: "پیکربندی اولیه و اتصال به وب سایت",
    session_begginer_4: "درک و تحلیل رفتار بازدیدکنندگان وبسایت",
    session_begginer_5: "ایجاد گزارشات سفارشی بر اساس نیازهای شما",
    session_mid_1: "تحلیل عملکرد صفحات",
    session_mid_2: "پیگیری رفتار و تعامل با کاربران در وبسایت",
    session_mid_3: "تحلیل و بهبود استراتژی کلمات کلیدی",
    session_mid_4: "تحلیل رفتار کاربران در موبایل",
    session_pro_1: "رصد هدف‌های پیشرفته در گوگل آنالیتیکس",
    session_pro_2: "داده‌های آنالیتیکس برای بهبود تجربه",
    session_pro_3: "ترکیب داده‌های آنالیتیکس با دیگر منابع",
    session_pro_4: "گزارشات پیشرفته و داشبوردهای سفارشی",
  },
  {
    id: 2,
    title: "دوره افزایش سرعت سایت",
    cover: `assest/img/website-speed-1-500x500.png`,
    member: 453,
    price: `${875},${999}`,
    main_description_1:
      "در این دوره، شما با مفاهیم و روش‌های بهینه‌سازی سرعت بارگیری صفحات وب، کاهش زمان پاسخ سرور، بهینه‌سازی تصاویر و محتوا، بهبود کش و فشرده‌سازی وب و سایر روش‌های مهم در افزایش سرعت سایت آشنا خواهید شد.",
    main_description_2:
      "همچنین، من به شما راهنمایی خواهم کرد که چگونه ابزارها و خدمات مختلفی را برای اندازه‌گیری و بهبود سرعت سایت خود استفاده کنید. ",
    main_description_3:
      "با اتمام این دوره،شما قادر خواهید بود سرعت سایت خود را بهبود ببخشید و تجربه کاربری بهتری به مشتریان خود ارائه دهید",
    advice_1: "صاحبان کسب و کار آنلاین",
    advice_2: "مدیر یا مدیر فنی یک سایت",
    advice_3: "علاقه‌مندان به بهینه‌سازی سرعت سایت",
    avoid_1: "فرادی که به توسعه وب علاقه‌مند نیستند",
    avoid_2: "افرادی که بهینه‌سازی سرعت سایت را بر عهده دیگران دارند",
    avoid_3: "افرادی که تازه کار هستند",
    faq_1: "چه روش‌هایی برای بهبود سرعت سایت وجود دارد؟",
    faq_2: " آیا برای بهبود سرعت سایت نیاز به مهارت‌های فنی خاصی دارم؟",
    faq_res_1:
      "روش‌های بهبود سرعت سایت شامل بهینه‌سازی تصاویر، فشرده‌سازی فایل‌ها، بهینه‌سازی کش، استفاده از CDN، بهینه‌سازی کدها و استفاده از روش‌های بهینه‌سازی مرورگر می‌شود",
    faq_res_2:
      "برخی از روش‌ها و ابزارها برای بهبود سرعت سایت نیاز به مهارت فنی دارند، اما می‌توانید با استفاده از ابزارها و راهنمایی‌های من در دوره، بهبود سرعت سایت خود را بهبود بخشید",
    session_begginer_1: "مقدمه‌ای به بهینه‌سازی سرعت وبسایت",
    session_begginer_2: "اصول اولیه بهینه‌سازی سرعت وبسایت",
    session_begginer_3: "ابزارها و روش‌های مقدماتی بهبود سرعت وبسایت",
    session_begginer_4: "بهینه‌سازی فایل‌های تصویر و ویدئو برای سرعت بالاتر",
    session_begginer_5: "بهبود زمان بارگیری CSS و JavaScript صفحات وب",
    session_mid_1: "بهبود عملکرد سرور و شبکه برای سرعت بیشتر",
    session_mid_2: "بهینه‌سازی فونت‌ها و ظاهر صفحات برای سرعت بهتر",
    session_mid_3: "استفاده از کش‌ها و ذخیره‌سازی موقت برای بهبود سرعت",
    session_mid_4: "بهینه‌سازی تصاویر برای سرعت بارگیری بهتر",
    session_mid_5: "بهبود مدیریت منابع برای سرعت و کارایی بیشتر",
    session_pro_1: "بهینه‌سازی کدهای HTML و CSS برای سرعت بیشتر",
    session_pro_2: "بهبود بارگیری فونت‌ها و آیکون‌ها برای سرعت بالاتر",
    session_pro_3: "بهینه‌سازی کدهای JavaScript  بهبود عملکرد برنامه‌نویسی",
    session_pro_4:
      "استفاده از فشرده‌سازی و تکنیک‌های مینیفای کد برای سرعت بیشتر",
    session_pro_5:
      "بهبود بارگیری صفحات پس از بارگیری اولیه برای تجربه کاربری بهتر",
    course_sec_title_1: "بخش مقدماتی",
    course_sec_title_desc_1: "",
    course_sec_title_2: "بخش متوسط",
    course_sec_title_desc_2: "",
    course_sec_title_3: "بخش پیشرفته",
    course_sec_title_desc_3: "",
    course_motto_time: 12,
    course_motto_desc_1: "12ساعت آموزش پروژه محور",
    second_motto_course: "پشتیبانی کامل در طول دوره‌های آموزشی",
    second_motto_course_desc:
      "ما تاکید بر ارائه پشتیبانی فعال و مستمر در طول دوره‌های آموزشی داریم. تیم ما آماده است تا در هر مرحله از یادگیری شما را همراهی کند و سوالات شما را پاسخ دهد.",
    third_motto_course: "مدرک معتبر برای اعتبار و توسعه شغلی",
    third_motto_course_desc:
      "پس از اتمام دوره‌های ما، شما مدارک معتبری دریافت خواهید کرد که به شما در اعتبارسنجی و توسعه شغلی کمک می‌کند",
    fourth_motto_course: "کیفیت بالا با مدرسین مجرب و متخصص",
    fourth_motto_course_desc:
      "دوره‌های ما با کیفیت بالا و با اساتید مجرب و متخصص ارائه می‌شوند. ما به ارائه محتوای آموزشی حرفه‌ای و تجربه یادگیری ممتاز علاقه‌مندیم.",
  },
  {
    id: 3,
    title: "آموزش ایمیل مارکتینگ",
    cover: `assest/img/email-marketing-500x500.jpg`,
    member: 943,
    price: `${549},${999}`,
    main_description_1:
      "در این دوره، با اصول و تکنیک‌های ایمیل مارکتینگ آشنا می‌شوید و یاد می‌گیرید چگونه از طریق ارسال ایمیل‌های موثر، ارتباط برقرار کنید و فروش خود را افزایش دهید",
    main_description_2: `
    
در این دوره جامع، شما را با اصول و تکنیک‌های ایمیل مارکتینگ آشنا می‌کنیم. با گام به گام پیش می‌رویم تا شما بتوانید از طریق ارسال ایمیل‌های موثر، ارتباط برقرار کنید و فروش خود را افزایش دهید
    `,
    main_description_3:
      "با استفاده از این دوره، شما مهارت‌های لازم برای ایجاد ارتباط موثر با مشتریانتان را خواهید داشت و قادر خواهید بود فروش خود را به صورت قابل توجهی افزایش دهید",
    advice_1: "برای کسانی که در حوزه بازاریابی دیجیتال فعالیت می‌کنند",
    advice_2: "برای صاحبان کسب و کارهای آنلاین و فروشگاه‌های اینترنتی",
    advice_3:
      "یادگیری روش‌ها و تکنیک‌های ایمیل مارکتینگ برای ارتباط موثر با مشتریان",
    avoid_1: "اگر شما قبلاً با اصول ایمیل مارکتینگ آشنایی کاملی دارید",
    avoid_2: "اگر شما به دنبال مباحث پایه این حوزه هستید",
    avoid_3:
      "گر شما به دنبال یادگیری مفاهیم و تکنیک‌های ایمیل مارکتینگ برای صنایع خاص و ویژه‌ای هستید",
    faq_1: "آیا این محصول مناسب برای مبتدیان است؟",
    faq_2: "آیا این محصول دارای ضمانتی است؟",
    faq_res_1:
      "بله، محصول ما برای هر سطحی از تجربه قابل استفاده است، از مبتدیان تا حرفه‌ایان در زمینه",
    faq_res_2:
      "بله، ما به کیفیت محصولاتمان اعتقاد داریم و برای اطمینان شما، ضمانتی را ارائه می‌دهیم",
    session_begginer_1: "معرفی دوره و اهداف آن",
    session_begginer_2: "مفاهیم و اصول اساسی ایمیل مارکتینگ",
    session_begginer_3: "تولید و انتخاب لیست ایمیل",
    session_begginer_4: "ایجاد و ارسال ایمیل",
    session_begginer_5: "معرفی ابزارهای ایمیل مارکتینگ",
    session_mid_1: "بهینه‌سازی محتوا و ارسال ایمیل",
    session_mid_2: "رتقاء تعامل با مشتریان از طریق ایمیل",
    session_mid_3: "تست و ارزیابی عملکرد ایمیل‌ها",
    session_mid_4: "استراتژی‌های رو به جلو در ایمیل مارکتینگ",
    session_mid_5: "بهبود و بهینه‌سازی استراتژی‌های ایمیل مارکتینگ",
    session_pro_1: "ایجاد ایمیل‌های خودکار و فراگیری",
    session_pro_2: "تجزیه و تحلیل داده‌ها و بهبود استراتژی‌ها",
    session_pro_3: " استفاده از روش‌های پیشرفته در ایمیل مارکتینگ",
    session_pro_4: "ارتباط با مشتریان از طریق ایمیل در حضور رقابت",
    session_pro_5: " نقش ایمیل مارکتینگ در استراتژی کلی بازاریابی",
    course_sec_title_1: "سطح مقدماتی",
    course_sec_title_desc_1:
      "در این سطح، شما با مفاهیم و اصول مقدماتی ایمیل مارکتینگ آشنا می‌شوید",
    course_sec_title_2: "سطح متوسط",
    course_sec_title_desc_2:
      "در سطح متوسط، شما با بهینه‌سازی محتوا و ارسال ایمیل بهتر آشنا می‌شوید",
    course_sec_title_3: "سطح پیشرفته",
    course_sec_title_desc_3:
      "در سطح پیشرفته، شما با راهبردها و تکنیک‌های پیشرفته در ایمیل مارکتینگ آشنا می‌شوید",
    course_motto_time: 20,
    course_motto_desc_1: "20ساعت آموزش پروژه محور",
    second_motto_course: "پشتیبانی کامل در طول دوره‌های آموزشی",
    second_motto_course_desc:
      "ما تاکید بر ارائه پشتیبانی فعال و مستمر در طول دوره‌های آموزشی داریم. تیم ما آماده است تا در هر مرحله از یادگیری شما را همراهی کند و سوالات شما را پاسخ دهد.",
    third_motto_course: "مدرک معتبر برای اعتبار و توسعه شغلی",
    third_motto_course_desc:
      "پس از اتمام دوره‌های ما، شما مدارک معتبری دریافت خواهید کرد که به شما در اعتبارسنجی و توسعه شغلی کمک می‌کند",
    fourth_motto_course: "کیفیت بالا با مدرسین مجرب و متخصص",
    fourth_motto_course_desc:
      "دوره‌های ما با کیفیت بالا و با اساتید مجرب و متخصص ارائه می‌شوند. ما به ارائه محتوای آموزشی حرفه‌ای و تجربه یادگیری ممتاز علاقه‌مندیم.",
  },
  {
    id: 4,
    title: "آموزش کامل سرچ گوگل",
    cover: `assest/img/google-search-console-1-500x500.png`,
    member: 843,
    price: "رایگان",
    main_description_1: `
    در دوره "آموزش مهارت سرچ در گوگل" شما با یادگیری تکنیک‌ها و روش‌های موثر برای انجام جستجو در موتور جستجوی گوگل آشنا می‌شوید
    `,
    main_description_2: `
    در سطح مقدماتی، شما با مفاهیم و اصول ابتدایی مرتبط با سرچ در گوگل آشنا می‌شوید. این شامل استفاده از عملگرهای جستجو، فیلترها و بهینه‌سازی عبارات جستجو می‌شود
    `,
    main_description_3: `
    شما را با روش‌ها و استراتژی‌های خاص در سرچ در گوگل آشنا می‌کند. این شامل استفاده از عملگرهای پیشرفته، سایت‌های متخصص و منابع علمی، ابزارهای تحلیل و بهبود فرآیند سرچ می‌شود
    `,
    advice_1: "کسانی که به دنبال بهبود مهارت های جستجود هستند",
    advice_2: "مدیران وب سایت،دانشجو ها،پژوهشگران",
    advice_3: "افزایش بهینه سازی جستجو در گوگل",
    avoid_1: "افرادی که تجربه و مهارت قبلی قوی در سرچ در گوگل دارند",
    avoid_2: "افرادی که علاقه خاصی به سرچ در گوگل ندارند",
    avoid_3: "افرادی که به فکر افزایش مهارت حل مسئله در خود نیستند",
    faq_1: "آیا برای شرکت در این دوره نیاز به تجربه قبلی در سرچ در گوگل دارم؟",
    faq_2:
      " آیا این دوره به من در یافتن اطلاعات دقیق‌تر و سریع‌تر در گوگل کمک می‌کند؟",
    faq_res_1:
      "خیر، این دوره برای افرادی که به دنبال بهبود مهارت‌های سرچ در گوگل هستند، مناسب است، بنابراین هیچ تجربه قبلی لازم نیست",
    faq_res_2:
      "بله، هدف اصلی این دوره ارتقای مهارت‌های سرچ در گوگل است. با یادگیری تکنیک‌ها و روش‌های صحیح سرچ، شما قادر خواهید بود اطلاعات دقیق‌تر و سریع‌تری را در گوگل پیدا کنید",
    session_begginer_1: "مقدمه‌ای درباره جستجوی گوگل",
    session_begginer_2: "استفاده از عملگرهای جستجو در گوگل",
    session_begginer_3: "ترفندهای مربوط به نتایج جستجو در گوگل",
    session_begginer_4:
      "استفاده از فیلترها و پیشرفته‌ترین امکانات جستجو در گوگل",
    session_begginer_5: "بهبود دسترسی به اطلاعات با استفاده از ابزارهای گوگل",
    session_mid_1: "گوگل و نتایج مکمل جستجو",
    session_mid_2: "استفاده از کلیدواژه‌ها در جستجوی گوگل",
    session_mid_3: "ترفندهای پیشرفته در جستجوی تصاویر در گوگل",
    session_mid_4: "بهره‌برداری از نتایج محلی و نقشه‌ها در گوگل",
    session_mid_5: "کنترل حریم خصوصی و تنظیمات شخصی سازی در گوگل",
    session_pro_1: "استفاده از الگوریتم‌های پیشرفته در جستجوی گوگل",
    session_pro_2: "بهبود سئو و رتبه‌بندی وبسایت در نتایج جستجوی گوگل",
    session_pro_3:
      "بهره‌برداری از ابزارهای تحلیلی گوگل برای بهبود عملکرد وبسایت",
    session_pro_4:
      "استفاده از گوگل ترند و ابزارهای مربوط به روند جستجوی کاربران",
    session_pro_5: "بهره‌برداری از تبلیغات گوگل برای جذب ترافیک و مشتریان",
    course_sec_title_1: "سطح مقدماتی",
    course_sec_title_desc_1:
      "ر این سطح، شما با مفاهیم و اصول مقدماتی مرتبط با سرچ در گوگل آشنا می‌شوید",
    course_sec_title_2: "سطح متوسط",
    course_sec_title_desc_2:
      "شما با تکنیک‌ها و روش‌های پیشرفته سرچ در گوگل آشنا می‌شوید",
    course_sec_title_3: "سطح پیشرفته",
    course_sec_title_desc_3:
      "در سطح پیشرفته، شما با روش‌های پیشرفته و استراتژی‌های خاص در سرچ در گوگل آشنا می‌شوید",
    course_motto_time: 10,
    course_motto_desc_1: "10ساعت آموزش پروژه محور",
    second_motto_course: "پشتیبانی کامل در طول دوره‌های آموزشی",
    second_motto_course_desc:
      "ما تاکید بر ارائه پشتیبانی فعال و مستمر در طول دوره‌های آموزشی داریم. تیم ما آماده است تا در هر مرحله از یادگیری شما را همراهی کند و سوالات شما را پاسخ دهد.",
    third_motto_course: "مدرک معتبر برای اعتبار و توسعه شغلی",
    third_motto_course_desc:
      "پس از اتمام دوره‌های ما، شما مدارک معتبری دریافت خواهید کرد که به شما در اعتبارسنجی و توسعه شغلی کمک می‌کند",
    fourth_motto_course: "کیفیت بالا با مدرسین مجرب و متخصص",
    fourth_motto_course_desc:
      "دوره‌های ما با کیفیت بالا و با اساتید مجرب و متخصص ارائه می‌شوند. ما به ارائه محتوای آموزشی حرفه‌ای و تجربه یادگیری ممتاز علاقه‌مندیم.",
  },
];
export { product };
