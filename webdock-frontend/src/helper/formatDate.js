// dateUtils.js

const formatCustomDate = (inputDate) => {
    const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
    const formattedDate = inputDate.toLocaleDateString('en-GB', options);
    const customFormat = formattedDate.replace(',', ' -');

    return customFormat;
};

export default formatCustomDate;

