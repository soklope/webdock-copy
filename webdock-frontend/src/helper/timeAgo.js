const timeAgo = (targetDate) => {
    const targetDateTime = new Date(targetDate);
    const currentDate = new Date();
    const timeDifference = currentDate - targetDateTime;

    // Calculate time in different units
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));

    if (daysDifference > 0) {
        return `${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago`;
    } else if (hoursDifference > 0) {
        return `${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`;
    } else {
        return `${minutesDifference} ${minutesDifference === 1 ? 'minute' : 'minutes'} ago`;
    }
}

export default timeAgo