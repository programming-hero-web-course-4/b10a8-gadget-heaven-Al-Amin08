const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else {
        return []
    }

}

const addToStoCartList = (id) => {
    const storedList = getStoredCartList()
    if (storedList.includes(id)) {
        console.log(id, 'already exist in the list')

    }
    else {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem("cart-list", storedListStr)
    }





}

export { addToStoCartList, getStoredCartList }