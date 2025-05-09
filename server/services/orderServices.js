// const { formatDate } = require("../helper/formatDate");
// const productCategory = require("../constants/productCategory");

// const getDateVsSales = (orders) => {
//   let data = [];
//   let i = 0;
//   while (i < orders.length) {
//     let date = formatDate(orders[i].date);
//     let totalSales = 0;
//     while (i < orders.length && formatDate(orders[i].date) === date) {
//       totalSales = totalSales + (orders[i].productId.pricePerUnit * orders[i].orderQty);
//       i++;
//     }
//     data.push({ date: date, totalSales: totalSales });
//   }
//   //   console.log(data);
//   return data;
// };

// const getCategoriesVsSales = (orders) => {
//   let data = [];

//   // console.log(orders);

//   productCategory.map((item) => {
//     data.push({ category: item, totalSales: 0 });
//   });
  
//   for(let i=0; i<orders.length; i++){
//     data.map((item)=>{
//       if(item.category === orders[i].productId.category){
//         item.totalSales = item.totalSales + (orders[i].orderQty * orders[i].productId.pricePerUnit);
//       }
//     })
//   }

//   return data;
// };

// module.exports = { getDateVsSales, getCategoriesVsSales };























const { formatDate } = require("../helper/formatDate");
const productCategory = require("../constants/productCategory");

const getDateVsSales = (orders) => {
  let data = [];
  let i = 0;

  while (i < orders.length) {
    let date = formatDate(orders[i]?.date);
    let totalSales = 0;

    while (i < orders.length && formatDate(orders[i]?.date) === date) {
      if (orders[i]?.productId?.pricePerUnit != null && orders[i]?.orderQty != null) {
        totalSales += orders[i].productId.pricePerUnit * orders[i].orderQty;
      } else {
        console.log("Skipping invalid order at index", i, orders[i]);
      }
      i++;
    }

    data.push({ date: date, totalSales: totalSales });
  }

  return data;
};

const getCategoriesVsSales = (orders) => {
  let data = [];

  // Initialize data array with all categories
  productCategory.forEach((item) => {
    data.push({ category: item, totalSales: 0 });
  });

  for (let i = 0; i < orders.length; i++) {
    if (orders[i]?.productId?.category != null && orders[i]?.productId?.pricePerUnit != null) {
      data.forEach((item) => {
        if (item.category === orders[i].productId.category) {
          item.totalSales += orders[i].orderQty * orders[i].productId.pricePerUnit;
        }
      });
    } else {
      console.log("Skipping invalid order at index", i, orders[i]);
    }
  }

  return data;
};

module.exports = { getDateVsSales, getCategoriesVsSales };
