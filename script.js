ٍ// 🌍 النصوص باللغات الثلاث

const translations = {

  ar: {

    title: "🌟 حلمي",

    description: "موقع محترم للفيديوهات والموسيقى",

    music: "🎵 موسيقى",

    video: "🎬 فيديو",

    chat: "💬 دردشة",

    send: "إرسال",

    placeholder: "اكتب رسالة..."

  },

  en: {

    title: "🌟 MY DREAM",

    description: "A clean and respectful media website",

    music: "🎵 Music",

    video: "🎬 Video",

    chat: "💬 Chat",

    send: "Send",

    placeholder: "Type a message..."

  },

  es: {

    title: "🌟 MI SUEÑO",

    description: "Un sitio limpio y respetuoso de medios",

    music: "🎵 Música",

    video: "🎬 Video",

    chat: "💬 Chat",

    send: "Enviar",

    placeholder: "Escribe un mensaje..."

  }

};

// 🔄 تغيير اللغة

function setLanguage(lang) {

  document.getElementById("title").textContent = translations[lang].title;

  document.getElementById("description").textContent = translations[lang].description;

  document.getElementById("musicTitle").textContent = translations[lang].music;

  document.getElementById("videoTitle").textContent = translations[lang].video;

  document.getElementById("chatTitle").textContent = translations[lang].chat;

  document.getElementById("sendBtn").textContent = translations[lang].send;

  document.getElementById("inputMessage").placeholder = translations[lang].placeholder;

  // اتجاه الصفحة

  document.body.dir = lang === "ar" ? "rtl" : "ltr";

}

<script>

const now = new Date();

const hour = now.getHours();

if (hour < 9 || hour >= 19) {

  alert("❌ هذا الموقع متاح للأطفال فقط من 9 صباحًا إلى 7 مساءً");

  document.body.innerHTML = "";

}

</script><script>

document.querySelectorAll('[data-kids="false"]').forEach(el => {

  el.remove();

});

</script><script>

function register() {

  const age = document.getElementById("age").value;

  const email = document.getElementById("parentEmail").value;

  if (age < 14 && email === "") {

    alert("❌ يجب إدخال إيميل أحد الوالدين");

    return;

  }

  alert("✅ تم التسجيل بنجاح");

}

</script>