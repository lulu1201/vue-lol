import axios from 'axios';
let actions={
    USER:(
        ({state,commit},payload)=>{
        return axios({
                url:'/api/login',
                params:{
                    username:payload.username,
                    password:payload.password
                }
            }).then(
                res=>{
                    commit('USER',res.data)
                    return res.data
                }
            )
        }
    ),
    SHOPPE:({state,commit},payload)=>{
            axios({
                url:'/api/column'
            }).then(
                res => {
                    commit('SHOPPE',res.data.data)
                }
            )
            },
    INFO:({state,commit},payload)=>{
                axios({
                    url:'/api/follow'
                }).then(
                    res => {
                        commit('INFO',res.data.data)
                    }
                )
        }

}

export default actions;