const data = [
  {
    question: "张恩利《Girl》的创作背景是中国哪个城市?",
    image: "sources/q1.png",
    answer: "B",
    options: {
      A: {
        text: "北京",
        image: "",
      },
      B: {
        text: "上海",
        image: "",
      },
      C: {
        text: "广州",
        image: "",
      },
    },
  },
  {
    question: "你可以在姜锡铉作品中找到以下哪种动物？",
    image: "sources/q2.png",
    answer: "C",
    options: {
      A: {
        text: "狗",
        image: "",
      },
      B: {
        text: "象",
        image: "",
      },
      C: {
        text: "骆驼",
        image: "",
      },
    },
  },
  {
    question: "这个项目里最大的艺术品是由哪位艺术家创作？",
    image: "sources/q2.png",
    answer: "B",
    options: {
      A: {
        text: "关小",
        image: "",
      },
      B: {
        text: "姜锡铉",
        image: "",
      },
      C: {
        text: "龚剑",
        image: "",
      },
    },
  },
  {
    question: "李明的创作运用了以下哪种科技产品？",
    image: "sources/q4.png",
    answer: "B",
    options: {
      A: {
        text: "iPad",
        image: "",
      },
      B: {
        text: "摄像机",
        image: "",
      },
      C: {
        text: "Google眼镜",
        image: "",
      },
    },
  },
  {
    question: "这个展览是K11 Art Foundation跟哪个机构合办的艺术家驻留项目？",
    image: "sources/q5.png",
    answer: "C",
    options: {
      A: {
        text: "尤伦斯当代艺术中心",
        image: "",
      },
      B: {
        text: "泰特美术馆",
        image: "",
      },
      C: {
        text: "皇家艺术研究院",
        image: "",
      },
    },
  },
  {
    question: "张鼎在作品中融入哪种稀有元素？",
    image: "sources/q6.png",
    answer: "B",
    options: {
      A: {
        text: "黄金",
        image: "",
      },
      B: {
        text: "钛金",
        image: "",
      },
      C: {
        text: "钯金",
        image: "",
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
        <span>A:</span>
        <span>${q.options.A.text}</span>
      </div>
      <div class="a1" id="a2" data-id="B">
        <img src="${q.options.B.image}" class="a1i">
        <span>B:</span>
        <span>${q.options.B.text}</span>
      </div>
      <div class="a1" id="a3" data-id="C">
        <img src="${q.options.C.image}" class="a1i">
        <span>C:</span>
        <span>${q.options.C.text}</span>
      </div>
    </div>
  `);
}

const rightText = ["恭喜你，回答正确"];

const wrongText = ["回答错误"];

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
