import dayjs from "dayjs";
import ru from "dayjs/locale/ru";
import isoWeek from "dayjs/plugin/isoWeek";
import localizedFormat from "dayjs/plugin/localizedFormat";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(isoWeek);
dayjs.extend(weekday);

dayjs.locale(ru);

const considerTimezone = true;

export const Datetime = considerTimezone ? dayjs : dayjs.utc;
