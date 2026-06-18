import axios from "axios";
async function fectchData(url){
 const resposne =await axios.get(url);
 return resposne.data;
}


module.exports = {
    fetchData
};