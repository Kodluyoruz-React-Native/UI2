import { observable, action, decorate } from 'mobx';

class loginC {
    isim = '';
    sifre = '';

    set = (k, v) => this[k] = v;
}


decorate(
    loginC,
    {
        isim: observable,
        sifre: observable,

        set: action,
    }
);

export default new loginC();
