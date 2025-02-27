const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list')
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr)
        return storedList
    }
    else {
        return []
    }
}

const addToWishList = (id) => {
    const storedList = getStoredWishList()
    if (storedList.includes(id)) {
        console.log(id, "already stored as wish list");


    }
    else {
        storedList.push(id)
        const storeListStr = JSON.stringify(storedList)
        localStorage.setItem("wish-list", storeListStr)
    }
}

// const deleteWishList = (id) => {
//     const storedList = getStoredWishList()
//     const itemRemove = storedList.filter(item => item !== id)
//     localStorage.setItem('wish-list', JSON.stringify(itemRemove))
// }

export { addToWishList, getStoredWishList }