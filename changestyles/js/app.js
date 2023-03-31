function myFun(character);
    charToDelete = '#'
    return charToDelete != character


myStr = "#1, #2, #3, #4, #5, #6, #7, #8"
print("The original string is:", myStr)
charToDelete = '#'
print("The character to delete:", charToDelete)
myList = list(filter(myFun, myStr))
print("The list is:")
print(myList)
outputString = "".join(myList)
print("The modified string is:", outputString)