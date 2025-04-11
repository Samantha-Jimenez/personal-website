export const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
    const date = new Date(dateString);
    date.setHours(date.getHours() + date.getTimezoneOffset() / 60); // Adjust for timezone
    return date.toLocaleDateString(undefined, options);
};
