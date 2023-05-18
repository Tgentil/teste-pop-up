// Função para fechar o popup
function closePopup() {
    var popup = document.getElementById("popup");
    var sections = document.getElementsByClassName("popup-section");
    var popupTitle = document.getElementById("popup-title");
    var titleText = document.getElementById("title-text");

    if (popup && sections && popupTitle && titleText) {
        popup.style.display = "none";

        for (var i = 0; i < sections.length; i++) {
            sections[i].classList.add("hidden");
        }

        popupTitle.style.display = "block";
        titleText.style.display = "block";
    }
}

// Função para exibir a seção correspondente ao clicar no link
function showSection(sectionId) {
    var sections = document.getElementsByClassName("popup-section");
    var section = document.getElementById(sectionId);
    var popupTitle = document.getElementById("popup-title");
    var titleText = document.getElementById("title-text");

    if (sections && section && popupTitle && titleText) {
        for (var i = 0; i < sections.length; i++) {
            sections[i].classList.add("hidden");
        }

        if (section.classList.contains("initial-section")) {
            popupTitle.style.display = "block";
            titleText.style.display = "block";
        } else {
            popupTitle.style.display = "none";
            titleText.style.display = "none";
        }

        section.classList.remove("hidden");
    }
}

// Espera o carregamento completo da página
window.addEventListener("DOMContentLoaded", function () {
	var popup = document.getElementById("popup");

	if (popup) {
		popup.style.display = "none";
	}

	// Função para abrir o popup
	function openPopup() {
		if (popup) {
			popup.style.display = "block";
			document.getElementById("popup-title").style.display = "block";
			document.getElementById("title-text").style.display = "block";
		}
	}
	
	var testeLink = document.getElementById("teste-link");

	if (testeLink) {
		testeLink.addEventListener("click", function (event) {
			event.preventDefault();
			openPopup();
		});
	}
});
