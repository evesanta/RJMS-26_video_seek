console.log(1)

video_data = [[7, "停止点灯"], [12, "カウントクリア"], [15, "早送り"], [18, "カウント一致点滅"]]

$(function () {
  const main_video = document.getElementById("video");

  for (let i = 0; i < video_data.length; i++) {
    const li = $('<li></li>').text(video_data[i][1]).on('click', function () {
      main_video.currentTime = video_data[i][0];
    });
    $('.seekList').append(li)
  }


  stop = $('<li></li>').text('stop').on('click', function () {
    main_video.pause();
  });

  seek = $('<li></li>').text('#0:12').on('click', function () {
    main_video.currentTime = 14;
  });


  $('.seekList').append(seek)

});
