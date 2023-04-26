class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;
        const result = this.calculate(X, Y, znak);
        const confirmation = prompt(`Ви бажаєте виконати дію ${X} ${znak} ${Y}? Введіть "yes" або "no".`);
        if (confirmation === 'yes') {
            console.log(`${X} ${znak} ${Y} = ${result}`);
        } else {
            this.input(obj);
        }
    }

    input(prevObj = {}) {
        const X = Number(prompt('Введіть X:')) || prevObj.X;
        const Y = Number(prompt('Введіть Y:')) || prevObj.Y;
        let znak = prevObj.znak;
        while (!this.isValidZnak(znak)) {
            znak = prompt('Введіть знак дії (+, -, /, *, %):') || prevObj.znak;
        }
        const obj = { X, Y, znak };
        this.check(obj);
    }

    isValidZnak(znak) {
        const allowedZnaks = ['+', '-', '/', '*', '%'];
        return allowedZnaks.includes(znak);
    }

    calculate(X, Y, znak) {
        switch (znak) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '/':
                return X / Y;
            case '*':
                return X * Y;
            case '%':
                return X % Y;
        }
    }
}

const obj = { X: 12, Y: 3, znak: '/' };
const p = new SuperMath();
p.check(obj); // --> запитує користувача підтвердження і виводить результат 4
