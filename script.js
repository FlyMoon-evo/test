var _CONTENT = [
  "“ 技术是根本，也是第一生产力，这一原则一直是我们研发的基石和指路灯，也是我们引以为傲的精神和引以为戒的态度，我们始终秉承着对待产品至高的要求。 ”",
  "“ 在未来，我们规划了一系列智能耳机产品、传统高端HiFi耳机产品、针对大众市场的高性价比耳机产品等，并为其投入大量研发支出，以赋予“水月雨”品牌更大的价值。 ”"
];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#home-ceo-text");

function Type() { 
  var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text + " _"; // 打字效果
  _PART_INDEX++;
  if(text === _CONTENT[_PART]) {
    clearInterval(_INTERVAL_VAL);
    setTimeout(function() {
      _INTERVAL_VAL = setInterval(Delete, 50); // 删除效果
    }, 1000);
  }
}

function Delete() {
  var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text + " _"; // 删除效果
  _PART_INDEX--;
  if(text === '') {
    clearInterval(_INTERVAL_VAL);
    if(_PART == (_CONTENT.length - 1))
      _PART = 0;  // 循环回到第一个段落
    else
      _PART++;
    _PART_INDEX = 0;
    setTimeout(function() {
      _INTERVAL_VAL = setInterval(Type, 100); // 开始下一个段落的打字效果
    }, 200);
  }
}

// 启动打字效果
_INTERVAL_VAL = setInterval(Type, 100);
