import {post,encryption} from './../../util/core';
const state={
  
};
const actions={
  login:({commit},user)=>{
    return new Promise((resolve,reject)=>{
     // let params={account:user.account,password:encryption(user.password)};
      let params=new URLSearchParams();
      params.append('account',user.account);
      params.append('password',user.password);
      post('/managecontract/minetest/test.do',params).then((response)=>{
          resolve(response.data);
      })
    })
  }
};
const loginModule={
  namespaced:true,
  state:state,
  actions:actions
};
export default loginModule;