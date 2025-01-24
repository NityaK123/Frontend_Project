export const fetchData = async () => {

    try {
        const TotalData = await fetch('/data.json')

        const response = await TotalData.json()

        return response
    }
    catch (error) {
        console.log(error)
    }
}

