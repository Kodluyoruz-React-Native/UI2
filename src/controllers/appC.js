import { observable, action, decorate } from 'mobx';

class appC {
    splashRender = true;


    splashKapat = () => {
        setTimeout(
            () => this.splashRender = false,
            2000
        );
    }


    x = 8;
    y = () => { alert(); }

    //HER DEĞİŞKENİN SET FONKSİYONU OLMAK ZORUNDA!
    //setSplashRender(d) { this.splashRender = d; }
    //setSplashRender = (d) => { this.splashRender = d; }
    setSplashRender = d => (this.splashRender = d);
}


decorate(
    appC,
    {
        splashRender: observable,

        splashKapat: action,

        setSplashRender: action
    }
);

export default new appC();
