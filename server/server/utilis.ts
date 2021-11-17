import { IncomingMessage } from "http";
import { isExpressionStatement } from "typescript";
import { existsSync, readFileSync, writeFileSync } from "fs";

type customRequest = IncomingMessage & { body: { [key: string]: string } };

export const bodyParser = async function bodyParser(req: customRequest) {
  return new Promise<void>((resolve, reject) => {
    let totalChunked = "";
    req
      .on("error", (err: any) => {
        console.error(err);
        reject(err);
      })
      .on("data", (chunk: string) => {totalChunked += chunk })
      .on("end", () => {
        req.body = JSON.parse(totalChunked); // Adding Parsed Chunked into req.body
        resolve();
      });
  });
};

export function getDatabase() {
  if (!existsSync("./product.json")) {
    writeFileSync("./product.json", "[]");
  }
  const content = readFileSync("./product.json", { encoding: "utf8" });
  return content;
}


