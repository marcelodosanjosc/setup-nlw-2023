import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
    const fistDayOfTheYear = dayjs().startOf('year')
    const toDay = new Date()

    const dates = []
    let compareDate = fistDayOfTheYear

    while (compareDate.isBefore(toDay)){
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1,'day')
    }
    return dates
}