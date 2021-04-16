const storeCat = async (cat) => {
  const request = fetch('http://localhost:3333/cat' , {
    method:'post',
    headers : {
      "Content-Type":"application/json"
    }
  })

}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


export default {capitalizeFirstLetter}