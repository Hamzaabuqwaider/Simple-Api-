// fetch("https://www.breakingbadapi.com/api/")
// .then(function(response){
  
//     return response.json();
    
// })
//     .then(function(data){
//         console.log(data);
//     })

//     Promise

async function get() {
    const response = await fetch("https://www.breakingbadapi.com/api/characters/");
    const data = await response.json();
    console.log(data);
    data.map(function(actor){
        console.log(actor.name);
    })

    document.querySelector("#content h1").innerHTML = "<h1>" + data[0].name + "</h1>";
    document.querySelector("#content h5").innerHTML = "<h1>" + data[0].birthday + "</h1>";

    document.querySelector("#content img").src = data[0].img;
    document.querySelector("#actor").innerHTML = 
    `<select>
    ${
        data.map(actor => `<option> ${actor.name} </option>`)
    }
    </select>
    `

}
get();