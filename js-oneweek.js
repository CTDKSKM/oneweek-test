$(function () {
  let $tabButtons = $("#tabMember>li");
  let $tabContents = $(".memberContent");

  $tabButtons.on("click", function () {
    if ($(this).is(".on")) return;

    $(this).addClass("on").siblings().removeClass("on");

    $tabContents.removeClass("on");

    let index = $(this).attr("data-index");

    $tabContents.eq(index).addClass("on");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const imgElement = document.getElementById("blink");
  const imgElement2 = document.getElementById("blink2");
  let isBlinking = false;
  let blinkInterval;

  window.addEventListener("load", function () {
    if (isBlinking) {
      stopBlinking();
    } else {
      startBlinking();
    }
  });

  function startBlinking() {
    imgElement.style.visibility = "visible";
    blinkInterval = setInterval(function () {
      imgElement.style.visibility =
        imgElement.style.visibility === "hidden" ? "visible" : "hidden";
    }, 500);
    blink2Interval = setInterval(function () {
      imgElement2.style.visibility =
        imgElement2.style.visibility === "hidden" ? "visible" : "hidden";
    }, 500);
    isBlinking = true;
  }

  function stopBlinking() {
    clearInterval(blinkInterval);
    imgElement.style.visibility = "visible";
    imgElement2.style.visibility = "visible";
    isBlinking = false;
  }

  $(function () {
    $("#member1-img").click(function () {
      toView();
    });
    $("#member2-img").click(function () {
      toView();
    });
    $("#member3-img").click(function () {
      toView();
    });
  });
  function toView() {
    document.getElementById("member").scrollIntoView();
  }
});
