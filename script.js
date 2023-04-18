// complete the given function

function palindrome(str){
	let arr = str.split(" ")
    let str1 = arr.join("")
	str1 = str1.toLowerCase()
    arr = str1.split("")
    let i = 0, j = arr.length - 1
    while(i < j)
    {
        if(arr[i] != arr[j])
        {
            return false
        }
        i++
        j--
    }
    return true
}
module.exports = palindrome
