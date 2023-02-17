const msToDate = (ms) => {
    const date = new Date(ms).toLocaleString();
    return date;
}

export default msToDate;