export default {
  icon: `<i class="fa-solid fa-computer-mouse fa-lg"></i>`,
  name: {
    en: "Re-Enable context menu (right click)",
    vi: "Bật lại menu chuột phải",
  },
  description: {
    en: "Enable context menu for website",
    vi: "Dùng cho web nào không cho phép bật menu chuột phải",
  },

  onClick: function () {
    // document.onmousedown = "return true";
    // document.onmouseup = "return true";
    // document.oncontextmenu = null;

    // window.oncontextmenu = null;
    // var elements = document.getElementsByTagName("*");
    // for (var id = 0; id < elements.length; ++id) {
    //   elements[id].oncontextmenu = null;
    // }

    window.addEventListener(
      "contextmenu",
      function (e) {
        e.stopPropagation();
      },
      true
    );

    document.addEventListener(
      "contextmenu",
      function (e) {
        e.stopPropagation();
      },
      true
    );

    alert("ReEnable context menu - Done");
  },
};
