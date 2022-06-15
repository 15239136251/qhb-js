/**
 * 获得当前日期或几天前的日期 例如：20220101
 * @private
 * @param {Number}
 * @returns {Number} Returns number 
*/
function getDate(days) {
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

module.exports = getDate;