/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
if (fileName[0] == '#') {
    console.log("Store");
} else {
    var a = fileName.split('.');
    if (a[a.length - 1] == "pdf" || a[a.length - 1] == "docx") {
        console.log("Store");
    } else {
        console.log("Delete");
    }
}