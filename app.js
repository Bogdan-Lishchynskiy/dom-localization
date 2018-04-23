function getSavedLanguage() {
	var localStorage = this.localStorage,
		lang = 'ua';

	if (localStorage.language) {
		lang = localStorage.language;
		document.querySelector('#languages [value="' + lang + '"]').checked = true;
	} else {
		localStorage.setItem('language', lang);
	}

	changeLanguage(lang);
}

function setLanguage() {
	var radioButton = event.target;
	var lang = radioButton.value;
	radioButton.setAttribute("checked", "checked");
	localStorage.setItem("language", lang);
	changeLanguage(lang);
}


function changeLanguage(lang) {
	var localizedContentEls = document.getElementsByClassName('lang'),
		localizedContent,
		i;
	for (i = 0; i < localizedContentEls.length; i++) {
		localizedContent = localizedContentEls[i];
		localizedContent.style.display = localizedContent.className.indexOf(lang) > -1 ? 'inline-block' : 'none';
	}
}

function addLanguageChangeListeners() {
	document.getElementsByName('lang').forEach(function (item) {
		item.addEventListener('change', setLanguage, false);
	});
}
addLanguageChangeListeners();

function initRadioState() {
	var langs = localStorage.getItem('language');
	var event = new Event('change');
	if (langs) {
		var inpt = document.querySelector('input[value="' + langs + '"]');
		if (inpt) {
			inpt.dispatchEvent(event);
		}

	} else {
		var defaultRadio = document.querySelector('input[value="ua"]');
		if (defaultRadio) {
			defaultRadio.dispatchEvent(event);
		}
	}

}