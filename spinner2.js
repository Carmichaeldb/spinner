const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let interval = 100;
for (let spin of spinner) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, interval);
  interval += 200;
}