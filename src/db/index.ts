import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export const dbConnection = (uri: string) => {
	mongoose.connect(uri);

	const db = mongoose.connection;

	db.once("open", () => {
		console.log("connected to database");
	});

	db.on("error", console.error.bind(console, "connection error"));
};
