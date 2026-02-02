function fetchDataFromServer1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ข้อมูลจากเซิร์ฟเวอร์ที่ 1");
    }, 2000);
  });
}

function fetchDataFromServer2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("เกิดข้อผิดพลาดจากเซิร์ฟเวอร์ที่ 2");
    }, 1000);
  });
}

function fetchDataFromServer3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ข้อมูลจากเซิร์ฟเวอร์ที่ 3");
    }, 3000);
  });
}

Promise.any([
  fetchDataFromServer1(),
  fetchDataFromServer2(),
  fetchDataFromServer3(),
])
  .then((result) => {
    console.log("กรณีที่ 1 ข้อมูลแรกที่สำเร็จ:", result);
  })
  .catch((error) => {
    console.log("กรณีที่ 1 เซิร์ฟเวอร์ทั้งหมดล้มเหลว:", error);
  });

Promise.allSettled([
  fetchDataFromServer1(),
  fetchDataFromServer2(),
  fetchDataFromServer3(),
])
  .then((results) => {
    const allResults = {
      server1: results[0],
      server2: results[1],
      server3: results[2],
    };

    console.log("กรณีที่ 2 ผลลัพธ์จากทุกเซิร์ฟเวอร์:", allResults);
  });