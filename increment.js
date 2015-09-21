function increment()
{
    var element = document.getElementById("i");
    var i = parseInt(element.innerHTML);
    document.getElementById("i").innerHTML = (++i).toString();
}


