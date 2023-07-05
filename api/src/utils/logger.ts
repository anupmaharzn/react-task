import logger from "pino";
import dayjs from "dayjs";

//instead of console.log we gonna use this
const log = logger({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format("YYYY MMM D ddd h:mm A")}"`,
});

export default log;
