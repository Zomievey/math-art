let fib = [];

for (let i = 0; i <= 2; i++) {
    if (i < 2) {
        fib[i] = i
    } else {
        setInterval(function () {
            fib[i] = fib[i - 1] + fib[i - 2]
            console.log(fib[i++ % fib.length])
        }, 1000);
    


     
    }
}