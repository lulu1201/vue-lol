let mutations={
    USER:(state,payload)=>{
        state.user=payload;
    },
    SHOPPE:(state,payload)=>{
        state.shoppe=payload;
    },
    INFO:(state,payload)=>{
        state.info=payload;
    },
}
console.log(mutations)

export default mutations;