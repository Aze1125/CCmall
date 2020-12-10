// // import { createStore } from "vuex";
// import Vue from 'vue'
// import Vuex from "vuex";
// // 安装
// Vue.use(Vuex)
// // 实例
// const store = new Vuex.Store({
//   state: {
//     cartList: []
//   },
//   mutations: {
//     addCart(state, payload) {
//       // state.cartList.push(payload);
//       let oldProduct = state.cartList.find(item => item.idd === payload.iid)
//       if (oldProduct) {
//         oldProduct.count += 1;
//       } else {
//         payload.count = 1;
//         state.cartList.push(payload);
//       }

//       // if (index === -1) {
//       //   let oldProduct = state.cartList[index]
//       //   oldProduct.count += 1
//       // } else {
//       //   payload.count = 1
//       //   state.cartList.push(payload)
//       // }

//       // let oldProduct = null;
//       // for(let item of state.cartList){
//       //   if(item.iid === payload.iid){
//       //     oldProduct = item
//       //   }
//       // }
//       // if (oldProduct){
//       //   oldProduct.count += 1
//       // }else{
//       //   payload.count = 1
//       //   state.cartList.push(payload)
//       // }
//       // state.cartList.push(payload);
//     }
//   },
//   actions: {},
//   modules: {}

// })
// // 挂载
// export default store;
