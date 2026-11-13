(function () {
  var cfg = window.SITE_CONFIG || {};

  // Booking buttons: every [data-book] link opens the booking form.
  if (cfg.bookingUrl) {
    document.querySelectorAll("[data-book]").forEach(function (a) {
      a.href = cfg.bookingUrl;
      a.target = "_blank";
      a.rel = "noopener";
    });
  }

  // WhatsApp links: every [data-wa] link opens a chat with the configured number.
  function waUrl(text) {
    var base = "https://wa.me/" + (cfg.whatsappNumber || "2348124148413");
    return text ? base + "?text=" + encodeURIComponent(text) : base;
  }
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = waUrl(a.getAttribute("data-wa-text") || "");
    a.target = "_blank";
    a.rel = "noopener";
  });

  // Tabs: who is learning.
  var tabs = Array.prototype.slice.call(document.querySelectorAll("[role=tab]"));
  function select(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener("click", function () { select(t, false); });
    t.addEventListener("keydown", function (e) {
      var n = null;
      if (e.key === "ArrowRight") n = tabs[(i + 1) % tabs.length];
      if (e.key === "ArrowLeft") n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === "Home") n = tabs[0];
      if (e.key === "End") n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); select(n, true); }
    });
  });

  // Contact form: opens WhatsApp with the message filled in.
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var lines = [
        "Hello, my name is " + (f.get("name") || "").toString().trim() + ".",
        "Who is learning: " + f.get("learner") + ".",
        (f.get("message") || "").toString().trim()
      ];
      window.open(waUrl(lines.filter(Boolean).join("\n")), "_blank", "noopener");
    });
  }

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
