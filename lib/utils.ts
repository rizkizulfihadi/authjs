export const formatDate = (datestr: string) => {
    const date = new Date(datestr);
    const formatter = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium"
    })
    return formatter.format(date);
}