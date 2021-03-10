/**
 *
 * Affiche un toast message
 *
 * @param {string} text le texte à afficher
 */
function messageToast(text) {
	// append child la fenêtre
	let modal = `<div id="message_toast" class="container-message-toast">
                        <div class="message-toast flex flex-col">
                        	<div class="message-toast-content text-sm p-4 bg-jaune">${text}
								<div class="message-dialog-footer pr-4 flex items-center justify-end">
								<button class="message-dialog-btn-yes btn-primary float-right mt-2 ml-2" type="button">ok</button>
								</div>
							</div>
                        </div>
                    </div>`;

	document.querySelector("body").insertAdjacentHTML("afterbegin", modal);
	let modalElement = document.getElementById("message_toast");
	//btn oui supprimer la fenetre modal et exécuter la function demmandée en paramètre
	let messageDialogBtnYes = document.querySelector(".message-dialog-btn-yes");
	messageDialogBtnYes.addEventListener("click", () => {
		document.querySelector("body").removeChild(modalElement);
		// todo supprimer eventlistener
		//messageDialogBtnYes.removeEventListener("click");
	});
	setTimeout(() => {
		document.querySelector("body").removeChild(modalElement);
	}, 2000);
}

/**
 *
 * Affiche une modal message ou confirm
 *
 * @param {string} dialogType "confirm" | "message"
 * @param {string} title le titre à afficher
 * @param {string} text le texte à afficher
 * @param {string} btnOk le texte du bouton ok à afficher
 * @param {function} functionOk fonction à exécuter au click du btn ok
 */
function messageDialog(dialogType, title, text, btnOk, functionOk) {
	let btnCancel = "";
	if (dialogType === "confirm") {
		btnCancel = `<button class="message-dialog-btn-no btn-primary float-right mt-2"  type="button">Annuler</button>`;
	}
	// append child la fenêtre
	let modal = `<div id="message_dialog" class="container-message-dialog">
                        <div class="message-dialog flex flex-col">
                        <div class="message-dialog-title text-xl font-semibold p-10 bg-jaune">${title}</div>
                        <div class="message-dialog-content pl-10 pt-4 flex-grow">${text}</div>
                        <div class="message-dialog-footer pb-4 pr-4 flex items-center justify-end">
                            ${btnCancel}
                            <button class="message-dialog-btn-yes btn-primary float-right mt-2 ml-2"  type="button">${btnOk}</button>
                        </div>
                        </div>
                    </div>`;

	document.querySelector("body").insertAdjacentHTML("afterbegin", modal);
	let modalElement = document.getElementById("message_dialog");
	// btn non supprimer la fenetre modal
	let messageDialogBtnNo = document.querySelector(".message-dialog-btn-no");
	if (messageDialogBtnNo) {
		messageDialogBtnNo.addEventListener("click", () => {
			document.querySelector("body").removeChild(modalElement);
			// todo supprimer eventlistener
			//messageDialogBtnNo.removeEventListener("click");
		});
	}
	//btn oui supprimer la fenetre modal et exécuter la function demmandée en paramètre
	let messageDialogBtnYes = document.querySelector(".message-dialog-btn-yes");
	messageDialogBtnYes.addEventListener("click", () => {
		document.querySelector("body").removeChild(modalElement);
		functionOk();
		// todo supprimer eventlistener
		//messageDialogBtnYes.removeEventListener("click");
	});
}

/**
 *
 * Affiche de la modal de login
 *
 * @param {function} formId l'id  html du fomulaire qui doit être soumis si la connexion est ok
 */
function loginDialog(url, actionsFailed) {
	console.log("je passe dans loginDialog");
	function validForm() {
		let email = document.getElementById("email").value;
		let password = document.getElementById("password").value;
		if (!email || !password) {
			alert("vous devez saisir tous les chanps");
			return false;
		} else {
			return true;
		}
	}

	// append child la fenêtre
	let modal = `<div id="message_dialog" class="container-message-dialog">
                        <div class="message-dialog flex flex-col">
                        <div class="message-dialog-title text-xl font-semibold p-10 bg-jaune">
							<h3>Connexion</h3>
							<p class="text-sm">Vous devez être connecté pour pouvoir effectuer certaines actions</p>
						</div>
						<form id="form_login_dialog" action="http://localhost:3006/site/login" method="post" novalidate="novalidate" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        	<div class="message-dialog-content pl-10 pt-4 flex-grow">
							<input id="actionfailed" type="hidden" name="actionfailed" value="${actionsFailed}">
							<input id="url" type="hidden" name="url" value="${url}">
								<div class="mb-4">
									<label class="block text-gray-700 text-sm font-bold mb-2" for="email">
									Email 
									</label>
									<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" name="email" placeholder="email">
								</div>
								<div class="mb-6">
									<label class="block text-gray-700 text-sm font-bold mb-2" for="password">
									Mot de passe
									</label>
									<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="******************">
									<!-- <p class="text-red-500 text-xs italic">veillez renseigner un mot de passe.</p> -->
									<a class="inline-block align-baseline font-bold text-sm text-ocre hover:text-fonce" href="#">
									Mot de passe oublié ?
									</a>
								</div>
							
							
							</div>
							
							<button class="message-dialog-btn-no btn-primary btn-danger float-left mt-2 ml-2"  type="button">Annuler</button>
							<div class="message-dialog-footer pb-4 pr-4 flex items-center justify-end">
								<a href="/login/register">
									<button class="btn-primary float-right mt-2" type="button">
										S'inscrire
									</button>
								</a> 
								<button class="message-dialog-btn-yes btn-primary float-right mt-2 ml-2" type="button">Me connecter</button>
							</div>
						</form>
                        </div>
                    </div>`;

	document.querySelector("body").insertAdjacentHTML("afterbegin", modal);
	let modalElement = document.getElementById("message_dialog");
	// btn non supprimer la fenetre modal
	let messageDialogBtnNo = document.querySelector(".message-dialog-btn-no");
	if (messageDialogBtnNo) {
		messageDialogBtnNo.addEventListener("click", () => {
			document.querySelector("body").removeChild(modalElement);
			// todo supprimer eventlistener
			//messageDialogBtnNo.removeEventListener("click");
		});
	}
	//btn oui supprimer la fenetre modal et exécuter le  fomulaire de login
	let messageDialogBtnYes = document.querySelector(".message-dialog-btn-yes");
	messageDialogBtnYes.addEventListener("click", () => {
		let form = document.getElementById("form_login_dialog");
		form.submit();
		document.querySelector("body").removeChild(modalElement);
		//functionOk(formId);
		// todo supprimer eventlistener
		//messageDialogBtnYes.removeEventListener("click");
	});
}
