(function () {
  var form = document.getElementById("quiz");
  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      var data = $("#quiz").serializeArray();
      var total = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].value == "yes") {
          total += 2;
        } else {
          total--;
        }
      }
      total = total > 0 ? total : 0;
      if (total > 12) {
        $("#result").html(
          "Congratulations! You have scored " + total + " out of 20 points"
        );
        $("#result").removeClass("alert-danger");
        $("#result").addClass("alert-success");
      } else {
        $("#result").html(
          "Try harder next time! You have received only " +
            total +
            " out of 20 points"
        );

        $("#result").removeClass("alert-success");
        $("#result").addClass("alert-danger");
      }
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
