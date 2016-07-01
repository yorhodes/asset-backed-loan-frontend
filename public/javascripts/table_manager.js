function create_entry(_block_number, _borrower, _amount, _collateral, _fee) {
	var row = "<tr id=" + _block_number;
	row.concat("<td>" + _block_number + "</td>");
	row.concat("<td>" + _borrower + "</td>");
	row.concat("<td>" + _amount + "</td>");
	row.concat("<td>" + _collateral + "</td>");
	row.concat("<td>" + _fee + "</td>");
	row.concat("</tr>")
	$("#table_body").append(row);
}

function delete_entry(_block_number) {
	$("#" + _block_number).remove();
}