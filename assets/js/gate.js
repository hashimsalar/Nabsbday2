/* Simple client-side password gate.
   NOTE: this is a friendly lock for a birthday surprise, not real security.
   Change the password in ONE place: the PW value just below. */
(function(){
  var PW = "861258";
  var KEY = "nab_unlocked";
  try { if (sessionStorage.getItem(KEY) === "1") return; } catch(e){}

  document.documentElement.classList.add("locked");

  function build(){
    if (document.getElementById("gate")) return;
    var ov = document.createElement("div");
    ov.id = "gate";
    ov.innerHTML =
      '<div class="gate-card">' +
        '<div class="gate-emoji">🔐</div>' +
        '<h1 class="gate-title">For Nabeeha’s eyes</h1>' +
        '<p class="gate-sub">Enter the password to come in.</p>' +
        '<form id="gateForm" autocomplete="off">' +
          '<input id="gateInput" type="password" inputmode="numeric" placeholder="passcode" aria-label="password">' +
          '<button class="btn" type="submit">Unlock</button>' +
        '</form>' +
        '<div id="gateMsg" class="gate-msg"></div>' +
      '</div>';
    document.documentElement.appendChild(ov);

    var form = document.getElementById("gateForm");
    var input = document.getElementById("gateInput");
    var msg = document.getElementById("gateMsg");
    var card = ov.querySelector(".gate-card");
    input.focus();

    form.addEventListener("submit", function(e){
      e.preventDefault();
      if (input.value.trim() === PW){
        try { sessionStorage.setItem(KEY, "1"); } catch(err){}
        document.documentElement.classList.remove("locked");
        ov.classList.add("open-done");
        setTimeout(function(){ if (ov.parentNode) ov.parentNode.removeChild(ov); }, 400);
      } else {
        msg.textContent = "Not quite. Try again.";
        input.value = ""; input.focus();
        card.classList.remove("shake"); void card.offsetWidth; card.classList.add("shake");
      }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
