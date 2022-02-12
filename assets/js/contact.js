(function () {
  var form = document.getElementById("contact");
  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
      } else {
        $("#dialog").dialog("open");
        var data = $("#contact").serializeArray();
        var title = "Dear " + data[0]["value"];
        var body =
          "Your email is <b>" +
          data[1]["value"] +
          "</b><br>You've selected your gender as <b>" +
          data[2]["value"] +
          "</b> <br>You <b>" +
          data[3]["value"] +
          "</b> a student of AMDT";
        $("#dialog").attr("title", title);
        $("#dialog").html(body);
      }
      form.classList.add("was-validated");
    },
    false
  );

  $("#dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      },
    },
    show: {
      effect: "blind",
      duration: 1000,
    },
    hide: {
      effect: "explode",
      duration: 1000,
    },
  });
})();
