const data = [
  {
    question1:
      "张恩利《Girl》的创作背景是中国哪个城市?",
    image: "sources/1q.jpg",
    answer: "B",
    options: {
      A: {
        text: "北京",
      },
      B: {
        text: "上海",
      },
      C: {
        text: "广州",
      },
    },
  },
  {
    question2:
      "你可以在姜锡铉作品中找到以下哪种动物？",
    image: "sources/1q.jpg",
    answer: "C",
    options: {
      A: {
        text: "狗",
      },
      B: {
        text: "象",
      },
      C: {
        text: "骆驼",
      },
    },
  },
{
    question3:
      "这个项目里最大的艺术品是由哪位艺术家创作？",
    image: "sources/1q.jpg",
    answer: "B",
    options: {
      A: {
        text: "关小",
      },
      B: {
        text: "姜锡铉",
      },
      C: {
        text: "龚剑",
      },
    },
  },
{
    question4:
      "李明的创作运用了以下哪种科技产品？",
    image: "sources/1q.jpg",
    answer: "B",
    options: {
      A: {
        text: "iPad",
      },
      B: {
        text: "摄像机",
      },
      C: {
        text: "Google眼镜",
      },
    },
  },
{
    question5:
      "这个展览是K11 Art Foundation跟哪个机构合办的艺术家驻留项目？",
    image: "sources/1q.jpg",
    answer: "C",
    options: {
      A: {
        text: "尤伦斯当代艺术中心",
      },
      B: {
        text: "泰特美术馆",
      },
      C: {
        text: "皇家艺术研究院",
      },
    },
  },
{
    question6
:
      "张鼎在作品中融入哪种稀有元素？",
    image: "sources/1q.jpg",
    answer: "B",
    options: {
      A: {
        text: "黄金",
      },
      B: {
        text: "钛金",
      },
      C: {
        text: "钯金",
      },
    },
  },
];

// 逻辑
let q;
function init() {
  console.log("init");
  q = data[Math.floor(Math.random() * data.length)];
  $("#queBox").html(`
    <div class="qt">${q.question}
      <img src="${q.image}" class="qti">
    </div>
    <div class="ass">
      <div class="a1" id="a1" data-id="A">
        <img src="${q.options.A.image}" class="a1i">
        <div>A</div>
        <div>${q.options.A.text}</div>
      </div>
      <div class="a1" id="a2" data-id="B">
        <img src="${q.options.B.image}" class="a1i">
        <div>B</div>
        <div>${q.options.B.text}</div>
      </div>
      <div class="a1" id="a3" data-id="C">
        <img src="${q.options.C.image}" class="a1i">
        <div>C</div>
        <div>${q.options.C.text}</div>
      </div>
    </div>
  `);
}

function sub() {
  if (!$(".as").first()) return;
  console.log($(".as").first());
  var ansResult = $(".as").first().attr("data-id") === q.answer;

  function getText(arr) {
    return arr[Math.floor(arr.length * Math.random())];
  }

  if (ansResult) {
    $("#ansText").html(getText(rightText));
  } else {
    $("#ansText").html(getText(wrongText));
  }
}

$(function () {
  init();

  // todo
  // 1. 回答错误jpg @way
  // 2. 点击再来一题，更换题目
});
