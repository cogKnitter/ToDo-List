var $ = require("jquery");

  console.log("nav is working")

var $allNav = $("[data-js='allNav']");
    $activeNav = $("[data-js='activeNav']");
    $completedNav = $("[data-js='completedNav']");


    $activeNav.on("click", function(e){
      $(".todo-list__item--text").parent().show();
      $(".todo-list__item--text-clicked").parent().hide();
    });

    $completedNav.on("click", function(e){
      $(".todo-list__item--text-").parent().hide();
      $(".todo-list__item--text-clicked").parent().show();
    });

    $allNav.on("click", function(e){
      $(".todo-list__item--text-clicked").parent().show();
      $(".todo-list__item--text-").parent().show();
    });
