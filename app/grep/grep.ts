import { readFileSync } from "fs";

const [filename, searchTerm] = process.argv.slice(2);

const contents = readFileSync(filename, "utf-8");

const lines = contents.split("\n");

for (let line of lines) {
    if (line.includes(searchTerm)) {
        console.log(line)
    }
}
