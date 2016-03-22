
/*获取各个标签*/
var cityInput = document.getElementById("aqi-city-input");
var valueInput = document.getElementById("aqi-value-input");
var addBtn = document.getElementById("add-btn");
var tableList = document.getElementById("aqi-table");


/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = cityInput.value.trim();
    var value = valueInput.value.trim();
    if (!/^[\u4e00-\u9fa5a-zA-Z]+$/.test(city)) {
        alert('请输入正确的城市名称!');
        return
    }
    if (!/^\d+$/.test(value)) {
        alert("空气质量指数只能是数字");
        return;
    }

    aqiData[city] = value;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var data ="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData) {
        data += "<tr><td>"+ city + "</td><td>"+ aqiData[city] + "</td><td>"
            + "<button value='" + city +"'>删除</button>"+"</td>"
    }
    tableList.innerHTML = data;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
    delete aqiData[city.value];
    renderAqiList();
    console.log(city.value);
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    addBtn.addEventListener('click', function () {
        addBtnHandle();
    });
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    tableList.addEventListener('click', function (e) {
        delBtnHandle(e.target);
    });
}

init();
