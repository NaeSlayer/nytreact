import axios from "axios";

// Export an object containing methods we'll use for accessing the NYT API

export default {
  getArticles: function () {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json");
  },
  // getDogsOfBreed: function(breed) {
  //   return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  // },
  // getBaseBreedsList: function() {
  //   return axios.get("https://dog.ceo/api/breeds/list");
  // }
};

