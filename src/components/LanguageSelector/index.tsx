import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IoGlobeOutline } from "react-icons/io5";
// import { locales } from 'config/i18n';

const LanguageSelector: FC = () => {
  const { i18n } = useTranslation();
  const onSelect = (e: React.MouseEvent<HTMLButtonElement>, lang: string) => {
    e.preventDefault();
    i18n.changeLanguage(lang);
  };
  const languages = [
    {
      label: "Español",
      value: "es",
    },
    {
      label: "English",
      value: "en",
    },
  ];
  return (
    <article className="language_selector">
      <IoGlobeOutline size={15}/>
      {languages.map((lang, indx: number) => (
        <button key={indx} onClick={(e) => onSelect(e, lang.value)}>{lang.label}</button>
      ))}
    </article>
  );
};

export default LanguageSelector;
