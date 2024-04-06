const extractTime = (dateString) => {
    const mongoDBTimestamp = new Date(dateString);

    // Extract hours and minutes
    const hours = mongoDBTimestamp.getHours();
    const minutes = mongoDBTimestamp.getMinutes();

    // Format hours and minutes
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    return formattedTime;

}

export default extractTime