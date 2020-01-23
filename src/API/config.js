if (process.env.NODE_ENV === 'production') {
  module.exports = {
    url: "https://api.trade.gov/v1/web_documents/search.json",
    apiKey: "d0lmowK8tvxPixAfm9sKOd_f",
  }
} else if (process.env.NODE_ENV === 'staging') {
  module.exports = {
    url: "https://api.govwizely.com/v1/web_documents/search.json",
    apiKey: "FqEELAPpt-UDPBxpoo5onvku",
  }
} else if (process.env.NODE_ENV === 'test'){
  module.exports = {
    /* move the json file to /public first */
    url: "./Drupal_Intrasearch-export.json",
    apiKey: "test",  
  }
} else {
  module.exports = {
    url: "https://api.trade.gov/v1/web_documents/search.json",
    apiKey: "d0lmowK8tvxPixAfm9sKOd_f",
    // url: "./Drupal_Intrasearch-export.json",
    // apiKey: "test",  
  }
}
