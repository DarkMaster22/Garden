let lung = document.getElementById("langBtn");
let arabic = localStorage.getItem("isArabic") === "true";

language(arabic)

function SwitchLung()
{
    arabic = !arabic
    language(arabic)
}
function GoHome()
{
    window.location.href = "index.html"
}
function Doc()
{
    window.location.href = "doc.html"
}
function ReportBugs()
{
    window.location.href = "index.html#Report"
}
function language(ar)
{
    localStorage.setItem("isArabic", ar);
    let pageEN = document.getElementById("contentEN");
    let pageAR = document.getElementById("contentAR");
    if (ar)
    {
        lung.textContent = "AR";
        pageEN.style.display = "none";
        pageAR.style.display = "block";
    }
    else
    {
        lung.textContent = "EN";
        pageEN.style.display = "block";
        pageAR.style.display = "none";
    }
}

//download

function Windows10()
        {
            const url = "https://drive.google.com/uc?export=download&id=1ECnr3aQeHJr8rpbkEvFyCb9XvSl56tTN";
            const a = document.createElement("a");
            a.href = url;
            a.download = "";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        function Linux()
        {
            alert("قريبا سيتوفر على نضام linux")

        }


