const axios = require('axios');


async function getDevinfo(devs){
    const devData=[];
   
    for(let i=0; i<devs.length; i++){
        const response= await axios.get(`https://api.github.com/users/${devs[i]}`);
        const devObj={name: response.data.name, bio: response.data.bio};

        devData.push(devObj)
    }

    return devData
}


module.exports=getDevinfo;