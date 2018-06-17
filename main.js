function permutations(input) {
    const result = [];

    function permute(arr, size) {

        function swap(idx1, idx2) {
            const tmp = arr[idx1];
            arr[idx1] = arr[idx2];
            arr[idx2] = tmp;
        }

        if (size == 1) {
            result.push(arr.slice());
            return;
        }

        for (let i = 0; i < size; i++) {

            permute(arr, size - 1);

            if (size & 1)
                swap(0, size - 1);
            else
                swap(i, size - 1);
        }
    }
    permute(input, input.length);

    return [...new Set(result.map(a => a.join('')))];
}