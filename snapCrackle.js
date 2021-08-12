function snapCrackle(maxValue){
    let list = ''
    for (let i= 1 ; i <= maxValue; i++){
        if (i % 2 != 0 && i % 5 == 0){
            list += ' SnapCrackle, '  
        } else if (i % 2 != 0){
            list +=' Snap, ' 
        } else if (i % 5 == 0){
            list +=' Crackle, '
        }else if(i % 2 == 0 && i % 5 != 0){
            list += i +' , '
        }
    }
    return list
}

//console.log(snapCrackle(20))

