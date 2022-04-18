var wholeThing = document.querySelector("#design");


    var showButton = document.createElement("button");
    let header = document.createElement("header");
    let headerTalk = document.createTextNode('This is a header');
    header.appendChild(showButton);
    header.appendChild(headerTalk);
    let container = document.createElement("div");
    let containerTalk = document.createTextNode("Big container here");
    container.appendChild(containerTalk);
    let sidebar = document.createElement("div");
    var hideButton = document.createElement("button");
    let sidebarTalk = document.createTextNode("Sidebar on the side!!");
    sidebar.appendChild(sidebarTalk);
    let footer = document.createElement("footer");
    let footerTalk = document.createTextNode("Our page's footer");
    footer.appendChild(footerTalk);
   
    wholeThing.append(header, container,footer);
    container.appendChild(sidebar);
    sidebar.appendChild(hideButton);

    header.setAttribute("class", "header");
    container.setAttribute("class", "container")
    sidebar.setAttribute("class", "sidebar");
    footer.setAttribute("class", "footer");
    showButton.setAttribute("class", "bi bi-list button");
    hideButton.setAttribute("class", "bi bi-x-lg hidebtn");



const showSidebar = () => {
    sidebar.style.display = 'inline-block';
    anime({
        targets: ".sidebar",
        duration: 1500, 
        width: "20vw",
        translateX: 0,
        easing: 'easeOutQuart',
    })
}
showButton.addEventListener('click', showSidebar)

const hideSidebar =  () => {
    anime({
        targets : ".sidebar",
        duration: 1500, 
        keyframes: [
            {width : "20vw"},
            {width: "0%"},
            // {translateY: 40},
            // {translateX: 0},
            // {translateY: 0}
          ], 
        
        translateX: 0,
        easing: 'easeOutQuart',
    }).finished.then(()=>{
        sidebar.style.display = 'none';
    })
    
    console.log("ok");
}
hideButton.addEventListener('click', hideSidebar)    