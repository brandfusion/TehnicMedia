function FindPrevious(url, pid) {
    location = url + '&year=' + getDropdownValue('NewsParagraphCustomYear' + pid) + '&month=' +
			getDropdownValue('NewsParagraphCustomMonth' + pid);
}

function getDropdownValue(dropdownID) {
    var dd = document.getElementById(dropdownID);
    var ret = '';

    if (dd)
        ret = dd.value;

    return ret;
}	 