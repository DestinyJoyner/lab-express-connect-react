// function for handling for input changes
function handleTextChange(e, stateVar, setFunction) {
    let value = e.target.value
    const id = e.target.id
    if(id === "daysSinceLastCrisis"){
                value = +e.target.value
            }
    setFunction({...stateVar, [id]: value})
}

    // function for converting inputted string for label/ inputs
    function convertInput(input){
        input.trim()
        const newInput = `${input.charAt(0).toUpperCase()}${input.slice(1)}`
        // https://bobbyhadz.com/blog/javascript-split-by-capital-letter#:~:text=Split%20a%20String%20on%20Capital%20Letters%20in%20JavaScript%20%23,an%20array%20of%20the%20substrings.
        return newInput.split(/(?=[A-Z])/).join(` `)
    }

    // function for handling dropdown sort 
    function displayLogs(input, arr) {
        let display;
   
        if(input === "asc"){
            display = arr.sort((a,b) => a.captainName.toUpperCase() < b.captainName.toUpperCase() ? -1 : 1 || 0)
        }
        if(input === "desc"){
            display = arr.sort((a,b) => a.captainName.toUpperCase() > b.captainName.toUpperCase() ? -1 : 1 || 0)
        }
        if(input === "true"){
            display = arr.filter(({mistakesWereMadeToday}) => mistakesWereMadeToday === true)
        }
        if(input === "false"){
            display = arr.filter(({mistakesWereMadeToday}) => mistakesWereMadeToday === false)
        } 
        if(input === "gt10"){
            display = arr.filter(({daysSinceLastCrisis}) => daysSinceLastCrisis > 10)
        }
        if(input === "gte20"){
            display = arr.filter(({daysSinceLastCrisis}) => daysSinceLastCrisis >= 20)
        }
        if(input ==="lte5"){
            display = arr.filter(({daysSinceLastCrisis}) => daysSinceLastCrisis <= 5)
        }
        
        return display
    }

    // function for matching index number of sorted log to the original listed index number
    // find index in sorted array that matches original index of logs array for submitting edit form (would use id key in future but don't have that option here)
    function matchIndex (responseData, obj, setFunction){
       const match = responseData.findIndex(({captainName, title, post, mistakesWereMadeToday, daysSinceLastCrisis}) => {
            const nameMatch = obj.captainName === captainName
            const titleMatch = obj.title === title
            const postMatch = obj.post === post
            const mistakesMatch = obj.mistakesWereMadeToday === mistakesWereMadeToday
            const crisisMatch = obj.daysSinceLastCrisis === daysSinceLastCrisis
            
            return nameMatch && titleMatch && postMatch && mistakesMatch && crisisMatch
            })
            setFunction(match)

    }



export  {
    handleTextChange,
    convertInput,
    displayLogs,
    matchIndex,
}