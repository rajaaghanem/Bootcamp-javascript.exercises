function mode(color){
    switch(color){
        case "yellow":
        case "pink":
        case "orange":
            return "light color";
        case "blue":
        case "purple":
        case "brown":
            return "dark color";
        default: return "Unknown color";
    }
}

let res= mode("black");
console.log(res);