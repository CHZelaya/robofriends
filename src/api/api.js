export const apiCall = async (link) => {
    const response = await fetch(link)
    return await response.json()
}

//* Simply extracts fetch call, we give it a url in place of "link" above and it simplifies everything for us by doing the .then(response => response.json())