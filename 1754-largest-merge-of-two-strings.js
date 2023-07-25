/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var largestMerge = function(word1, word2) {
    let merge = "";
    
    while(word1.length && word2.length) {
        if (word1[0] > word2[0]) {
            merge += word1[0];
            word1 = word1.slice(1);
        } else if (word1[0] < word2[0]) {
            merge += word2[0];
            word2 = word2.slice(1);
        } else {
            if (word1 > word2) {
                merge += word1[0];
                word1 = word1.slice(1);
            } else {
                merge += word2[0];
                word2 = word2.slice(1);
            }
        }
    }
    
    if (word1.length) {
        merge += word1;
    } else if (word2.length) {
        merge += word2;
    }
    
    return merge;  
};

