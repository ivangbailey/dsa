function printAllSubarrays(A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      // print subarray from i to j
      for (let k = i; k <= j; k++) {
        // print (A[k])
      }
      // print new line
    }
  }
}