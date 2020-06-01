// leetCode 14
const longestCommonPrefix = strs => {
    if (strs.length === 0) return ''
    if (strs.length === 1) return strs[0]

    let shortest = strs[0].length

    for (let i = 0, k = 0; i < strs.length - 1; i++) {
        if (strs[k].length > strs[i + 1].length) {
            shortest = strs[i + 1].length
            k = i + 1
        }
    }

    let result = []

    for (let j = 1, l = 0; l < shortest;) {
        if (strs[0].charAt(l) === strs[j].charAt(l)) {
            j++

            if (j === strs.length) {
                result.push(strs[0].charAt(l))
                j = 1
                l++
            }
        } else if (l > 0) {
            return result.join('')
        } else {
            return ''
        }
    }
    
    return result.join('')
}



