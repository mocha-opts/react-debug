let status = "pending";
let result;
let suspender = new Promise((resolve) => {
  setTimeout(() => {
    status = "success";
    result = "Hello Suspense";
    resolve();
  }, 2000);
});

export function read() {
  if (status === "pending") throw suspender;
  return result;
}
