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

//--------------------------------------------------------------------

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
      show_member(0);
      begin();
    });
    $("#member2-img").click(function () {
      toView();
      show_member(1);
      begin();
    });
    $("#member3-img").click(function () {
      toView();
      show_member(2);
      begin();
    });
  });
  function toView() {
    window.scrollTo(0, window.innerHeight * 1);
  }
});

//----------------------휠스크롤 페이지 함수----------------------//
window.addEventListener("DOMContentLoaded", loadFn);

function loadFn() {
  let protect_wheel = 0;
  let page_number = 0;
  window.addEventListener("wheel", wheelFn, { passive: false });

  function wheelFn(e) {
    e.preventDefault();

    if (protect_wheel) return;
    protect_wheel = 1;
    setTimeout(() => (protect_wheel = 0), 800);

    let dir = e.wheelDelta;
    if (dir < 0) {
      page_number++;
      if (page_number > 2) page_number = 2;
    } else {
      page_number--;
      if (page_number < 0) page_number = 0;
    }
    window.scrollTo(0, window.innerHeight * page_number);
  }
}

//-----------------------새로고침 시 화면 메인으로 -----------//

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//---------------------p2 member정보 애니메이션---------------//
