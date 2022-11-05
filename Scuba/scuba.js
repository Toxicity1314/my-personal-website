/*function heyListen(){
    const input = document.getElementById("album");
    console.log(album)
    function Enter(){
        console.log("yay!");
        }

    input.addEventListener("mouseenter", Enter)
    }


heyListen()
*/
const album = document.getElementById("album");

function Enter(){
    const pics = album.querySelectorAll("img")
    let deg = pics.length *10;
    let tran = pics.length *30;
    for(pic of pics){
        if(pic != pics[3]){
            pic.style.rotate = `${deg}deg`;
            pic.style.translate = `${tran}px`
            deg-=10;
            tran-=30;
        }

    }

}

function Exit(){
    const pics = album.querySelectorAll("img")
    let tran = -(pics.length *10);
    for(pic of pics){
        if(pic != pics[3]){
            pic.style.rotate = "0deg";
            pic.style.translate = '0px'
        }
    }


}

album.addEventListener("mouseenter", Enter)
album.addEventListener("mouseleave", Exit)
