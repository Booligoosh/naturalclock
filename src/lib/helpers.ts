export const timeToPercent = (date: Date) => {
  let dayStart = new Date(date);
  dayStart.setHours(0, 0, 0, 0);
  return (date.getTime() - dayStart.getTime()) / (24 * 60 * 60 * 1000);
};
