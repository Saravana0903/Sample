def fun(word,vowels):
    for char in word:
        count = 0
        if char in vowels:
            count += 1
        if count == 0:
            return "Not perfect"
    return "Perfect"
vowels = ['a','e','i','o','u']
word = input()
print(fun(word,vowels))