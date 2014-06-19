$.ajaxSetup( {
    xhr: function() {
        return new window.XMLHttpRequest( {
            mozSystem: true
        } );
    }
} );
$.ajax(
    {
        url: "http://www.simpleweb.org/",
        success: function (response) {
            $("#address").text(response);

        }
    }
);
//var config = {
//    start: new Date(),
//    end  : new Date(),
//    connectionType: manageWifi ? 'wifi' : null
//};
//
//var request = navigator.mozNetworkStats.getNetworkStats(config);
//
//request.onsuccess = function () {
//    console.log("Data received: " + request.result.data[0].rxBytes + " bytes");
//    console.log("Data sent: " + request.result.data[0].txBytes + " bytes")
//}
//
//request.onerror = function () {
//    console.log("Something goes wrong: ", request.error);
//}