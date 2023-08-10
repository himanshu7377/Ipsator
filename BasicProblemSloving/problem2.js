
// second problem sloving 

function longestSubarray(arr) {
    let maxLength = 0;
    let left = 0;
    let frequency = {};

    for (let right = 0; right < arr.length; right++) {
        const num = arr[right];
        frequency[num] = (frequency[num] || 0) + 1;

        while (Object.keys(frequency).length > 2 || 
               Math.abs(Math.max(...Object.keys(frequency)) - Math.min(...Object.keys(frequency))) > 1) {
            const leftNum = arr[left];
            frequency[leftNum]--;

            if (frequency[leftNum] === 0) {
                delete frequency[leftNum];
            }

            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}