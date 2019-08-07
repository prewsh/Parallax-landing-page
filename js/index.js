function Hamburger(){
    
    var myNavs = document.getElementById("myNav");
    if (myNavs === "anchors"){
            // myNavs.className+= " responsive";
            console.log(myNavs.className+= " responsive")
    } else{
            myNavs.className="anchors";
    }
}