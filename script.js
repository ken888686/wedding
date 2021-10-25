Vue.createApp({
  data() {
    return {
      news: {},
      fontColor: "red",
    };
  },
  methods: {
    check() {
      console.log("Check");
    },
  },
  mounted() {
    const apiKey = "eb5ec89f36ff470aac8dc509c8a6fdcc";
    const url = `https://newsapi.org/v2/top-headlines`;

    axios({
      method: "get",
      url: url,
      params: {
        apiKey: apiKey,
        country: "tw",
        pageSize: 10,
        page: 1,
      },
      "Content-Type": "application/json",
    }).then((res, req, next) => {
      let articles = res.data.articles;
      Object.assign(this.news, articles);
    });

    let carousel = new bootstrap.Carousel(document.querySelector("#carousel"), {
      interval: 1000,
      wrap: false,
    });
  },
}).mount("#app");
