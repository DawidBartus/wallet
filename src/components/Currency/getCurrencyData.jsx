const getCurrencyData = () => {
  const hour = 60 * 60 * 1000;
  const time = Date.now();
  const oldCurrencyData = JSON.parse(localStorage.getItem("currency"));

  // Checks if data is saved in localStorage
  if (oldCurrencyData) {
    const oldTime = oldCurrencyData.find((item) => item.timestamp)?.timestamp;
    const isMoreThenHourAge = time - oldTime < hour;

    // Checks if data is saved in localStorage less than an hour ago.
    if (isMoreThenHourAge) {
      const dataWithoutTimestamp = oldCurrencyData.filter(
        (item) => item.currency
      );
      return dataWithoutTimestamp;
    }
  }

  // // Fetch data from backend
  const currencyData = [
    { currency: "USD", purchase: 27.55, sale: 27.65 },
    { currency: "EUR", purchase: 27.55, sale: 27.65 },
  ];
  // Add a timestamp and save the data in localStorage.
  const forLocalStorage = [{ timestamp: time }, ...currencyData];
  localStorage.setItem("currency", JSON.stringify(forLocalStorage));

  return currencyData;
};

export default getCurrencyData;
