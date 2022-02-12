var fashion = [
  "assets/images/fashion-01.jpg",
  "assets/images/fashion-02.jpg",
  "assets/images/fashion-03.jpg",
];
var graphic = [
  "assets/images/graphic-01.jpg",
  "assets/images/graphic-02.jpg",
  "assets/images/graphic-03.jpg",
  "assets/images/graphic-04.jpg",
  "assets/images/graphic-05.jpg",
];
var vfx = ["assets/images/vfx-01.jpg", "assets/images/vfx-02.jpg"];

$(document).ready(function () {
  filterItems();
  $("#cat-all").click(filterItems);
  $("#cat-vfx").click(function () {
    filterItems("vfx");
  });
  $("#cat-graphic").click(function () {
    filterItems("graphic");
  });
  $("#cat-fashion").click(function () {
    filterItems("fashion");
  });
});

function filterItems(type) {
  switch (type) {
    case "fashion":
      setItems(fashion);
      catButtonColor("fashion");
      break;
    case "graphic":
      setItems(graphic);
      catButtonColor("graphic");
      break;
    case "vfx":
      setItems(vfx);
      catButtonColor("vfx");
      break;
    default:
      catButtonColor();
      var all = fashion
        .concat(graphic)
        .concat(vfx)
        .sort(function () {
          return 0.5 - Math.random();
        });
      setItems(all);
      break;
  }
}

function setItems(items) {
  var out = "";
  for (let i = 0; i < items.length; i++) {
    out +=
      '<div class="image-card col-sm-6 col-md-4 ms-auto"><div style="background-image: url(\'' +
      items[i] +
      "');\"></div></div>";
  }
  $("#items").html(out);
}

function catButtonColor(btn) {
  $("#cat-all").removeClass("bg-danger");
  $("#cat-vfx").removeClass("bg-danger");
  $("#cat-graphic").removeClass("bg-danger");
  $("#cat-fashion").removeClass("bg-danger");

  $("#cat-all").removeClass("bg-secondary");
  $("#cat-vfx").removeClass("bg-secondary");
  $("#cat-graphic").removeClass("bg-secondary");
  $("#cat-fashion").removeClass("bg-secondary");

  switch (btn) {
    case "fashion":
      $("#cat-fashion").addClass("bg-danger");
      $("#cat-graphic").addClass("bg-secondary");
      $("#cat-vfx").addClass("bg-secondary");
      $("#cat-all").addClass("bg-secondary");
      break;

    case "graphic":
      $("#cat-all").addClass("bg-secondary");
      $("#cat-vfx").addClass("bg-secondary");
      $("#cat-graphic").addClass("bg-danger");
      $("#cat-fashion").addClass("bg-secondary");
      break;

    case "vfx":
      $("#cat-all").addClass("bg-secondary");
      $("#cat-vfx").addClass("bg-danger");
      $("#cat-graphic").addClass("bg-secondary");
      $("#cat-fashion").addClass("bg-secondary");
      break;

    default:
      $("#cat-all").addClass("bg-danger");
      $("#cat-vfx").addClass("bg-secondary");
      $("#cat-graphic").addClass("bg-secondary");
      $("#cat-fashion").addClass("bg-secondary");
      break;
  }
}
