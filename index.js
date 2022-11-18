/**
 * Thêm số
 */
var numArray= [];
function getInfo(n) {
    return document.getElementById(n)
}
function getNumber() {
    var n = document.getElementById("enterNum").value * 1 ;
    numArray.push(n),getInfo("txtArray").innerHTML= numArray;
}

//Ex1 BT1. Tổng các số dương trong mảng
document.getElementById("btn1").onclick = function() {
    var sum = 0;
    for (var i=0; i< numArray.length; i++) {
        if (numArray[i] > 0) {
            sum +=numArray[i];
        }
    }
    document.getElementById("ex1").innerHTML = "Tổng số dương: " + sum;
}

//Ex2 BT2. Đếm có bao nhiêu số dương trong mảng
document.getElementById("btn2").onclick = function() {
    var count = 0;
    for (var i = 0; i< numArray.length; i++) {
        if (numArray[i] > 0) {
            count +=1;
        }
    }
    document.getElementById("ex2").innerHTML = "Số dương: " + count;
}

//ex3: BT3. Tìm số nhỏ nhất trong mảng.

document.getElementById("btn3").onclick = function() {
    var min = numArray[0] ;
    for ( var i = 0; i < numArray.length ; i++ ) {
        if (numArray[i] < min) {
            min = numArray[i];
        }
    }    
    document.getElementById("ex3").innerHTML = "Số nhỏ nhất: " + min;
}

//ex4: BT4. Tìm số dương nhỏ nhất trong mảng.

// document.getElementById("btn4").onclick = function() {
//     var minPos = 0 ;
//     for (var i = 0; i < numArray.length ; i++ ) {
//         if ( numArray[i] > 0 && numArray[i] < minPos) {
//             minPos = numArray[i];          
        
           
//         }
        
      
//     }
//     document.getElementById("ex4").innerHTML = "Số dương nhỏ nhất: " + minPos
//     // return document.getElementById("ex4").innerHTML = "Không có số dương trong mảng"
//     return document.getElementById("ex4").innerHTML = " Không có số dương trong mảng " ;
    
// }

document.getElementById("btn4").onclick = function() {
    var minPos = 0;
    for (var i=0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            minPos = numArray[i];
            break;
        }
    }
    if (minPos != 0) {
        for ( var i=0; i < numArray.length; i++) 
        if (numArray[i] > 0 && numArray[i] < minPos) {
                minPos = numArray[i];
                document.getElementById("ex4").innerHTML = "Số dương nhỏ nhất: " + minPos
        }
        
    }else {
        document.getElementById("ex4").innerHTML = " Không có số dương trong mảng " ;
    }
}




function findMinPos(){
    for(var n=[],r=0;r<numArray.length;r++)
    numArray[r]>0&&n.push(numArray[r]);
    if(n.length>0){
        for(var e=n[0],r=1;r<n.length;r++)
        n[r]<e&&(e=n[r]);
        getEle("txtMinPos").innerHTML="Số dương nhỏ nhất: "+e}else getEle("txtMinPos").innerHTML="Không có số dương trong mảng"}

//Ex5: BT5. Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.

document.getElementById("btn5").onclick = function() {    
    for (var i = numArray.length -1; i >= 0 ; i--) {
        if (numArray[i] % 2 == 0) {
          return document.getElementById("ex5").innerHTML = numArray[i];
          }    
           
    }
    return document.getElementById("ex5").innerHTML = -1;
    

}


//Ex6: BT6. Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị)
document.getElementById("btn6").onclick = function() {
    var posi1= document.getElementById("position1").value*1;
    var posi2= document.getElementById("position2").value*1;
    var temp;
    temp = numArray[posi1];
    numArray[posi1] = numArray[posi2];
    numArray[posi2] = temp;
    document.getElementById("ex6").innerHTML = numArray;

}

//EX7: BT7. Sắp xếp mảng theo thứ tự tăng dần

document.getElementById("btn7").onclick = function() {
    for (var i = 0; i < numArray.length - 1; i++){
        for (var j = i+ 1; j < numArray.length; j++ ) 
        if (numArray[i] > numArray[j]) {
            var temp = numArray[i];
            numArray[i] = numArray[j];
            numArray[j] = temp;
        }
        
    }
    document.getElementById("ex7").innerHTML = numArray;
}

//BT8. Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.

function check() {
    function isprime(n){
        //flag = 0 => không phải số nguyên tố
        //flag = 1 => số nguyên tố
        
        var flag = 1;
    
        if (n <2) {
            return flag = 0;
        }  /*Số nhỏ hơn 2 không phải số nguyên tố => trả về 0*/
        
        /*Sử dụng vòng lặp while để kiểm tra có tồn tại ước số nào khác không*/
        var i = 2;
        while(i <n){
            if( n%i==0 ) {
                flag = 0;
                break; /*Chỉ cần tìm thấy 1 ước số là đủ và thoát vòng lặp*/
            }
            i++;
        }
    
        return flag;
    }
    var array =  numArray;

    /*Tìm và liệt kê các số nguyên tố trong mảng*/
    for (var i = 0; i < array.length; i++){
      if (isprime(array[i]) == 1)  {
        return document.getElementById("ex8").innerHTML = array[i] ;
      }  
}
return document.getElementById("ex8").innerHTML = -1 ;
}




//BT9. Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên

var numArray2= [];
function getInfo(n) {
    return document.getElementById(n)
}
function getNumber2() {
    var n = document.getElementById("enterNum2").value * 1 ;
    numArray2.push(n),getInfo("txtArray2").innerHTML= numArray2;
}

document.getElementById("btn9").onclick = function() {
    var count=0;
    for (var i=0; i < numArray2.length; i++) {
        if (Number.isInteger(numArray2[i]) == true) {
            count++;
        }
    }
    document.getElementById("ex9").innerHTML = count;
}

//Ex10: BT10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn

document.getElementById("btn10").onclick = function() {
    var countPos=0;
    var countNeg=0;
    for (var i=0; i < numArray.length ; i++) {
        if (numArray[i] > 0) {
            countPos++;
        } else if (numArray[i] < 0) {
            countNeg++;
        }
    }
    if (countPos > countNeg) {
        document.getElementById("ex10").innerHTML = "Số dương > Số âm ";
    }else if (countNeg > countPos) {
        document.getElementById("ex10").innerHTML = "Số âm > Số dương ";
    }else {
        document.getElementById("ex10").innerHTML = "Số âm = Số dương ";
    }
}

