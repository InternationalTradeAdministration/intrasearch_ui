if (process.env.NODE_ENV === 'test') {
  module.exports = {
    /* move the json file to `/public` first */
    url: "./Drupal_Intrasearch-export.json",
    apiKey: "test",  
  }
} else {
  module.exports = {
    url: "https://CHANGEME",
    accessToken: "CHANGEME",
  }
}
