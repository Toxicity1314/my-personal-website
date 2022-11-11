const album = document.getElementById("album");
const folder = document.getElementById("folderFront");

function Enter(){
    const pics = album.querySelectorAll(".pic");
    let deg = pics.length *10;
    let tran = pics.length *30;
    for(pic of pics){
            pic.style.rotate = `${deg}deg`;
            pic.style.translate = `${tran}px`;
            deg-=10;
            tran-=30;
    }

}

function Exit(){
    const pics = album.querySelectorAll(".pic");
    for(pic of pics){
            pic.style.rotate = "0deg";
            pic.style.translate = '0px';
    }


}
function ClickAlbum(){
    const pics = album.querySelectorAll(".pic");
    const dark = document.getElementById("dark");
    dark.style.backgroundColor = "rgba(0,0,0,.7)";
    dark.style.zIndex = "3";
    dark.addEventListener("click", LeaveAlbum);

    //setup for btnNext
    let btnNext = document.createElement("button");
    btnNext.id = "btnNext";
    btnNext.innerHTML = "next picture";
    album.appendChild(btnNext)
    btnNext.style.position= "absolute";
    btnNext.style.right= "5%";
    btnNext.style.top="50%";
    btnNext.style.zIndex="4";
    btnNext.addEventListener("click", nextPicture);

    //setup for btnPrev
    let btnPrev = document.createElement("button");
    btnPrev.id = "btnPrev";
    btnPrev.innerHTML = "Previous picture";
    album.appendChild(btnPrev)
    btnPrev.style.position= "absolute";
    btnPrev.style.left= "5%";
    btnPrev.style.top="50%";
    btnPrev.style.zIndex="4";
    btnPrev.addEventListener("click", prevPicture);
    let zcount = 4;
    let count = 0;
    
    //pops pictures out of folder and places them ontop of dark. After for loops resets the zcount
    for(pic of pics){
        pic.style.zIndex = `${zcount}`;
        pic.style.width = "1024px";
        pic.style.height = "768px";
        pic.style.position = "absolute";
        pic.style.textAlign = "center";
        pic.style.top= "5%";
        zcount--;
        }
        zcount = 4;
    

    function nextPicture(){
        count++;
        zcount++;
        if(pics[count]=== undefined){
            count = 0;
        }
        pics[count].style.zIndex = `${zcount}`;
    
    }

    function prevPicture(){
        count--;
        zcount++;
        if(pics[count]=== undefined){
            count = pics.length-1;
        }
        pics[count].style.zIndex = `${zcount}`;
    
    }

}

function LeaveAlbum(){
    const pics = album.querySelectorAll(".pic");
    const dark = document.getElementById("dark");
    const btnNext = document.getElementById("btnNext");
    const btnPrev = document.getElementById("btnPrev");
    dark.style.zIndex = "-1";
    dark.style.backgroundColor = "white";
    btnNext.remove();
    btnPrev.remove();
    for (pic of pics) {
    pic.style.position= "absolute";
    pic.style.zIndex= "1";
    pic.style.top= "212px";
    pic.style.left= "369px";
    pic.style.width= "400px";
    pic.style.height= "400px";
    }
    

}
folder.addEventListener("mouseenter", Enter);
folder.addEventListener("mouseleave", Exit);
folder.addEventListener("click", ClickAlbum);
