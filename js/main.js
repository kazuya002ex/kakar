'use strict';

{

    const kanae = document.getElementById("kanae");
    const videoo = document.getElementById("video");
    const nru = document.getElementById("nru");

    function ring() {
        document.getElementById("sound").play();
    }

    function redirect(){
        location.href="result.html";
    }

    function ho(){
        videoo.style.display = "none";
        nru.style.display = "none";
        kanae.style.display = "block";
        ring();

        // 5秒後に画面遷移する
        setTimeout(redirect, 1500);
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