
export async function getRequest(url) {

    const request = await fetch(url);

    if (request.ok) {
        const response = await request.json();
        return Promise.resolve(response);
    } else {
        return Promise.reject(request);
    }
}
export async function getCountryData(country) {
    const request = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=${country.toLowerCase()}` , {
             "method":"GET",
             "headers": {
                "x-rapidapi-key": "8808733b47msh60f6061911cfac3p1f63fdjsn6b58bf883837",
                "x-rapidapi-host": "covid-193.p.rapidapi.com"
            }
         });
         if(request.ok){
             const response = await request.json();
             console.log(response)
             return Promise.resolve(response.response[0])
         }else{
             return Promise.reject(request)
         }
}
export function convertArrayToArrOfObject(arr, _2d = true) { // create dynmic keys creation [Next level]
    if (isArr(arr)) {
        let arrOfObj = new Array();

        arr.forEach((element) => {
            let obj = new Object()
            obj.country = element[0];
            obj.code = element[1]
            arrOfObj.push(obj)
        }, []);
        return arrOfObj;

    }
}



const isArr = arr => {
    return arr instanceof Array && Array.isArray(arr);
}

export const Coutries = [
    ['Palestine', 'PS'],
    ['Oman', 'OM'],
    ['Yemen', 'YE'],
    ['Saudi Arabia', 'SA'],
    ['Qatar', 'QA'],
    ['Bahrain', 'BH'],
    ['Jordan', 'JO'],
    ['Lebanon', 'LB'],
    ['Kuwait', 'KW'],
    ['Iraq', 'IQ'],
    ['Syria', 'SY'],
    ['Egypt', 'EG'],
    ['Libya', 'LY'],
    ['Tunisia', 'TN'],
    ['Algeria', 'DZ'],
    ['Morocco', 'MA'],
    ['Mauritania', 'MR'],
    ['Somalia', 'SO'],
    ['Sudan', 'SD'],
    ['Comoros', 'KM'],

]
