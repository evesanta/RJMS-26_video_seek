//console.log(1)
//
//video_data = [[0, "最初から"], [7, "停止点灯"], [12, "カウントクリア"], [15, "早送り"], [18, "カウント一致点滅"]]
//
//$(function () {
//  const main_video = document.getElementById("video");
//
//  for (let i = 0; i < video_data.length; i++) {
//    tr = $("<tr></tr>")
//    tr.append($("<td></td>").text(((video_data[i][0] / 60) | 0) + ":" + ('00' + video_data[i][0] % 60).slice(-2)))
//    tr.append($("<td></td>").text(video_data[i][1]))
//    tr.on('click', function () {
//      main_video.currentTime = video_data[i][0];
//    });
//    $(".chapterList").append(tr);
//  }
//
//  setInterval(function () {
//    for (let i = 0; i < video_data.length; i++) {
//
//      if (video_data[i][0] <= main_video.currentTime && ((i + 1) == video_data.length || main_video.currentTime < video_data[i + 1][0])) {
//        $("tbody>tr:nth-child(" + (i + 2) + ")").addClass('nowPlay')
//      } else {
//        $("tbody>tr:nth-child(" + (i + 2) + ")").removeClass('nowPlay')
//      }
//    }
//    //console.log(main_video.currentTime)
//  }, 200);
//  //$('.seekList').append(seek)
//
//  //  setInterval(function () {
//  //    console.log(main_video.currentTime)
//  //  }, 1000);
//  //  $("tr:nth-child(2)").addClass('nowPlay')
//});



ELEMENT.locale(ELEMENT.lang.ja)
var app = new Vue({
  el: '#app',
  methods: {
    say: function (index) {
      this.tableData2.forEach(function (val, index, array) {
        val.nowPlay = false
      });
      this.tableData2[index].nowPlay = true
      video = document.getElementById("video");
      const temp = this.tableData2[index].time.split(":")
      video.currentTime = temp[0] * 60 + temp[1];
    }
  },
  data: {
    tableData2: [{
      time: '0:00',
      name: '初めから',
      nowPlay: true
        }, {
      time: '0:07',
      name: '停止点灯',
      nowPlay: false
        }, {
      time: '0:12',
      name: 'カウントクリア',
      nowPlay: false
        }, {
      time: '0:15',
      name: '早送り',
      nowPlay: false
        }, {
      time: '0:18',
      name: '一致点灯',
      nowPlay: false
        }],
    title: 'ハードウェア記述言語',
  }
})
