const url=window.location.href
// console.log(url);
const urlParams=new URLSearchParams(url.split("?")[1])
// console.log(urlParams);
const id=urlParams.get("id")
console.log(id);

async function getMovie(){
    const res=await fetch(`http://localhost:3000/api/getmovie/${id}`)
    const movie=await res.json()
    console.log(movie.screen);
    document.getElementById("main").innerHTML=`
    <div>
        <img src=${movie.banner} alt="">
        <div class="main-img">
            <img src=${movie.poster} alt="">
        </div>

        <div class="main-content" >
            <h1 style="font-weight: bold;">${movie.title}</h1>
            <div class="content1">
                <span><i class="fa-solid fa-star" style="color: rgb(190, 82, 82);"></i></span>
                <!-- <span style="margin-right: 10px;">8.9/10</span>
                <span style="margin-right: 80px;">(40.6K Votes) ></span>
                <span><button style="border: none; padding: 6px 14px;border-radius: 4px;">Rate now</button></span> -->
                <span><span style="margin-right: 10px;">${movie.rating}/10</span>
                (40.6K Votes) >
                <span style="margin-left: 20%;"><button style="border: none; padding: 6px 14px;border-radius: 4px;">Rate now</button></span></span>
                
            </div>
            <div class="content3" >
                <p>${movie.language}</p>
            </div>
            <div class="content2" >
                <p>${movie.screen}</p>
            </div>
            <div class="content4"  style="word-spacing: 2px; margin-bottom: 30px;font-weight:bold">
                <span>${movie.duration}</span>
                    <span>• ${movie.genre}</span>
                    <span> •  ${movie.certification}</span>
                    <span> •  ${movie.releaseDate}</span>
            </div>
            <div class="content5">
                <a href="./edit.html?id=${movie._id}"><button>Edit</button></a>
                <button onclick="deleteMovie('${movie._id}')">Delete</button>
            </div>
        </div>
    </div>`
    
    
}
getMovie()


// delete code
async function deleteMovie(id) {
    if(confirm("Do You Want To Delete The Employee?")){
        const res=await fetch(`http://localhost:3000/api/deletemovie/${id}`,{
            method:"DELETE"
        })
        if(res.status==200){
            const data=await res.json()
            alert(data.msg)
            getMovie()
            window.location.href="./movie.html"
        }
        else{
            alert("Failed To Delete")
        }
    }
    
}