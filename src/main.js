/**
 * program: isOdd
 * input: NUM
 * return boolean
 * 
 * pseducode 
 * 
 * IF input num is not an integar
 * THEN return 'You did not input an integar'
 * 
 * IF input NUM modulus 2  equals 1
 * THEN return true
 * ELSE 
 * return false
 * 
 */


function isOdd(num) {
    if (!Number.isInteger(num)) {
        return 'You did not input an integar'
    }

    if (num % 2 === 1) {
        return true; 
    } else {
        return false;
    }
}

export { isOdd };
