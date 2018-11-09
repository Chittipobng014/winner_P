const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const psuSensor = "https://api.powerbi.com/beta/8e634e67-9d66-46d2-a529-e1b708c5d8bc/datasets/9e236a1a-cf2d-4290-9533-b454abdea52d/rows?key=fn6IAT%2BvuL75%2FnGaZwda%2BHj6M0Z98kbnrC24NHmyrwrLPZ6PbbowlxupVlnGWk1EnHobf%2FBSKhr3vfGHDYChLA%3D%3D"

app.use(cors)

app.listen(process.env.PORT || 8080);
console.log("App Listen to Port" + process.env.PORT || 8080);

app.get('/', function (req, res, next) {
    var index = 0
    setInterval(function () {
        axios.post('http://data.essand.psu.ac.th/api/3/action/datastore_search', {
            "resource_id": "c3eeeba4-acb1-4a1f-a982-b3ea0f5ad3c9",
            "limit": 9999
        }).then(function (data) {
            var result = data.data.result
            if (index < result.records.length) {
                index++
            }
            var lastIndex = result.records.length - 1
            var records = result.records[index]
            var date = records["Date Time"]
            var battery = records["Battery[V]"]
            var temp = records["Temperature"]
            var humi = records["Humidity"]
            var extenso1 = records["ExtensoMeter1(mm)"]
            var extenso2 = records["ExtensoMeter2(mm)"]
            var extenso3 = records["ExtensoMeter3(mm)"]
            var piezometer1 = records["Piezometer1(kPa)"]
            var piezometer2 = records["Piezometer2(kPa)"]
            var rain = records["rainGuage(mm)"]
            var streamingData = {
                date,
                battery,
                temp,
                humi,
                extenso1,
                extenso2,
                extenso3,
                piezometer1,
                piezometer2,
                rain
            }
            res.send(200).json({
                streamingData
            })
            //streaming(psuSensor, streamingData)
        }).catch(function (err) {
            console.log(err)
        })
    }, 3000);
})

var streaming = function (url, value) {
    console.log({ ...value })
    axios.post(url, {
        ...value
    }).then((res) => {

    }).catch((err) => {
        console.log(err)
    })
}