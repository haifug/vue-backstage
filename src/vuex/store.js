import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  login:false,
  userData:null,
  menuId:"1"
};
const mutations = {
  isLogin(state,isLogin){
    state.login = isLogin.login;
    state.userData = isLogin.userData
  },
  setLogin(state,payLoad){
    let name = payLoad.name;//属性名
    let value = payLoad.value;//属性值
    let expiryTime = payLoad.time;//过期时间
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + expiryTime);
    document.cookie=name+ "=" + escape(value) + ((expiryTime==null) ? "" : ";expires="+exdate.toGMTString());
  },
  getLogin(state,payLoad){
    let c_name = payLoad.name;
    let c_start,c_end;
    if(document.cookie.length > 0){
      c_start = document.cookie.indexOf(c_name + "=");
      if(c_start !== -1) {
        c_start = c_start + c_name.length + 1;
        c_end = document.cookie.indexOf(";", c_start);
        if(c_end === -1) {
          c_end = document.cookie.length;
        }

        state.userData = unescape(document.cookie.substring(c_start, c_end));
        let userData = JSON.parse(state.userData);
        let isLogin = userData.isLogin;
        if (isLogin) {
          state.login = true;
        }
        else
        {
          state.login = false;
        }
      }else {
        state.login = false;
      }
    }else {
      state.login = false;
    }
  },
  setMenuId(state,payLoad){
    state.menuId = payLoad.id;
  }
};
var store = new Vuex.Store({
  state:state,
  mutations:mutations
});

export default store;
