function Input({inpType, inpPlaceholder,inpRef}){
    return(
        <input type={inpType} ref={inpRef} placeholder={inpPlaceholder} />
    )
}

export default Input