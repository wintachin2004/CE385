function simulateAsyncOperation(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeout < 1000) {
        reject("Error: Timeout too short");
      } else {
        resolve("Async operation completed");
      }
    }, timeout);
  });
}

async function performAsyncTask(timeout) {
  try {
    const result = await simulateAsyncOperation(timeout);
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

performAsyncTask(1500); 
performAsyncTask(500);  