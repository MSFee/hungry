import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        addressInfo: {
            areaCode: '',
            name: '',
            tel: '',
            province: '',
            city: '',
            county: '',
            addressName: '',
            addressDetail: '',
            houseNumber: '',
        },
        addressId: false, // 判断是否是修改信息
    },
    getters: {
        getAddressInfo: function(state) {
            return {
                ...state.addressInfo,
            };
        },
        getAddressId: function(state){
            return (state.addressId);
        }
    },
    mutations: {
        setAddress(state, value) {
            const addressInfo = state.addressInfo;
            for( let key in addressInfo) {
                addressInfo[key] = value[key];
            }
        },
        clearAddress(state){
            const value = {
                areaCode: '',
                name: '',
                tel: '',
                province: '',
                city: '',
                county: '',
                addressName: '',
                addressDetail: '',
                houseNumber: '',
            }
            const addressInfo = state.addressInfo;
            for( let key in addressInfo) {
                addressInfo[key] = value[key];
            }
        },
        setAddressId(state,value) {
            state.addressId = value;
        }
    },
    actions: {
        setAddressFun(context, value) {
            context.commit("setAddress", value);
        },
        clearAddressFun(context) {
            context.commit('clearAddress');
        },
        setAddressIdFun(context,value) {
            context.commit('setAddressId',value);
        }
    }
});
export default store;