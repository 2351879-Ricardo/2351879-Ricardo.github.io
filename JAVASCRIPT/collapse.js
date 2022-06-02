function ToggleCollapseView(element)
{
    var content = element.parentNode.nextElementSibling;
    if (content.style.height === "inherit")
    {
        content.style.height = 0;
        content.style.opacity = 0;
    }

    else
    {
        content.style.height = "inherit";
        content.style.opacity = 1;
    }
}