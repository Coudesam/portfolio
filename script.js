document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const bouton = document.getElementById("envoyer");

  if (form && bouton) {
    bouton.addEventListener("click", (event) => {
      event.preventDefault(); // Empêche l’envoi automatique

      // Récupération des valeurs
      const nom = document.getElementById("nom").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      // Validation simple
      if (!nom || !email || !message) {
        alert("Veuillez remplir tous les champs avant d’envoyer.");
        return;
      }

      // Vérification basique de l'email
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
      }

      // Stocker les données dans le localStorage (optionnel)
      localStorage.setItem("nom", nom);
      localStorage.setItem("email", email);
      localStorage.setItem("message", message);

      // Rediriger vers la page de réponse
      window.location.href = "reponse.html";
    });
  }
});
