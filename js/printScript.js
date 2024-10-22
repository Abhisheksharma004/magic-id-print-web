function printPage() {
    var body = document.getElementById('body').innerHTML;

    var printData = document.getElementById('printData').innerHTML;
    document.getElementById('body').innerHTML = printData;
    window.print();
    document.getElementById('body').innerHTML = body;
    printData.style.position = "fixed";
}