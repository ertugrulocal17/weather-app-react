const weatherCode = {
  0: "1.png",
  1: "2.png",
  2: "3.png",
  3: "4.png",
  45: "5.png",
  48: "6.png",
  51: "7.png",
  53: "8.png",
  55: "9.png",
  56: "10.png",
  57: "11.png",
  61: "12.png",
  63: "13.png",
  65: "14.png",
  66: "15.png",
  67: "16.png",
  71: "17.png",
  73: "18.png",
  75: "19.png",
  77: "20.png",
  80: "21.png",
  81: "22.png",
  82: "23.png ",
  85: "24.png",
  86: "25.png",
  95: "26.png",
  96: "26.png",
  99: "26.png",
};

export const convertWeatherCode = code => {
  return weatherCode[code];
};
