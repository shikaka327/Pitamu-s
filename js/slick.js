$(".main-slider").slick({
    autoplaySpeed: 4000, // スライド表示時間
    speed: 600, // スライドの切り替え時間
    lazyLoad: "progressive", // バックグラウンドでスライド画像をロード
    arrows: false,
    dots: true
});


$(".main-slider").slick({
    autoplaySpeed: 4000, // スライド表示時間
    speed: 600, // スライドの切り替え時間
    lazyLoad: "progressive", // バックグラウンドでスライド画像をロード
    arrows: false,
    dots: true
});


$(".main-slider").on("init", function(slick) {
    // スライダーオブジェクトを取得
    slick = $(slick.currentTarget);
    // 動画スライドの再生(1枚目のスライドが動画である場合)
    setTimeout(function() {
        playPauseVideo(slick, "play");
    }, 1000);
    // iframeの埋め込み動画の表示サイズと位置を決定
    resizePlayer(iframes, 16 / 9);
});


$(".main-slider").on("beforeChange", function(event, slick) {
    slick = $(slick.$slider);
    // 現在の動画スライドに対して一時停止させる(カレントが動画スライドである場合)
    playPauseVideo(slick, "pause");
});


$(".main-slider").on("afterChange", function(event, slick) {
    slick = $(slick.$slider);
    // 現在の動画スライドに対して再生を開始(カレントが動画スライドである場合)
    playPauseVideo(slick, "play");
});