'use strict';

{

    const kanae = document.getElementById("kanae");
    const videoo = document.getElementById("video");
    const nru = document.getElementById("nru");

    function redirect(){
        location.href="result.html";
    }

    function ho(){
        videoo.style.display = "none";
        nru.style.display = "none";
        kanae.style.display = "block";

        // 5秒後に画面遷移する
        setTimeout(redirect, 5000);
    }

    function alertMsgd(){
        alert("5秒経過しました");
    }

    // play を押したときの処理
    const play = document.getElementById('play');

    var video = $('#video').get(0);

    play.addEventListener('click', () => {
        //動画を再生
        $('#play').remove();
        video.play();

        // 19秒後にかなえを表示&効果音を鳴らす
        setTimeout(ho, 19000);
    });
}