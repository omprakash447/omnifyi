// Navbar script
document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-links').classList.toggle('active');
});


let musicarray = [{
        name: "Sataranga main sata ranga",
        src: "https://pagalworld.ink/files/download/type/128/id/11753",
        img: "https://pagalworld.ink/siteuploads/thumb/c/1657_2_resize2x_200x200.webp",
    },
    {
        name: "Tu mohobatt he ishq he mera",
        src: "https://pagalworld.ink/files/download/type/128/id/11875",
        img: "https://pagalworld.ink/siteuploads/thumb/sft24/11875_resize2x_200x200.webp",
    },
    {
        name: "	O Mahi O Mahi Mp3 Download Arijit Singh",
        src: "https://www.pagalworld.com.cm/files/download/type/128/id/68671",
        img: "https://www.pagalworld.com.cm/siteuploads/thumb/sft138/68671_4.jpg",
    },
    {
        name: "	Ve Kamleya Mp3 Download Arijit Singh",
        src: "https://pagalworld.cool/files/download/type/64/id/1101",
        img: "https://pagalworld.cool/siteuploads/thumb/sft3/1101_resize2x_250x250.webp",
    },
    {
        name: "Tu har lamha mujhse juda",
        src: "https://pagalworld.ink/files/download/type/128/id/11874",
        img: "https://pagalworld.ink/siteuploads/thumb/sft24/11874_resize2x_200x200.webp",
    },
    {
        name: "Heeriye heeriye",
        src: "https://pagalworld.ink/files/download/type/128/id/11828",
        img: "https://pagalworld.ink/siteuploads/thumb/sft24/11828_resize2x_200x200.webp",
    },
    {
        name: "be saberiyana",
        src: "https://www.pagalworld.com.sc/datadbs/thumb/sft31/15250_4.jpg",
        img: "https://pagalworld.ink/siteuploads/thumb/c/1657_2_resize2x_200x200.webp",
    },
    {
        name: "Lal joda pehene ana",
        src: "https://pagalworld.ink/files/download/type/128/id/11742",
        img: "https://pagalworld.ink/siteuploads/thumb/sft24/11742_resize2x_200x200.webp",
    },
    {
        name: "Teri Meri Baatein Hoti Rahe Mp3 Download",
        src: "https://www.pagalworld.com.sc/files/download/type/192/id/8898",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft18/8898_4.jpg",
    },
    {
        name: "Cheleya",
        src: "https://pagalworld.ink/files/download/type/128/id/11607",
        img: "https://pagalworld.ink/siteuploads/thumb/c/1651_2_resize2x_200x200.webp",
    },
    {
        name: "Jhumka Jhumak",
        src: "https://pagalworld.ink/files/download/type/128/id/11560",
        img: "https://pagalworld.ink/siteuploads/thumb/c/759_2_resize2x_200x200.webp",
    },
    {
        name: "Tu hat rakhde dilpe zara",
        src: "https://pagalworld.ink/files/download/type/128/id/11404",
        img: "https://pagalworld.ink/siteuploads/thumb/sft23/11404_resize2x_200x200.webp",
    },
    {
        name: "Tu he to mujhe phir aur kya chahiye",
        src: "https://pagalworld.ink/files/download/type/128/id/11394",
        img: "https://pagalworld.ink/siteuploads/thumb/c/1647_2_resize2x_200x200.webp",
    },
    {
        name: "Ooo be dardiya",
        src: "https://pagalworld.ink/files/download/type/128/id/10679",
        img: "https://pagalworld.ink/siteuploads/thumb/sft22/10679_resize2x_200x200.webp",
    },
    {
        name: "Pyar hot hotakayee bar he",
        src: "https://pagalworld.ink/files/download/type/128/id/10416",
        img: "https://pagalworld.ink/siteuploads/thumb/sft21/10416_resize2x_200x200.webp",
    },
    {
        name: "Mainu chadeiya dance ka bhutt chadeiya",
        src: "https://pagalworld.ink/files/download/type/128/id/8957",
        img: "https://pagalworld.ink/siteuploads/thumb/sft18/8957_6_resize2x_200x200.webp",
    },
    {
        name: "Kesariya tera ishq he piya",
        src: "https://pagalworld.ink/files/download/type/128/id/8594",
        img: "https://pagalworld.ink/siteuploads/thumb/sft18/8594_6_resize2x_200x200.webp",
    },
    {
        name: "Ooo desh mere",
        src: "https://pagalworld.ink/files/download/type/128/id/8443",
        img: "https://pagalworld.ink/siteuploads/thumb/sft17/8443_6_resize2x_200x200.webp",
    },
    {
        name: "Deva Deva",
        src: "https://pagalworld.ink/files/download/type/128/id/8262",
        img: "https://pagalworld.ink/siteuploads/thumb/sft17/8262_6_resize2x_200x200.webp",
    },
    {
        name: "Na ho ke bhi karib tu hamesa pas tha",
        src: "https://pagalworld.ink/files/download/type/128/id/8050",
        img: "https://pagalworld.ink/siteuploads/thumb/sft17/8050_6_resize2x_200x200.webp",
    },
    {
        name: "Kitni haseen hogi",
        src: "https://pagalworld.ink/files/download/type/128/id/6891",
        img: "https://pagalworld.ink/siteuploads/thumb/sft14/6891_6_resize2x_200x200.webp",
    },
    {
        name: "ye jawani he diwani",
        src: "https://pagalworld.ink/files/download/type/128/id/6886",
        img: "https://pagalworld.ink/siteuploads/thumb/sft14/6886_6_resize2x_200x200.webp",
    },
    {
        name: "ye jawani he diwani",
        src: "https://pagalworld.ink/files/download/type/128/id/6884",
        img: "https://pagalworld.ink/siteuploads/thumb/sft14/6884_6_resize2x_200x200.webp",
    },
    {
        name: "city light",
        src: "https://pagalworld.ink/files/download/type/128/id/6684",
        img: "https://pagalworld.ink/siteuploads/thumb/sft14/6684_6_resize2x_200x200.webp",
    },


];




function displaythings(data) {


    let divstring = "";

    for (var i = 0; i < data.length; i++) {
        divstring = divstring + `
        <div class="musiccard">
        <div class="audioimg">
        <div class="img">
            <img class="ok" src="${data[i].img}" alt="">
        </div>
        <audio src="${data[i].src}" controls class="audios"></audio>
        </div>
        
    </div>
        `

        document.getElementById("musicarijit").innerHTML = divstring;
    }
}
displaythings(musicarray);


// search engine


function searchfun() {
    let music = document.getElementById("search").value.toUpperCase();


    if (music != "") {
        let result = musicarray.filter(function(singer) {
            return singer.name.toUpperCase().includes(music.toUpperCase());
        })
        displaythings(result);
        console.log(result);

    }


}

// one by one play

// let currentAudio = null;

// function playMusic() {
//     const audio = new Audio(musicarray[i].src);
//     audio.play();
//     if (currentAudio) {
//         currentAudio.pause(); // Pause the previously playing audio
//     }
//     currentAudio = audio;
// }


let audios = document.querySelectorAll(".ok");
let bin = document.querySelectorAll('audio')

function stop(x) {
    for (var i = 0; i < bin.length; i++) {
        bin[i].pause();
    }

}




audios.forEach((item, key) => {
    item.addEventListener("click", () => {
        stop(key);
        bin[key].play();

    })

})