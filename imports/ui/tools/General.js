export const googleAnalyticsId = "GTM-W8ZVKZG";

export const formatCurrency = num => {
  const dollars = num / 100;
  return dollars.toLocaleString("au-AU", {
    style: "currency",
    currency: "AUD"
  });
};
