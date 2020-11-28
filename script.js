function tambahdata() {
	var nama =  document.getElementsByName("nama")[0].value;
	var Destinasi =  document.getElementsByName("Destinasi")[0].value;
	var Pay =  document.querySelector("input[name='Pay']:checked").value;

	htmlText = "<tr>" + 
	"<td>" + nama + "</td>" +
	"<td>" + Destinasi + "</td>" +
	"<td>" + Pay + "</td>" +
	"</tr>";

	document.getElementById("table").innerHTML += htmlText;
	alert("Sukses");

	document.getElementById("pendaftaran").reset();

	return false;
}