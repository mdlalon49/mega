var stompClient;
var subscribeURL = '/user/queue/reply';

function onReceiveMsg(data) {
    var parsedData = JSON.parse(data.body);
    var status = parsedData["status"];

    location.replace(prefixURL + "/" + token);

}

function subscribeUser() {
    stompClient.subscribe(subscribeURL, onReceiveMsg, {
        "auto-delete": true
    });
}

function onError() {
    console.log('verification web socket connection error');
}

function connectToWebStomp() {
    var sockJsProtocols = ["websocket, xhr-streaming", "xhr-polling"];
    var socket = new SockJS('/websocketmp', null, {
        transports: sockJsProtocols
    });
    stompClient = Stomp.over(socket);

    stompClient.reconnect_delay = 5000;
    stompClient.heartbeat.outgoing = 20000;

    stompClient.connect(rabbitUser, rabbitPassword, subscribeUser, onError, rabbitVirtualHost);
}