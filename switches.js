function minSwitches(a) {
    let pattern1 = 0;
    let pattern2 = 0;

    for (let i = 0; i < a.length; i++) {
        
        let expected1 = i % 2;   
        let expected2 = (i + 1) % 2; 

        if (a[i] !== expected1) pattern1++;
        if (a[i] !== expected2) pattern2++;
    }

    return Math.min(pattern1, pattern2);
}


const a = [1, 0, 0, 1, 1, 1, 0];
console.log(minSwitches(a));
