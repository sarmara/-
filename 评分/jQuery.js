
$(function () {
    var $stars = $('.star li');
    var $tip = $('.box div.tip');
    var $tipr = $('.star span.tip');
    var clickIndex = -1;
    var msg = [
        "很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
        "不满意|部分有破损，与卖家描述的不符，不满意",
        "一般|质量一般，没有卖家描述的那么好",
        "满意|质量不错，与卖家描述的基本一致，还是挺满意的",
        "非常满意|质量非常好，与卖家描述的完全一致，非常满意"
    ]

    $stars.each(function (i) {
        $(this).on("mouseover", function () {
            $tip.css({
                display: "inline-block",
                left: i * 20 + (i + 1) * 5,
            }).html(`<h1>${(i + 1) + '分'}</h1> ${msg[i].split('|')[0]}<section>${msg[i].split('|')[1]}</section>`);

            $stars.each(function (j) {
                $(this).attr("class", j <= i ? "goldstar" : "");
            })
        }).on("mouseout", function () {
            $tip.css({ display: "none" });
            $stars.each(function (j) {
                $(this).attr("class", j <= clickIndex ? "goldstar" : "");
            })
        }).on("click", function () {
            $tipr.css({ display: "inline-block" }).html(`<span>${(i + 1) + '分'}</span>(${msg[i].split('|')[1]})`);
            clickIndex = i;
        })
    })


    // $(function () {
        // var stars = $(".star ul li");
        // var tip = $(".box div.tip");
        // var tipr = $(".star span.tip");
        // var clickIndex = -1;
        // var msg = ["很不满意|差得太离谱，与卖家描述的严重不符，非常不满",
        //     "不满意|部分有破损，与卖家描述的不符，不满意",
        //     "一般|质量一般，没有卖家描述的那么好",
        //     "满意|质量不错，与卖家描述的基本一致，还是挺满意的",
        //     "非常满意|质量非常好，与卖家描述的完全一致，非常满意"]
        // for (var i = 0; i < stars.length; i++) {
        //     stars[i].index = i;
        //     stars.mouseover(i,function () {
        //         var that = this.index;
        //         tip.css({ display: "inline-block" });
        //         tip.css({ left: "(that * 20 + (that + 1) * 5) + 'px'" })
        //         var score = (that + 1) + "分" + " ";
        //         var arrMsg = msg[that].split("|");
        //         tip.html(`<h2>${score}${arrMsg[0]}</h2><section>${arrMsg[1]}</section>`);
        //        stars.each(function (v, j) {
        //         stars[j].className = j <= that ? "goldstar" : "";
        //         })
        //     })
        //     stars.mouseout(i,function () {
        //         tip.css({ display: "none" });
        //         stars.each(function (v, j) {
        //         stars[j].className = j <= clickIndex ? "goldstar" : "";
        //         })
        //     })
        //     stars.click(i,function(){
        //         var that = this.index;
        //         var score = (that + 1) + "分" + " ";
        //         var arrMsg = msg[that].split("|");
        //         tipr.style({display:"inlineblock"});
        //         tipr.html(`<span>${score}</span>${arrMsg[1]}`);
        //         clickIndex = that;
        //     })
        // }
})