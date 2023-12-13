/*
    Function returns a boolean of wether the day difference is greater than 31

    This function is meant to prohibit an API call if the day difference is greater than 31,
    because API throws error otherwise
 */

export const isDateDifferenceValid = (fromDate: string, toDate: string): boolean => {
    const startDate = new Date(fromDate);
    const endDate = new Date(toDate);
    const timeDifference = endDate.getTime() - startDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference <= 31;
};