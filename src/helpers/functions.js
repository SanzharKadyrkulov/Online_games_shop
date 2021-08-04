export const handleInp = (e, product,setProduct) => {
    let obj = {
        ...product,
        [e.target.name]: e.target.value
    }
    setProduct(obj)

}