export const formatDate = (dateString: string): string => {

    const date = new Date(dateString)
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }
    return date.toLocaleDateString('ru-US', options)
}