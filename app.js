let axios = require('axios')
let jsonpAdapter = require('axios-jsonp');

axios({
    url: 'http://data.essand.psu.ac.th/api/3/action/datastore_search?resource_id=daf269cb-c383-44d1-aa09-af935bb641e9&limit=5',
    adapter: jsonpAdapter,
    callbackParamName: 'callback' // optional, 'callback' by default
}).then((res) => {
 
});