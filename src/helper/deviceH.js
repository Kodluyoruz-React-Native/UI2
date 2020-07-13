import { observable, action, decorate } from 'mobx';
import { Dimensions } from 'react-native';

class deviceH {
    w = Dimensions.get('window').width;
    h = Dimensions.get('window').height;

    W = oran => (this.w * oran / 100);
    H = oran => (this.h * oran / 100);
}


decorate(
    deviceH,
    {
        w: observable,
        h: observable,

        W: action,
        H: action
    }
);

export default new deviceH();
