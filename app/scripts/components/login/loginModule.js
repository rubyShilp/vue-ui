import {post,encryption} from './../../util/core';
const state={
  
};
const actions={
  login: async({commit},user)=>{
    let params=new URLSearchParams();
    params.append('account',user.account);
    params.append('password',user.password);
    let result=await post('/user/managecontract/minetest/test.do',params);
    return result.data;
  },
   //用户登录
   userLogin:async({},user)=>{
    let params=new URLSearchParams();
    params.append('account',user.account);
    params.append('password',user.password);
    let result=await post('/user/simulated-login',params);
    return result.data;
  },
  businessModel:async({},params)=>{
    let result=await post('/user/evidence/business-model/all',params);
    return result.data;
  },
  businessModelSteps:async({},user)=>{
    let params=new URLSearchParams();
    params.append('businessModelNum',user.businessModelNum);
    let result=await post('/user/evidence/business-model-steps/list',params);
    return result.data;
  },
};
const loginModule={
  namespaced:true,
  state:state,
  actions:actions
};
export default loginModule;