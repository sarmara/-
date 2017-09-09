
window.onload = function () {
    var stars = document.querySelectorAll(".star ul li");
    var tip = document.querySelector(".box div.tip");
    var tipr = document.querySelector(".star span.tip");
    //标记星星点击的位置，-1表示从来未被点击过
    var clickIndex = -1;
    var msg = [
        "很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
        "不满意|部分有破损，与卖家描述的不符，不满意",
        "一般|质量一般，没有卖家描述的那么好",
        "满意|质量不错，与卖家描述的基本一致，还是挺满意的",
        "非常满意|质量非常好，与卖家描述的完全一致，非常满意"]
    for (var i = 0; i < stars.length; i++) {
        stars[i].index = i;

        //绑定mouseover
        stars[i].addEventListener("mouseover", function () {
            // tip.setAttribute("display", "inline-block");

            //在内层函数使用this变量的时候，this变量指向了array，而不再指向stars
            var that = this.index;

            tip.style.display = "inline-block";
            tip.style.left = (that * 20 + (that + 1) * 5) + "px";
            var score = (that + 1) + "分" + " ";
            var arrMsg = msg[that].split("|");


            tip.innerHTML = `<h2>${score}${arrMsg[0]}</h2><section>${arrMsg[1]}</section>`
            //让star对象(类数组对象，本来没有数组方法)，通过Array.prototype.forEach.call()让star对象拥有像数组一样的foreach方法
            Array.prototype.forEach.call(stars, function (v, j) {
                // if (j <= i) {
                //     stars[j].className = "goldstar";
                // } else {
                //     stars[j].className = "";
                // }
                stars[j].className = j <= that ? "goldstar" : "";
            })
        })
        //绑定鼠标在移走离开星星时候的事件
        stars[i].addEventListener("mouseout", function () {
            tip.style.display = "none";
            Array.prototype.forEach.call(stars, function (v, j) {
                stars[j].className = j <= clickIndex  ? "goldstar" : "";
            })
        })

        stars[i].onclick = function () {
            var that = this.index;
            var score = (that + 1) + "分" + " ";
            var arrMsg = msg[that].split("|");

            tipr.style.display = "inline-block";
            tipr.innerHTML = `<span>${score}</span>${arrMsg[1]}`;
            clickIndex = that;
        }

       

    }
}
