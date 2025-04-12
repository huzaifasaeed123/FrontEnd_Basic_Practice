let url="https://catfact.ninja/fact";


//Using Fetch
// fetch(url)
// .then(function(result){
//     console.log(result);
//     return result.json();
    
// })
// .then(function(data){
//     console.log(data.fact);
// })
// .catch(function(error){
//     console.log(error);
// });

///Using Axios

async function getApi(){
    try{
        let result=await axios.get(url);
    console.log(result.data.fact);

    }
    catch(error){

    }
    
}

getApi();

