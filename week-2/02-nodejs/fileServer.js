/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs/promises");

const bodyParser = require("body-parser");

const path = require("path");
const app = express();

const port = 3000;

app.use(express.json());

// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", async (req, res) => {
	res.send("Hello world!");
});

app.get("/files", async (req, res) => {
	getFileNames();
	const files = await getFileNames();
	res.status(200).send(files);
});

app.get("/file/:filename", async function (req, res) {
	if (!req.params.filename) {
		return res.status(404).send("File not found");
	}
	const data = await getFileText(req.params.filename);
	if (data.success) {
		return res.status(200).send(data.contents);
	}
	return res.status(404).send("File not found");
});

app.post("/api", (req, res) => {
	console.log(req.body);

	res.send("Success!");
});

app.get("*", function (req, res) {
	res.status(404).send("Route not found");
});

app.listen(port, () => {
	console.log("App running at port:", 3000);
});

async function getFileNames() {
	try {
		const files = await fs.readdir("./files");
		return files;
	} catch (error) {
		console.error("error", error);
		return [];
	}
}

async function getFileText(filename) {
	console.log("Requested filename-", `./files/a.txt`);
	try {
		const data = await fs.readFile(`./files/${filename}`, { encoding: "utf8" });
		return { success: true, contents: data };
	} catch (error) {
		console.error("error", error);
		return { success: false };
	}
}

module.exports = app;
