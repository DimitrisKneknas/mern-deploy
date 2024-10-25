const displayGreekCurrency = (num) => {
    const formatter = new Intl.NumberFormat('el-GR', {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2
    });

    return formatter.format(num);
}

export default displayGreekCurrency;