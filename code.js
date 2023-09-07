function binarySearch(list, element) {
    let low = 0;
    let high = list.length - 1;
    let middle = 0;

    while (low <= high) {
        middle = Math.floor((low + high) / 2);

        if (list[middle] == element) {
            return middle;
        } else if (list[middle] > element) {
            high = middle - 1;
        } else if (list[middle] < element) {
            low = middle + 1;
        }
    }
    return -1;
}