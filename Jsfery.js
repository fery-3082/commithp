function terimainput(){
    var a=document.forms["pendaftaran"]["nama"].value;
    var b=document.forms["pendaftaran"]["Destinasi"].value;
    var c=document.forms["pendaftaran"]["Pay"].value;

    var tabel = document.getElementById("table");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    cell4.innerHTML = d;
}