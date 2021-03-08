function Input({inpType, inpPlaceholder,inpRef,inpHandler}){
    return(
        <input type={inpType} ref={inpRef} placeholder={inpPlaceholder} />
    )
}

export default Input