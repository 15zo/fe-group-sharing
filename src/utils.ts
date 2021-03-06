export const calcTwoTimeDifference = (updatedDateTime: Date) => {
  const currentTime = new Date();
  const updateTime = new Date(updatedDateTime);
  const diffMinutes = currentTime.getTime() - updateTime.getTime();
  const result = Math.abs(diffMinutes / (1000 * 60));

  if (result < 60) return `${result.toFixed()}분뒤`;
  else if (result < 1440)
    return `${(result / 60).toFixed()}:${(result % 60).toFixed()}`;
  return `${(result / 1440).toFixed()}`;
};

const month = [
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
];

export const getDate = (registeredDate: Date) => {
  const date = new Date(registeredDate);
  return `${month[date.getMonth()]} ${date.getDate()}`;
};
