$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $('body,html').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function () {
        window.location.hash = hash;
      });
    }
  });
});

const width = $(window).width();

window.onscroll = function () {
  if ((width >= 900)) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $("#middle").css("background-size", "150% auto");
    } else {
      $("#middle").css("background-size", "100% auto");
    }
  }
};

$("#contato-form").submit(function () {
  alert("Enviado com sucesso! 😃");
})

$("#cadastro").submit(function () {
  alert("Cadastrado com sucesso! 😃");
})

setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
  }, 800);
}, 1450);