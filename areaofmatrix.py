from itertools import chain


def helper(r, c, M):
    S = [[0 for _ in range(c)] for _ in range(r)]
    for i in range(0, r):
        for j in range(0, c):
            if M[i][j] == 1:
                if i == 0 or j == 0:
                    S[i][j] = min(M[i][j], 1)
                else:
                    S[i][j] = min(S[i][j - 1], S[i - 1][j],
                                  S[i - 1][j - 1]) + 1
            else:
                S[i][j] = 0
    return S



A = []
row,col = map(int,input().split())
for i1 in range(row):
    rows = list(map(str,input().split()))
    A.append(rows)
B = []
for row in A:
    s = ' '.join(row)
    s = s.replace('X', '1')
    s = s.replace('O', '0')
    B.append(list(map(str, s.split(' '))))
# print(B)
Mat = helper(row, col, B)
# print(Mat)
print(max(chain.from_iterable(Mat))**2)