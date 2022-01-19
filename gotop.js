(function($){
    $("body").append("<img id='goTopButton' style='display:none; z-index:5; cursor:pointer; top:100px; right:100px; position:fixed;' title='回到頂點'>");
    var img = "TOP .png",  //圖片名稱 ＊要逗點
        location = 1/2,         //按鈕出現螢幕高度位置
        right = 10,             //距離右邊n px
        opacity = 0.6,          //圖片的透明度
        speed = 500,            //向上捲的速度
        $button = $("#goTopButton"),
        $body = $(document),
        $win = $(window);        //分號表示程式到此結束

        $button.attr("src",img); //意思為請幫我把src的屬性且img圖塞進去src
        window.goTopMove = function(){  //當瀏覽器開始移動
          var scrollH = $body.scrollTop(),
              winH = $win.height(),
              css = {"top":winH*location+"px",
              "position":"fixed","right":right,
              "opacity":opacity};
          if(scrollH>20){  //若捲動超過20以上顯示出來
            $button.css(css);
            $button.fadeIn("slow");
          }else{ //否則繼續隱藏
            $button.fadeOut("slow");
          }
        };
        $win.on ({
          scroll:function(){ goTopMove(); },
          resize:function(){ goTopMove(); }  //resize指是窗被放大縮小
        });
        $button.on({
          mouseover:function(){ $button.css("opacity", 1)},
          mouseout:function(){ $button.css("opacity", opacity)},
          click: function(){
            css={"transform":"rotate(720deg)","transition":"transtform 1s ease 0s"};
            $button.css(css);
            $("html, body").animate({scrollTop:0},speed);}
        });

})(jQuery);