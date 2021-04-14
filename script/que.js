const data = [
  {
    question:
      "《Future comes from the past》是韩国艺术家姜錫鉉（Eddie Kang）创作的一组艺术作品，目前收藏于天津K11 select5层。他的美学思想主要來自卡通人物的视觉风格和種種怀旧的氛围。<br>以下作品同属于姜錫鉉（Eddie Kang）的是?",
    image: "sources/1q.jpg",
    answer: "A",
    options: {
      A: {
        text: "My Universe Serues",
        image: "sources/2q.jpg",
      },
      B: {
        text: "Untitled Kimpsons#2",
        image: "sources/3q.jpg",
      },
      C: {
        text: "Campbell's Soup Can",
        image: "sources/4q.jpg",
      },
    },
  },
];

const rightText = ["任何瞬间的心动都不容易，不要怠慢了它——毛姆", "正确提示语2"];

const wrongText = ["错误提示语言1", "错误提示语言2"];

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
