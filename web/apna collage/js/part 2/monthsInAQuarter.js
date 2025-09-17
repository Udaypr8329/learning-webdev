let num = Number(prompt("Enter any one number b/w 1-4 to print the months in a quarter :-"));

switch (num) {
    case 1:
        console.log("MonthsinQuarter1:January,February,March");
        break;
    case 2:
        console.log("MonthsinQuarter2:April,May,June");
        break;
    case 3:
        console.log("MonthsinQuarter3:July,August,September");
        break;
    case 4:
        console.log("MonthsinQuarter4:October,November,December");
        break;
    default:
        console.log("Invalid input.");
        break;
}