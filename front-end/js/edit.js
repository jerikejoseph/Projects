const url=window.location.href
// console.log(url);
const urlParams=new URLSearchParams(url.split("?")[1])
// console.log(urlParams);
const id=urlParams.get("id")
console.log(id);
let poster;
let banner;


async function getMovie() {
    const res=await fetch(`http://localhost:3000/api/getmovie/${id}`);
    const movie=await res.json()
    document.getElementById("forms").innerHTML=`
             <table>
                    <tr>
                        <td> Title:</td>
                        <td class="input" ><input type="text"  id="title" value="${movie.title}" required></td>
                    </tr>
                    <tr>
                        <td> Rating:</td>
                        <td class="input" ><input type="number"  id="rating" value="${movie.rating}" required></td>
                    </tr>
                    <tr>
                        <td> Screen:</td>
                        <td class="input" ><select id="screen">
                            <option value="${movie.screen}">${movie.screen}</option>
                            <option value="2D">2D</option>
                            <option value="3D">3D</option>
                            <option value="IMAX">IMAX</option>
                            <option value="4DX">4DX</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td> Duration:</td>
                        <td class="input" ><input type="text" name="name" id="duration" value="${movie.duration}" required></td>
                    </tr>
                    <tr>
                    <td> Genre:</td>
                    <td><select id="genre">
                        <option value="${movie.genre}">${movie.genre}</option>
                        <option value="Action">Action</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Romance">Romance</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td>ReleaseDate:</td>
                        <td class="input" ><input type="date" id="releaseDate" value="${movie.releaseDate}" required></td>
                    </tr>
                    <tr>
                        <td>Language:</td>
                        <td class="input" ><input type="text"  id="language" value="${movie.language}" required></td>
                    </tr>
                    <tr>
                        <td>Certification:</td>
                        <td class="input" ><select id="certification" required>
                            <option value="${movie.certification}">${movie.certification}</option>
                            <option value="U">U</option>
                            <option value="UA">UA</option>
                            <option value="A">A</option>
                            <option value="S">S</option>
                        </select></td>
                    </tr>
                    
                    <tr>
                    <tr><td></td><td><div><img src="${movie.poster}" alt="" id="bms-poster"></div></td></tr>
                    <tr>
                        <td>POSTER:</td>
                        <td class="input" ><input type="file"  id="poster"  value="${movie.poster}"   onchange="getPoster()"></td>
                    </tr>

                    <tr><td></td><td><div><img src="${movie.banner}" alt="" id="bms-banner"></div></td></tr>
                    <tr>
                        <td>BANNER:</td>
                        <td class="input" ><input type="file"  id="banner" value="${movie.banner}"  onchange="getBanner()"></td>
                    </tr>

                    </tr>
                    <tr>
                        <td><input type="submit" value="Edit" class="button" id=""></td>
                    </tr>
    
                </table> `
    
}
getMovie()

document.getElementById("forms").addEventListener("submit",async(e)=>{
    e.preventDefault();

    const title=document.getElementById("title").value
    const rating=document.getElementById("rating").value
    const screen=document.getElementById("screen").value
    const duration=document.getElementById("duration").value
    const genre=document.getElementById("genre").value
    const releaseDate=document.getElementById("releaseDate").value
    const language=document.getElementById("language").value
    const certification=document.getElementById("certification").value

    console.log(title,rating,screen,duration,genre,releaseDate,language,certification);

    await fetch(`http://localhost:3000/api/updatemovie/${id}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({title,rating,screen,duration,genre,releaseDate,language,certification,poster,banner})
    }).then(async(res)=>{
        const data=await res.json()
        if(res.status==201){
            alert(data.msg)
            window.location.href="./movie.html"
        }
        else{
            alert("Something went wrong please try again!!")
        }

    }).catch((error)=>{
        console.log(error);
        
    })
})


async function getPoster() {
    console.log(document.getElementById("poster").files[0]);
    poster=await convertBase64(document.getElementById("poster").files[0]);
    document.getElementById("bms-poster").src=poster

    
    
}

async function getBanner() {
    console.log(document.getElementById("banner").files[0]);
    banner=await convertBase64(document.getElementById("banner").files[0]);
    document.getElementById("bms-banner").src=banner

    
    
}

function convertBase64(file){
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader()
        fileReader.readAsDataURL(file);
        fileReader.onload=()=>{
            resolve(fileReader.result)
        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })

}
