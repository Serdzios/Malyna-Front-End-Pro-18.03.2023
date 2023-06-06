const http = require("http");
const fs = require("fs");

const offers = new Array(25).fill(null).map((_, i) => ({
    id: `${i}`,
    name: `${i}`,
    coordinates: [createRandomCoord(), createRandomCoord()],
}));
fs.writeFileSync("offers.txt", JSON.stringify(offers));

http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    const url = req.url;
    const method = req.method;

    if (method === "POST") {
        if (url === "/add-offer") {
            const obj = {
                id: `${offers.length}`,
                name: `${offers.length}`,
                coordinates: [createRandomCoord(), createRandomCoord()],
            };
            offers.push(obj);
            fs.writeFileSync(`offers.txt`, JSON.stringify(offers));
            const data = fs.readFileSync(`offers.txt`, `utf8`);
            res.write(data);
            res.end();
        } else {
            res.write("Wrong route");
            res.end();
        }
    } else if (method === "GET") {
        if (url === "/offers") {
            const data = fs.readFileSync("offers.txt", "utf8");
            res.write(data);
            res.end();
        } else {
            res.write("Wrong route");
            res.end();
        }
    } else if (method === "PUT") {
        if (url === `/delete-last-offer`) {
            offers.splice(offers.length - 1, 1);
            fs.writeFileSync(`offers.txt`, JSON.stringify(offers));
            const data = fs.readFileSync(`offers.txt`, `utf8`);
            res.write(data);
            res.end();
        } else {
            res.write("Wrong route");
            res.end();
        }
    } else {
        res.write("Invalid method");
        res.end();
    }
}).listen(4001, function () {
    console.log("Server is started on port 4001");
});

function createRandomCoord() {
    const maxCoord = 37.5;
    const minCoord = 36.0;
    const numsAfterPoint = 4;
    return (Math.random() * (maxCoord - minCoord) + minCoord).toFixed(numsAfterPoint);
}


