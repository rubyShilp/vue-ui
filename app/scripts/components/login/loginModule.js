import {post,encryption} from './../../util/core';
const state={
  
};
const actions={
  login: async({commit},user)=>{
    let params=new URLSearchParams();
    params.append('account',user.account);
    params.append('password',user.password);
    let result=await post('/managecontract/minetest/test.do',params);
    return result.data;
  }
};
const loginModule={
  namespaced:true,
  state:state,
  actions:actions
};
export default loginModule;