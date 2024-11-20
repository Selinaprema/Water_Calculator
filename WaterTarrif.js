// Retrive elements
const waterUsed = document.getElementById("waterUsed");
const RegularHousehold = document.getElementById("RegularHousehold");
const IndigentHousehold = document.getElementById("IndigentHousehold");
const submitButton = document.getElementById("submitButton");

submitButton.onclick = function (event) {
  event.preventDefault(); // The output would flash on console so I found the solution here:https://stackoverflow.com/questions/55889300/my-javascript-output-flashes-for-a-second-and-then-disappears

  // Retrive values
  const waterUsedValue = Number(waterUsed.value);
  const isRegular = RegularHousehold.checked;
  const isIndigent = IndigentHousehold.checked;

  let totalAmountDue = 0;

  // Calculate the tariff for Indigent households
  if (isIndigent) {
    if (waterUsedValue <= 10.5) {
      totalAmountDue = 0; // Indigent households get first 10.5kl free
    } else if (waterUsedValue <= 35) {
      totalAmountDue = (waterUsedValue - 10.5) * 31.77;
    } else {
      totalAmountDue = (35 - 10.5) * 31.77 + (waterUsedValue - 35) * 69.76;
    }
    // calculate the tariff for Regular household
  } else if (isRegular) {
    if (waterUsedValue <= 6) {
      totalAmountDue = waterUsedValue * 15.73;
    } else if (waterUsedValue <= 10.5) {
      totalAmountDue = 6 * 15.73 + (waterUsedValue - 6) * 22.38;
    } else if (waterUsedValue <= 35) {
      totalAmountDue =
        6 * 15.73 + 4.5 * 22.38 + (waterUsedValue - 10.5) * 31.77;
    } else {
      totalAmountDue =
        6 * 15.73 + 4.5 * 22.38 + 24.5 * 31.77 + (waterUsedValue - 35) * 69.76;
    }
  }

  // Display result in the console using the .tofixed to round the number to 2 decimal places.
  console.log(`Total Amount Due: ${totalAmountDue.toFixed(2)}`);
};
