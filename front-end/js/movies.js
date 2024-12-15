async function getMovies(){
    const res=await fetch("http://localhost:3000/api/getmovies");
    const movie=await res.json();
    // console.log(movie);
    str=``


    movie.map((data)=>{
        // console.log(data);
        str+=`<div class="left">
                <div class="box">
                    <a href="./movies.html?id=${data._id}">
                        <img src=${data.poster} alt="">

                        <h6>${data.title}</h6>
                        <span>${data.genre}</span>
                    </a>
                </div>
            </div>`

    })
    document.getElementById("cards").innerHTML=str
    
    

}
getMovies()