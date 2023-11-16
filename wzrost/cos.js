function oblicz()
{
    var w=document.getElementById("wzrost").value;
    w =parseInt(w);
    switch (true){
        case (w>0 && w<=155):
        document.getElementById("wyjscie").innerHTML ="niski"; break;
        case (w>155 && w <=180):
        document.getElementById("wyjscie").innerHTML ="średni";break;
        case (w>180):
            document.getElementById("wyjscie").innerHTML ="wyskoi";break;
            default:
                document.getElementById("wyjscie").innerHTML="podaj poprawna wartosc";
    }
}