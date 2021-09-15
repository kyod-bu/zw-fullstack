import { delay } from "./utils";
import feed from "./mockFeed.json";

export const fetchFeed = () => {
  return delay(2000).then(() => feed);
};
