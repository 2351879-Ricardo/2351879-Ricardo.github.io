function ImportNavBar(){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
        {
            if (this.readyState == 4)
            {
                if (this.status == 200) {document.getElementById("nav-bar").innerHTML = this.responseText;}
            }
        }

    xhttp.open("GET", "/HTML_Folder/Templates/navbar.html", true);
    xhttp.send();

    return;
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
