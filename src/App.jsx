import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  //   const { i18n } = useTranslation();

  // useEffect(() => {
  //   const dir = i18n.language === 'ur' ? 'rtl' : 'ltr';
  //   document.documentElement.lang = i18n.language;
  //   document.documentElement.dir = dir;
  // }, [i18n.language]);
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
