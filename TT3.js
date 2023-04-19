// function  selectionSort(list:number[]){
//     for (let i = 0; i < list.length; i++) {
//         let minIndex = list[i];
//         let index = i
//         for (let j = i+1; j <list.length ; j++) {
//             if(minIndex > list [j]){
//                 minIndex = list[j];
//                 index = j;
//             }
//         }
//         if (index != i) {
//             list[index] = list[i];
//             list[i] = minIndex;
//         }
//     }
//     return list
// }
// let arr = [1, 9, 4.5, 6.6, 5.7, -4.5];
// console.log(selectionSort(arr));
function selectionSort(list) {
    for (var i = 0; i < list.length; i++) {
        var Index = i;
        for (var j = i + 1; j < list.length; j++) {
            if (list[j] < list[Index]) {
                Index = j;
            }
        }
        var tem = list[Index];
        list[Index] = list[i];
        list[i] = tem;
    }
    return list;
}
var arr = [1, 9, 4.5, 6.6, 5.7, -4.5];
console.log(selectionSort(arr));
