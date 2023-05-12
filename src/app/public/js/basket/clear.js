const clear = async (event) => {
    event.preventDefault()
    localStorage.clear()
    console.log('Clear..')
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
    } catch (error) {
        console.log(error)
    }
})