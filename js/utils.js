function limit(value,min,max){
    if (value < min){
        return min;
    }
    else if (value > max){
        return max;
    } else {
        return value;
    }
}

function min(val,min){
    if (val < min){
        return min;
    } else {
        return val;
    }
}