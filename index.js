const lunchMenu = ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip']
const dinnerMenu = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry']
const sweetMenu = ['Mixed Berry Ice Cream', 'Chocolate Brownie', 'Orange Cheesecake']

// console.log(...lunchMenu)
// Greek Salad,"Open Sandwich","Parsnip Soup","Flatbread and Dip"

const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu]

console.log(eventMenu)