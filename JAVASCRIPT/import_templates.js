function ImportNavBar(id){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
        {
            if (this.readyState == 4)
            {
                if (this.status == 200) 
                {
                    document.getElementById("nav-bar").innerHTML = this.responseText;
                    HighlightCurrent(id);
                }
            }
        }

    xhttp.open("GET", "../Templates/navbar.html", true);
    xhttp.send();

    return;
}

function HighlightCurrent(id)
{
    let elemStyle = document.getElementById(id).style;
    elemStyle.textTransform = "uppercase";
    elemStyle.fontVariant = "normal";
    elemStyle.fontWeight = "bold";
}

function ImportBlog(blog)
{    
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4)
        {
            if (this.status == 200) {document.getElementById("blog-container").innerHTML += this.responseText;}
        }
    }

    xhttp.open("GET", blog, true);
    xhttp.send();  
      
    return;
}
