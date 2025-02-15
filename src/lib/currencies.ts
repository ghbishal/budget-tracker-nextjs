export const Currencies = [
  { value: "USD", label: "$ Dollar", locale: "en-Us" },
  { value: "EUR", label: "€ Euro", locale: "de-DE" },
  { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
];

export type Currency = (typeof Currencies)[0];
