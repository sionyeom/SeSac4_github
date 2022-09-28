var socket = io.connect();

socket.on("connect", function() {
  console.log("server connected");
});
