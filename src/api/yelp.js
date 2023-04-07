import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer qvu6XPJHQTCO-yUwQxiM2w7nSpCVG-QkaDAZsB3NOMY1gAaqtRuubonuPwt3z7LXa43qvtLtVJjrYkUyQp0vuGN-MhrZdfEgyrcr2U1b6OgXbDZp3Yrbj3YyNzovZHYx",
  },
});
