// Navbar script
document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-links').classList.toggle('active');
});


    var arijitsingh=[
    {
        name:"arijit",
        img:"https://wallpapers.com/images/hd/arijit-singh-playing-piano-and-singing-wbf0geuhfhg4salz.jpg",
    },
    ];
    var  atifaslam=[
    {
        name:"atifaslam",
        img:"https://filmfare.wwmindia.com/content/2020/jun/pakistani-singer-atif-aslam-11593060958.jpg",
    }
    ];
    var  sreyaghosal=[
    {
        name:"sreyaghosal",
        img:"https://static.toiimg.com/photo/81450030.cms",
    }
    ];
    var  jubinnautial=[
        {
            name:"jubinnautial",
        img:"https://cdn.siasat.com/wp-content/uploads/2020/04/Jubin-nautiyal-.jpg",
        }
    ];
    var  jubinnautial=[
        {
            name:"jubinnautial",
            img:"https://cdn.siasat.com/wp-content/uploads/2020/04/Jubin-nautiyal-.jpg",
        }
    ];
    var  kk=[
        {
            name:"kk",
            img:"https://th.bing.com/th/id/OIP.tqPnFmZQN-FRwtlZmMRx0AHaE8?rs=1&pid=ImgDetMain",
        }
        ];
    var  nehakakar=[
        {
            name:"nehakakar",
            img:"https://starsbiog.com/wp-content/uploads/2020/05/Neha-Kakkar.jpg",
        }
        ];
    var  sonunigam=[
        {
            name:"sonunigam",
            img:"https://th.bing.com/th/id/OIP.KHtqL_nmZxd9eoGwZK0KuAHaEq?rs=1&pid=ImgDetMain",
        }
        ];





function displaydata(){
    var singerdiv=``;

    for(var i=0;i<arijitsingh.length;i++){
        singerdiv=singerdiv+`
        
        <div class="singerlplaylist">
        <div class="arijitsingh">
            <div class="img">
                <a href="arijit.html"><img src="${arijitsingh[i].img}" alt=""></a>
            </div>
        </div>
    </div>
        `
    };



    for(var i=0;i<atifaslam.length;i++){
        singerdiv=singerdiv+`
        
        <div class="singerlplaylist">
        <div class="arijitsingh">
            <div class="img">
                <a href="#"><img src="${atifaslam[i].img}" alt=""></a>
            </div>
        </div>
    </div>
        `
    };

    for(var i=0;i<atifaslam.length;i++){
        singerdiv=singerdiv+`
        
        <div class="singerlplaylist">
        <div class="arijitsingh">
            <div class="img">
                <a href="#"><img src="${sreyaghosal[i].img}" alt=""></a>
            </div>
        </div>
    </div>
        `
    };

    for(var i=0;i<jubinnautial.length;i++){
        singerdiv=singerdiv+`
        
        <div class="singerlplaylist">
        <div class="arijitsingh">
            <div class="img">
                <a href="#"><img src="${jubinnautial[i].img}" alt=""></a>
            </div>
        </div>
    </div>
        `
    };

    for(var i=0;i<kk.length;i++){
        singerdiv=singerdiv+`
        
        <div class="singerlplaylist">
        <div class="arijitsingh">
            <div class="img">
                <a href="#"><img src="${kk[i].img}" alt=""></a>
            </div>
        </div>
    </div>
        `
    };

    for(var i=0;i<nehakakar.length;i++){
        singerdiv=singerdiv+`
        
        <div class="singerlplaylist">
        <div class="arijitsingh">
            <div class="img">
                <a href="#"><img src="${nehakakar[i].img}" alt=""></a>
            </div>
        </div>
    </div>
        `
    };

    for(var i=0;i<sonunigam.length;i++){
        singerdiv=singerdiv+`
        
        <div class="singerlplaylist">
        <div class="arijitsingh">
            <div class="img">
                <a href="#"><img src="${sonunigam[i].img}" alt=""></a>
            </div>
        </div>
    </div>
        `
    };

    document.getElementById("singers").innerHTML=singerdiv;
};
displaydata();


