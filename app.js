const printForestcast = (temp) => {
  let finalStatus = "";
  let day = 1;
  temp.map((tem) => {
    finalStatus += `...${tem}C in ${day} day${day > 1 ? "s" : ""},`;
    day++;
  });
  console.log(finalStatus);
};
printForestcast([17, 21, 23]);
