let logout = document.getElementById('test')

document.addEventListener('DOMContentLoaded', () => {
    try {
        if (logout) {
            console.log('Yes')
            logout.addEventListener('click', () => {
                localStorage.clear()
                console.log('Clear..')
            })
        } else {
            console.log('No')
        }
    } catch (error) {
        console.log(error)
    }
})