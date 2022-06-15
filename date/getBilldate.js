/**
 * 描述
 * @date 2022-06-15
 * @param {Number} days
 * @returns {Number}
 */
function getBilldate(days) {
  let date = new Date();
	if (typeof(days) === 'number') {
		date = new Date(date.getTime() - (days * 24) * 60 * 60 * 1000);
	}
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	month = month > 9 ? month : '0' + month;;
	day = day > 9 ? day : '0' + day;
  let value = Number(`${year}${month}${day}`);
	return value;
}

module.exports = getBilldate;