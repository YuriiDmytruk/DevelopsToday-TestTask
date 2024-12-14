export const getYearList = (startYear: number) => {
    const currentYear = new Date().getFullYear();

    return Array.from({ length: currentYear - startYear + 1 }, (_, i) =>
        (currentYear - i).toString()
    );
};
