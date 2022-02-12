$(function () {
  $("#dialog").dialog({
    modal: true,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
      },
    },
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000,
    },
    hide: {
      effect: "explode",
      duration: 1000,
    },
  });

  window.setTimeout(function () {
    $("#dialog").dialog("open");
  }, 5000);
});
