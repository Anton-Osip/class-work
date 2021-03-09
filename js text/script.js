const main= []


const Code = function(){
    this.showRegistrationPage = function(){
        del();

        document.querySelector('.login').classList.add('active');
        document.querySelector('.main').classList.add('not-active');
        document.querySelector('.sign').classList.add('not-active');
    }

    this.showAuthPage = function(){
        del();

        document.querySelector('.login').classList.add('not-active');
        document.querySelector('.main').classList.add('not-active');
        document.querySelector('.sign').classList.add('active');
    }
    this.Auth = function(){
        const email = document.querySelector('.mail__log').value;
        const password = document.querySelector('.password-login').value;
        const user = main.find(elem=>elem.mail===email)
        if(user.mail === email && password === user.password){
            del();
            document.querySelector('.login').classList.add('not-active');
            document.querySelector('.main').classList.add('active');
            document.querySelector('.sign').classList.add('not-active');
            alert("Вы успешно авторизовались")
        }else if(password !== user.password){
            alert('Проверьте пароль')
        }
    }


    this.Registration= function(){

        const mail = document.querySelector('.sign-mail').value;
        const password = document.querySelector('.sign-password').value;
        const RepeatPassword = document.querySelector('.sign-rep').value;
        if(password===RepeatPassword){
            const user = {mail:mail, password: password,};
            main.push(user)
            document.querySelector('.login').classList.add('not-active');
            document.querySelector('.main').classList.add('active');
            document.querySelector('.sign').classList.add('not-active');
            del();
        }else{
            alert('Введите правильный пароль')
        }
        

       

        

    }
}

function del(){
    document.querySelector('.login').classList.remove('not-active');
    document.querySelector('.main').classList.remove('not-active');
    document.querySelector('.sign').classList.remove('not-active');
    document.querySelector('.login').classList.remove('active');
    document.querySelector('.main').classList.remove('active');
    document.querySelector('.sign').classList.remove('active');
}
const my = new Code()


const mainSign = document.querySelector('.main__Sign-Up');
mainSign.addEventListener('click',my.showRegistrationPage)

const mainLog = document.querySelector('.main__Log-In');
mainLog.addEventListener('click',my.showAuthPage);

const Log = document.querySelector('.Log');
Log.addEventListener('click',my.Auth);

const up = document.querySelector('.Sign-Up');
up.addEventListener('click',my.Registration);


console.log(main)