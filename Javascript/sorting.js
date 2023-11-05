

function selectionSort(arr){
    
    for(var i=0;i<arr.length-1;i++){
        var min = arr[i];
        var minIndex = i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<min){
                min = arr[j];
                minIndex = j;
            }
        }
        var temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }

    for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
    }

}

selectionSort([3,4,5,3,22,33,45,3])