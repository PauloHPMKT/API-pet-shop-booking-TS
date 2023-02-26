import express, { Request, Response } from "express";
import logger from "morgan";

export const app = express();

// watching logs requests
app.use(logger("dev"));

// enabling cors
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "*");
	res.setHeader("Access-Control-Allow-Headers", "*");

	if (req.method === "OPTIONS") {
		res.status(204).json([]);
	} else {
		next();
	}
});

app.get("/", (req: Request, res: Response) => {
	res.send("testando API");
});
