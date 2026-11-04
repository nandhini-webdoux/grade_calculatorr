//square 5*5 grid pattern
function squarePattern(n){
    for(let i=0;i<n;i++){
        let row="";
        for(let j=0;j<n;j++){
            row+="* ";
        }
        console.log(row);
    }
}
squarePattern(5)

function rightTraianglePattern(n){
    for(let i=0;i<n;i++){
        let row="";
        for(let j=0;j<=i;j++){
            row=" *"+row;
        }
        console.log(row);
    }
}
rightTraianglePattern(5)

//number pyramid
function numberPyramid(n){
    for(let i=0;i<n;i++)
    {
        let row1=" "
        for(let j=0;j<=n-i;j++){
            row1+=" ";
        }
        for(let k=0;k<i;k++){
            row1+=k+" "
        }
        console.log(row1);
    }
}
numberPyramid(6)