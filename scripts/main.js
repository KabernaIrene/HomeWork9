const client = prompt ("Write elements");
const result = [...client.split(" ")];


switch (client) {
    case null:
        alert ('ви скасували');
        break;
    case "":
        alert('Empty String');
        break; 
    default: alert (`Введені елементи: ${result}`);
    alert (`Елементи за зростанням: ${result.sort( )}`);
}

    result.splice(2,3);
    alert(`масив без елементів: ${result}`);








