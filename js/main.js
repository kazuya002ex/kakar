'use strict';

{


    // play を押したときの処理
    const play = document.getElementById('play');

    var video = $('#video01').get(0); 

    play.addEventListener('click', () => {
        $('#play').remove();
        video.play();
        // タイマーを起動

        //動画を再生
    });
}