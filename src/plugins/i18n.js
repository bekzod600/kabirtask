import { createI18n } from "vue-i18n";
import uz from "../languages/uz.json";
import ru from "../languages/ru.json";

const locale = localStorage.getItem("lng") || "ru";

const i18n = createI18n({
  locale,
  legacy: false,
  fallbackLocale: "ru",
  silentFallbackWarn: true,
  globalInjection: true,
  messages: { uz, ru },
});

export default i18n;
