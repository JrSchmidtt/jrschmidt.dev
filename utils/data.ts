
export const FormatDate = (date: string, location: string) => {
    return new Date(date).toLocaleDateString(location, {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};