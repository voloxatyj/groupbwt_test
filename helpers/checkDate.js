export default function checkDate(first_date, operation_date) {
  const week_condition = (Date.parse(first_date) - Date.parse(operation_date)) / (24 * 60 * 60 * 1000) / 7 > 1;
  return { week_condition };
}