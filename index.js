const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    transports: ['websocket']
  },
});

const grid = [];

const PORT = 5000;

io.on("connection", (socket) => {
  socket.on("user-click", ({col, row}) => {
    if (grid[col]) {
        grid[col][row] = !grid[col][row]
    } else {
        const array = [];
        array[row] = true;
        grid[col] = array;
    }
    io.emit("update", {
        grid
    })
  })
  socket.emit("update", { grid });
});

app.use(express.static('./'))

app.get("/", (req, res) => {
  res.sendFile("index.html")
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));