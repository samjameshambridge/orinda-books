export const getDate = status => {
  if (!status) {
    let date = new Date();

    let mm = date.getMonth() + 1,
      dd = date.getDate(),
      yyyy = date.getFullYear();

    if (dd < 10) dd = `0${dd}`;
    if (mm < 10) mm = `0${mm}`;

    date = `${dd}/${mm}/${yyyy}`;

    return date;
  } else {
    let date = new Date();

    let mm = date.getMonth() + 1,
      dd = date.getDate(),
      yyyy = date.getFullYear() + 1;

    if (dd < 10) dd = `0${dd}`;
    if (mm < 10) mm = `0${mm}`;

    date = `${dd}/${mm}/${yyyy}`;

    return date;
  }
};

export const calendarDateStandardizer = date => {
  let dateChars = date.toString().split("");
  let dd = dateChars[8] + dateChars[9];
  let monthChars = dateChars[4] + dateChars[5] + dateChars[6];
  let mm;

  switch (monthChars) {
    case "Jan":
      mm = "01";
      break;
    case "Feb":
      mm = "02";
      break;
    case "Mar":
      mm = "03";
      break;
    case "Apr":
      mm = "04";
      break;
    case "May":
      mm = "05";
      break;
    case "Jun":
      mm = "06";
      break;
    case "Jul":
      mm = "07";
      break;
    case "Aug":
      mm = "08";
      break;
    case "Sep":
      mm = "09";
      break;
    case "Oct":
      mm = "10";
      break;
    case "Nov":
      mm = "11";
      break;
    case "Dec":
      mm = "12";
      break;
    default:
      return;
  }

  let yyyy = dateChars[11] + dateChars[12] + dateChars[13] + dateChars[14];

  const formattedDate = `${dd}/${mm}/${yyyy}`;

  return formattedDate;
};

export const validateFormat = date => {
  if (!date.match(/^\w{1,2}\/\w{1,2}\/\w{4}$/)) {
    return false;
  } else {
    return true;
  }
};
