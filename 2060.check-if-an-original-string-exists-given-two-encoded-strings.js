function possiblyEquals(s1, s2) {
  const n = s1.length, m = s2.length;
  const dp = Array.from({ length: n + 1 }, v => Array.from({ length: m + 1}, w => new Set()));
  dp[0][0].add(0);

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      for (let delta of dp[i][j]) {
        // s1 is number
        let num = 0;
        if (delta <= 0) {
          for (let p = i; i < Math.min(i + 3, n); p++) {
              if (isDigit(s1[p])) {
                  num = num * 10 + Number(s1[p]);
                  dp[p + 1][j].add(delta + num);
              } else {
                  break;
              }
          }
        }

        // s2 is number
        num = 0;
        if (delta >= 0) {
            for (let q = j; q < Math.min(j + 3, m); q++) {
                if (isDigit(s2[q])) {
                    num = num * 10 + Number(s2[q]);
                    dp[i][q + 1].add(delta - num);
                } else {
                    break;
                }
            }
        }

        // match s1 non-digit character
        if (i < n && delta < 0 && !isDigit(s1[i])) {
            dp[i + 1][j].add(delta + 1);
        }

        // match s2 non-digit character
        if (j < m && delta > 0 && !isDigit(s2[j])) {
            dp[i][j + 1].add(delta - 1);
        }

        // two non-digit character match
        if (i < n && j < m && delta == 0 && s1[i] == s2[j]) {
            dp[i + 1][j + 1].add(0);
        }

      }
    }
  }
  return dp[n][m].has(0);
};

function isDigit(char) {
  return (/^\d{1}$/g).test(char);
}

