export const googleAnalyticsId = "GTM-W8ZVKZG";

export const formatCurrency = num => {
  const dollars = num / 100;
  const aud = dollars * 1.45;
  const php = dollars * 51.08;
  return (currency = {
    us: dollars.toLocaleString("au-AU", {
      style: "currency",
      currency: "USD"
    }),
    au: aud.toLocaleString("au-AU", {
      style: "currency",
      currency: "AUD"
    }),
    ph: php.toLocaleString("au-AU", {
      style: "currency",
      currency: "PHP"
    })
  });
};
