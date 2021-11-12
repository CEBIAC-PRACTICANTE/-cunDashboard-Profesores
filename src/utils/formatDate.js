const formatDate = (date) => {
  let d = new Date(date);
  console.log(date);
  let month = `${d.getMonth()+1}`;
  let day = `${d.getDate()+1}`;
  let year = d.getFullYear();

  if (month.length < 2) {
    month = `0${month}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }
  let returnDate = [year, month, day].join("-")
  console.log(returnDate)
  return returnDate;
};

export default formatDate;
