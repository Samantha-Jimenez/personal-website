export const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    };

    // Keep YYYY-MM-DD values stable in local time, while leaving ISO timestamps untouched.
    const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(dateString);
    const date = isDateOnly
        ? new Date(`${dateString}T00:00:00`)
        : new Date(dateString);

    if (Number.isNaN(date.getTime())) return dateString;

    return date.toLocaleDateString(undefined, options);
};
