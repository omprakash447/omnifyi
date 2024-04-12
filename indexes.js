// Navbar script
document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-links').classList.toggle('active');
});



//  singers array

var singerarr = [{
        src: "https://wallpapers.com/images/hd/renowned-indian-singer-arijit-singh-1gy48cxqhvzvanzd.jpg",
    },
    {
        src: "https://th.bing.com/th/id/OIP.zSH88V28gL5eKuF2EKaDwQAAAA?rs=1&pid=ImgDetMain",
    },
    {
        src: "https://th.bing.com/th/id/R.f4c123d3453e3e4da70d3cf9681591d3?rik=3Ge6NMtI%2fNUmZA&riu=http%3a%2f%2fwww.causticnews.com%2fwp-content%2fuploads%2f2017%2f12%2fgrd-768x494.png&ehk=mKE5NLXOX6F1LCPEjUjg7eOFHkVnK3vBSHLu1YA3CtY%3d&risl=&pid=ImgRaw&r=0",
    },
    {
        src: "https://images.mid-day.com/images/images/2022/oct/Armaan-Print_d.jpg",
    },
    {
        src: "https://www.iwmbuzz.com/wp-content/uploads/2021/02/jubin-nautiyals-5-best-on-stage-moments.jpg",
    },
    {
        src: "https://2.bp.blogspot.com/-dYRZ96uOD6k/VZFTYRvge9I/AAAAAAAA1fE/hjXayY7YQFA/s1600/62nd_filmfare_awards_event_stills%2B%252885%2529.jpg",
    },
    {
        src: "https://th.bing.com/th/id/OIP.5BmTbjD4VtgeN1Izdg843wHaHa?rs=1&pid=ImgDetMain",
    },
    {
        src: "https://wallpapercave.com/wp/wp7498130.jpg",
    },
];

// array of playlist

let playlist = [{
        name: " Tera Naal Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft31/15091_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/15091",
    },
    {
        name: "Tere Vaste Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft31/15376_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/15376",
    },
    {
        name: "Main Tumhara Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft23/11460_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11460",
    },
    {
        name: " Husn Hai Suhana Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft5/2095_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/2095",
    },
    {
        name: " Hum Dum Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft4/1974_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/1974",
    },
    {
        name: "Shiddat Title Track Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft4/1971_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/1971",
    },
    {
        name: "Ye Ishq Na Ho Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft18/8914_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/8914",
    },


    {
        name: "Tu Phir Bhi Jaan Hai Meri Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11979_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11979",
    },
    {
        name: "Aansoo Bhari Hai Yeh Jevan Ke Mp3 Dow",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11919_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11919",
    },

    {
        name: "Jaan Hai Meri Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11976_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11976",
    },

    {
        name: "Yo Yo Honey Singh Saiyaan Ji Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11638_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11638",
    },

    {
        name: "Jubin Nautiyal Lut Gaye Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11633_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11633",
    },
    {
        name: "Jubin Nautiyal Bedardi Se Pyaar Ka Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11629_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11629",
    },
    {
        name: "Gajendra Verma Pehla Pyar Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11640_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11640",
    },
    {
        name: "Parampara Tandon Chhor Denge Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11631_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/11631",
    },
    {
        name: "Gajendra Verma Pehla Pyar Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11640_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11640",
    },
    {
        name: "Mohammed Irfan Belafz Baatein Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11643_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11643",
    },

    {
        name: "Tumko Barish Pasand Hai Mujhe Barish Me Tum Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft23/11289_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/320/id/11289",
    },
    {
        name: "Pachtaoge-Tum Hi Ho Lofi Mix Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11609_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11609",
    },
    {
        name: " Gehraiyaan Title Track Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11608_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11608",
    },
    {
        name: " Baarish Ban Jaana Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft24/11627_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/11627",
    },

    {
        name: "Tumko Barish Pasand Hai Mujhe Barish Me Tum Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft18/8748_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/8748",
    },
    {
        name: " Meri Berang Duniya Me Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft18/8766_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/8766",
    },
    {
        name: " Vishal Dadlani Paisa Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft18/8711_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/8711",
    },
    {
        name: " Hua Hai Aaj Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft18/8721_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/8721",
    },

    {
        name: "Hame Tumse Hua Hai Pyar Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft18/8556_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/8556",
    },
    {
        name: " Rab Ne Milaya Dhadkan Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft18/8642_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/8642",
    },
    {
        name: "I Am Icon Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft18/8798_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/8798",
    },
    {
        name: "  Saiyan Dil Mein Aana Re Mp3 Downl",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft23/11292_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/128/id/11292",
    },

    {
        name: "Musafir - Ankit Tiwari Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft17/8387_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/8387",
    },
    {
        name: "Mungda Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft18/8657_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/8657",
    },
    {
        name: "Bhai Mere Bhai Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft18/8674_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/id/8674",
    },
    {
        name: "Mujhe Ishq Hai Tere Chhune Se - Darshan Raval Mp3 Downloadl",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft18/8532_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/8532",
    },

    {
        name: "Lata Mangeshkar Ek Pyar Ka Naghma Hai Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft16/7662_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/7662",
    },
    {
        name: "Lata Mangeshkar Zindagi Pyar Ka Geet Hai Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft16/7672_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/7672",
    },
    {
        name: "Lata Mangeshkar Aata Visavyache Kshana Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft16/7689_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/7689",
    },
    {
        name: "Lata Mangeshkar Yara Sili Sili Mp3 Downloa",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft16/7688_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/7688",
    },

    {
        name: "Lata Mangeshkar Ek Pyar Ka Naghma Hai Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft16/7662_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/7662",
    },
    {
        name: "Lata Mangeshkar Zindagi Pyar Ka Geet Hai Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft16/7672_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/7672",
    },
    {
        name: "Lata Mangeshkar Aata Visavyache Kshana Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft16/7689_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/7689",
    },
    {
        name: "Jubin Nautiyal Dil Pe Zakham Mp3 Download",
        img: "https://www.pagalworld.com.sc/datadbs/thumb/sft15/7402_4.jpg",
        music: "https://www.pagalworld.com.sc/files/download/type/192/id/7402",
    },



];





// function singer(){
//     let divsinger=``;
//     for( let i=0;i<singerarr.length;i++){
//         divsinger=divsinger+`


//         `
//     };
//     document.getElementById("singers").innerHTML=divsinger;
// }
// singer();

// multilpe

function playlistarray(data) {

    document.getElementById("cards").innerHTML = "";

    let divstring = ``;

    for (let i = 0; i < data.length; i++) {
        divstring = divstring + `
        <div class="playlists">
        <div class="images">
            <img src="${data[i].img}" alt="" class="ok">
        </div>
        <div class="audio">
        <audio src="${data[i].music}" controls></audio>
        </div>
    </div>
 
    `
    };

    document.getElementById("cards").innerHTML = divstring;
}
playlistarray(playlist);



// search singer

function searchfun() {
    let song = document.getElementById("search").value.toUpperCase();


    if (song != "") {
        let result = playlist.filter(function(singer) {
            return singer.name.toUpperCase().includes(song.toUpperCase());
        })
        playlistarray(result);
        console.log(result);

    }


}


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