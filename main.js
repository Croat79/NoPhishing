onhashchange = function () {
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = 'red';
            links[i].innerHTML = links[i].getAttribute("href");
        }
    }
};

window.onload = function () {

    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = 'red';
            links[i].innerHTML = links[i].getAttribute("href");
        }
    }

};

