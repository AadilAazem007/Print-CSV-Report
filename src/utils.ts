export const dateStringToDate = (dateString: string): Date => {
    const datepart = dateString.split('/').map((value:string):number => {
        return parseInt(value)
    })

    return new Date(datepart[2], datepart[1] - 1, datepart[0])
}