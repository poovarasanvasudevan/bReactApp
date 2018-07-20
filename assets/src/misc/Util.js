import {createBus} from 'suber'

export default class Util {

  static PAGE_CHANNEL: "PAGE_CHANNEL"

  static guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }


  static bus() {
    return createBus()
  }
}
