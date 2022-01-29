import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

export function howLongAgo(timestamp) {
    return timeAgo.format(new Date(timestamp), "twitter-now");
}
