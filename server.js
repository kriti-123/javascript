const reader = require('xlsx')

const file = reader.readFile('docexcel.xlsx');

let data = [];

const sheets = file.SheetNames

for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])

    temp.forEach((res) => {
        // console.log("rkt",res['Train No.']);
        data.push({
            train_no: res['Train No.'],
            train_name: res['train Name'],
            islno: res['islno'],
            station_code: res['station Code'],
            station_name: res['Station Name'],
            arrival_time: res['Arrival time'],
            departure_time: res['Departure time'],
            Distance: res['Distance'],
            src_station_cod: res['Source Station Code'],
            src_station_name: res['source Station Name'],
            des_station_code: res['Destination station Code'],
            des_station_name: res['Destination Station Name']
        });
    })
}
//----------------------------------------find the longest  and smallest stop-----------------------------------------------
var mp = new Map();
data.forEach((items) => {
    let key = items.train_name;
    if (mp.has(key))
        mp.set(key, mp.get(key) + 1);
    else
        mp.set(key, 1);
});
console.log(mp);
mp.forEach((value,key)=>{
   
})
// const m = Math.max(...mp.values());
// const minV = Math.min(...mp.values());
console.log(m);
console.log(minV);
//-----------------------------------------Group by islno -----------------------------------------------------
function groupBy(objectArray) {
    // console.log(property)
    return objectArray.reduce((acc, obj) => {
        // console.log(obj)
        const key = obj.islno;
        // console.log(key);
        if (!acc[key]) {
            acc[key] = [];
        }
        // console.log(typeof acc)
        acc[key].push(obj);
        return acc;
    }, {});
}
const grouped = groupBy(data);
console.log(grouped);
//--------------------------------------------------------------------------------------------------------------
console.log(data.length);
//------------------------------find the longest and smallest distance covered by train-------------------------
const sortedDistance = data.sort((c1, c2) => (c1.Distance > c2.Distance) ? 1 : -1);
let len = data.length - 1;
// console.log(sortedDistance);
// --------------------------------smallest distance-----------------------------------------------------------
console.log(sortedDistance[0]);
//----------------------------------longest distance----------------------------------------------------------
console.log(sortedDistance[len - 1]);



