import axios from "axios";
import moment from "moment";

function getTodayDate() {
  const today = moment().format().split("+")[0];
  return today;
}

function getMondayOfCurrentWeek() {
  const today = new Date();
  const first = today.getDate() - today.getDay(2) + 1;

  const monday = new Date(today.setDate(first));

  const momentConvert = moment(monday).format().split("+")[0];
  return momentConvert;
}

function getPreviousDate(date, interval) {
  const toDate = new Date(date);
  const fromDate = new Date(toDate);
  fromDate.setDate(fromDate.getDate() - interval);
  return fromDate;
}

function getNextDate(date, interval) {
  const toDate = new Date(date);
  const fromDate = new Date(toDate);
  fromDate.setDate(fromDate.getDate() + interval);
  return fromDate;
}

function monthOfYearAsString(monthIndex) {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][monthIndex];
}

function dayOfWeekAsString(dayIndex) {
  return ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"][dayIndex];
}

function fullMonthOfYearAsString(monthIndex) {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][monthIndex];
}

function getDateInFormatFormControl(date) {
  return moment(date).format("YYYY-MM-DD");
}

function getTimeInFormatFormControl(value) {
  const today = new Date(value);
  const hour = today.getHours().toString().padStart(2, "0");
  const minutes = today.getMinutes().toString().padStart(2, "0");
  const seconds = today.getSeconds().toString().padStart(2, "0");
  const time = `${hour}:${minutes}:${seconds}`;
  return time;
}

function getDateInFormat(date) {
  return moment(date).format("YYYY/MM/DD");
}

function getTimeInFormat(date) {
  return moment(date).format("LT");
}

function changeTimeZone(date) {
  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  if (typeof date === "string") {
    return new Date(
      new Date(date).toLocaleString("en-US", {
        timeZone,
      })
    );
  }

  return new Date(
    date.toLocaleString("en-US", {
      timeZone,
    })
  );
}

function dateDifference(createdDate) {
  const date1 = new Date(createdDate);
  const date2 = new Date();
  let diffDays = date2.getDate() - date1.getDate();
  if (diffDays < 0) {
    diffDays *= -1;
  }
  return diffDays;
}

function getDateAndTime(dateTime) {
  const formatDate = moment(dateTime).format();
  const value = dateDifference(formatDate);
  return `${moment(dateTime).format("LT")}, ${
    value === 0 ? "Today" : dayOfWeekAsString(new Date(dateTime).getDay())
  }`;
}

function getUpdateTime(time) {
  const timeToChange = new Date(time);
  const hour =
    timeToChange.getHours() < 10
      ? `0${timeToChange.getHours()}`
      : timeToChange.getHours();
  const minutes =
    timeToChange.getMinutes() < 10
      ? `0${timeToChange.getMinutes()}`
      : timeToChange.getMinutes();
  const newTime = `${hour}:${minutes}`;
  return newTime;
}

function getPageRecordIndex(PageNumber, index) {
  let pg = PageNumber;
  if (pg < 0) {
    pg *= 0;
  }
  const myCount = index + 1;
  const final = pg * 15 + myCount;
  return final;
}

function getZuluTimeFormat(time) {
  if (time) {
    const truncatedTime = time.length > 5 ? time.slice(0, 5) : time;
    return `${truncatedTime.replace(":", "")}Z`;
  }
  return "";
}

function convertBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

function getInitialName(name) {
  let initials = "";

  const nameSplit = name.split(" ");
  const nameLength = nameSplit.length;

  if (nameLength > 1) {
    initials =
      nameSplit[0].substring(0, 1) + nameSplit[nameLength - 1].substring(0, 1);
  } else if (nameLength === 1) {
    initials = nameSplit[0].substring(0, 1);
  }

  return initials.toUpperCase();
}

function createImageFromInitials(size, name, color) {
  if (name == null) return null;
  name = getInitialName(name);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = size;
  canvas.height = size;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, size, size);
  context.fillStyle = `${color}50`;
  context.fillRect(0, 0, size, size);
  context.fillStyle = color;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = `${size / 2}px Roboto`;
  context.fillText(name, size / 2, size / 2);
  return canvas.toDataURL();
}

function getRandomColor() {
  let color = "#";
  const letters = "0123456789ABCDEF";

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function listOfNextYears(number) {
  const expYearArray = [];
  for (let i = 0; i <= number; i += 1) {
    expYearArray.push(new Date().getFullYear() + i);
  }
  return expYearArray;
}

function listOfMonths() {
  return [
    {
      id: 0,
      value: 1,
      month: "January",
    },
    {
      id: 1,
      value: 2,
      month: "Feburary",
    },
    {
      id: 2,
      value: 3,
      month: "March",
    },
    {
      id: 3,
      value: 4,
      month: "April",
    },
    {
      id: 4,
      value: 5,
      month: "May",
    },
    {
      id: 5,
      value: 6,
      month: "June",
    },
    {
      id: 6,
      value: 7,
      month: "July",
    },
    {
      id: 7,
      value: 8,
      month: "August",
    },
    {
      id: 8,
      value: 9,
      month: "September",
    },
    {
      id: 9,
      value: 10,
      month: "October",
    },
    {
      id: 10,
      value: 11,
      month: "November",
    },
    {
      id: 11,
      value: 12,
      month: "December",
    },
  ];
}

function expiryDateCheck(expiryDate) {
  const givenDate = new Date(expiryDate); // Rename to 'givenDate'

  const currentDate = new Date();

  return givenDate > currentDate;
}

function truncate(text, startChars, endChars, maxLength) {
  if (text && text.length > maxLength) {
    const start = text.substring(0, startChars);
    const end = text.substring(text.length - endChars, text.length);
    return `${start} ${end}`;
  }
  return text;
}

function getFileExtension(file) {
  const lastIndexOfDot = file.lastIndexOf(".");
  const ext = file.slice(lastIndexOfDot + 1, file.length);
  return ext;
}

function getCountryTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function allMonthList() {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
}

function getOperatingSystem(window) {
  let operatingSystem = "Not known";
  if (window.navigator.appVersion.indexOf("Win") !== -1) {
    operatingSystem = "Windows OS";
  }
  if (window.navigator.appVersion.indexOf("Mac") !== -1) {
    operatingSystem = "MacOS";
  }
  if (window.navigator.appVersion.indexOf("X11") !== -1) {
    operatingSystem = "UNIX OS";
  }
  if (window.navigator.appVersion.indexOf("Linux") !== -1) {
    operatingSystem = "Linux OS";
  }

  return operatingSystem;
}

function getBrowser(window) {
  let currentBrowser = "Not known";
  if (window.navigator.userAgent.indexOf("Chrome") !== -1) {
    currentBrowser = "Google Chrome";
  } else if (window.navigator.userAgent.indexOf("Firefox") !== -1) {
    currentBrowser = "Mozilla Firefox";
  } else if (window.navigator.userAgent.indexOf("MSIE") !== -1) {
    currentBrowser = "Internet Explorer";
  } else if (window.navigator.userAgent.indexOf("Edge") !== -1) {
    currentBrowser = "Edge";
  } else if (window.navigator.userAgent.indexOf("Safari") !== -1) {
    currentBrowser = "Safari";
  } else if (window.navigator.userAgent.indexOf("Opera") !== -1) {
    currentBrowser = "Opera";
  } else {
    // console.log("Others");
  }

  return currentBrowser;
}

const getDataForIp = async () => {
  const res = await axios.get("https://geolocation-db.com/json/");
  return res.data.IPv4;
};

function getTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

const timeConversionHMS = (time) => {
  const offset = moment(time).format("hh:mm:ss");
  return offset;
};

function timeConversionLTS(time) {
  const offset = moment(time, "HH:mm:ss");
  return offset;
}

function dateAndTimeFormat(time) {
  const offset = moment(time).format("LLL");
  return offset;
}

function dateFormat(date) {
  const offset = moment(date).format("LL");
  return offset;
}

function dateAndTimeFormatForSchedular(time) {
  const date = moment().format().split("T")[0];
  const dateTime = `${date}T${time}`;
  const offset = moment(dateTime).format("LLL");
  return offset;
}

export {
  getFileExtension,
  getDataForIp,
  getBrowser,
  getOperatingSystem,
  getTodayDate,
  getPreviousDate,
  getNextDate,
  monthOfYearAsString,
  dayOfWeekAsString,
  getInitialName,
  getDateInFormat,
  convertBase64,
  createImageFromInitials,
  getRandomColor,
  listOfNextYears,
  getDateInFormatFormControl,
  getTimeInFormatFormControl,
  listOfMonths,
  expiryDateCheck,
  fullMonthOfYearAsString,
  dateDifference,
  getCountryTimeZone,
  allMonthList,
  getTimeInFormat,
  getUpdateTime,
  getPageRecordIndex,
  getZuluTimeFormat,
  truncate,
  changeTimeZone,
  getDateAndTime,
  getTimeZone,
  timeConversionHMS,
  timeConversionLTS,
  dateAndTimeFormat,
  getMondayOfCurrentWeek,
  dateAndTimeFormatForSchedular,
  dateFormat,
};
