/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var triPoints = [];
  var triCount = 0;
  for(var a = 0; a < preferences.length; a++) {
    if(triPoints[a]) continue;    
    b = preferences[a] - 1;
    if(triPoints[b]) continue;
    c = preferences[b] - 1;
    if(triPoints[c]) continue;
    d = preferences[c] - 1;
    
    if( a != b && b != c && c != d && a == d) {
      triPoints[a] = triPoints[b] = triPoints[c] = true;
      triCount++;
    }
  }

  return triCount;
};
