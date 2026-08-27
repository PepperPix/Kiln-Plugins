document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".obfuscated-email").forEach(function (el) {
        var encoded = el.getAttribute("data-e");
        if (!encoded) return;
        try {
            var address = atob(encoded);
            el.setAttribute("href", "mailto:" + address);
            el.textContent = address;
        } catch (e) {
            // Malformed data-e: leave the no-JS fallback text untouched.
        }
    });
});
