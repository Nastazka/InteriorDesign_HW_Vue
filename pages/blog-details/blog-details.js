new Vue({
    el: "#app",
    data: {
      filters: [],
      month: [
        "December",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "January",
      ],
      articles: [
        {
          id: 0,
          img: "../../img/Article1.png",
          name: "let’s get solution for building construction work",
          date: 1735171200,
          tag: [
            "kitchen",
            "bedroom",
            "building",
            "architecture",
            "kitchan design",
            "bedroom",
          ],
        },
        {
          id: 1,
          img: "../../img/Article2.png",
          name: " low cost latest invented interior designing ideas.",
          date: 1734825600,
          tag: ["kitchen"],
        },
        {
          id: 2,
          img: "../../img/Article3.png",
          name: "best for any office & business interior solution",
          date: 1735171200,
          tag: ["interior design"],
        },
        {
          id: 3,
          img: "../../img/Article4.png",
          name: "let’s get solution for building construction work",
          date: 1735084800,
          tag: ["kitchan design"],
        },
        {
          id: 4,
          img: "../../img/Article5.png",
          name: " low cost latest invented interior designing ideas.",
          date: 1734825600,
          tag: ["living design"],
        },
        {
          id: 5,
          img: "../../img/Article6.png",
          name: "best for any office & business interior solution",
          date: 1735084800,
          tag: ["interior design"],
        },
      ],
    },
  
    methods: {
      addFilter(e) {
        if (this.filters.includes(e.target.textContent)) {
          this.filters = this.filters.filter(
            (elem) => elem != e.target.textContent
          );
          e.target.classList.toggle("selected");
        } else {
          this.filters.push(e.target.textContent);
          e.target.classList.toggle("selected");
        }
        console.log(this.filters);
      },
      getDateToString(timestamp) {
        const date = new Date(timestamp * 1000);
        return `${date.getDate()} ${
          this.month[date.getMonth()]
        } ${date.getFullYear()}`;
      },
    },
    computed: {
      filteredArticles() {
        if (this.filters.length === 0) {
          return this.articles;
        }
        return this.articles.filter((elem) => {
          let find = false;
          this.filters.forEach((tag) => {
            if (elem.tag.includes(tag)) {
              find++;
            }
          });
          if (find === this.filters.length) {
            return true;
          } else {
            return false;
          }
        });
      },
    },
  });