function ImportAll(id)
{
    // Import Blocks Info
    let blocks = GetBlocks(id);
    blocks.forEach(element => {
        ImportBlog(element);
    });

    // Import Nav Bar
    ImportNavBar(id);   
}

function GetBlocks(id)
{
    switch(id)
    {
        case '#blogs': return ["../Blogs/blog1.html", "../Blogs/blog2.html", "../Blogs/blog3.html", "../Blogs/blog4.html", "../Blogs/blog5.html", "../Blogs/blog6.html", "../Blogs/blog7.html"];
        case '#home': return ["../Home/me.html"];
        case '#portfolio': return["../Portfolio/ses.html"];
        case '#profile': return ["../CV/personalInfo.html", "../CV/education.html", "../CV/skills.html", "../CV/other.html"];
        case '#design': return ["../Design/designLog1.html", "../Design/designLog2.html", "../Design/designLog3.html"];
    }
}