// const limesToCut = (wedgesNeeded, limes) => {
//   let wedgeCount = 0
//   let limeCount = 0
//   if (wedgesNeeded) {
//     for (let i = 0; i < limes.length; i++) {
//       console.log(limeCount, wedgeCount);
//       if (wedgeCount >= wedgesNeeded) {
//         return limeCount
//       } else {
//         if (limes[i] === "small") {
//           wedgeCount += 6
//           limeCount++
//         } else if (limes[i] === "medium") {
//           wedgeCount += 8
//           limeCount++
//         } else if (limes[i] === "large") {
//           wedgeCount += 10
//           limeCount++
//         }
//       }
//     }
//   }
//   return limeCount
// }

// const limes = [
//   'small',
//   'large',
//   'large',
//   'medium',
//   'small',
//   'large',
//   'large',
//   'medium',
// ];

// console.log(limesToCut(42, limes));
function timeToMixJuice(name) {
  if (name === "Pure Strawberry Joy") {
    return 0.5
  } else if (name === "Energizer" || name === "Green Garden") {
    return 1.5
  } else if (name === "Tropical Island") {
    return 3
  } else if (name === "All or Nothing") {
    return 5
  } else {
    return 2.5
  }
}


function remainingOrders(timeLeft, orders) {
  const remOrders = [...orders] 
  let totalTime = 0
  for (let order in orders) {
    if (totalTime > timeLeft) {
      return remOrders
    } else {
      totalTime += timeToMixJuice(order)
      remOrders.shift()
      console.log(remOrders);
      console.log(totalTime);
    }
  }
  return remOrders
}

const orders = [
  'Energizer',
  'Green Garden',
  'Ruby Glow',
  'Pure Strawberry Joy',
  'Tropical Island',
  'Limetime',
];

console.log(remainingOrders(12, orders));

