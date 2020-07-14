const parseHsValue = (value) => {
  return value.toString().length === 1 ? `0${value}` : value;
};

const parseShiftDate = (date) => {
  return {
    startTime: `${date.inDate.year}${parseHsValue(
      date.inDate.month
    )}${parseHsValue(date.inDate.day)}T${parseHsValue(
      date.inTime.hours
    )}${parseHsValue(date.inTime.minutes)}`,
    endTime: `${date.outDate.year}${parseHsValue(
      date.outDate.month
    )}${parseHsValue(date.outDate.day)}T${parseHsValue(
      date.outTime.hours
    )}${parseHsValue(date.outTime.minutes)}`,
    location: 'Woking'
  };
};

export default parseShiftDate;
