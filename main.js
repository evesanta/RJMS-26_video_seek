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
  data() {
    return {
      tableData2: [{
        time: '0:00',
        name: '初めから'
        }, {
        time: '0:07',
        name: '停止点灯'
        }, {
        time: '0:12',
        name: 'カウントクリア'
        }, {
        time: '0:15',
        name: '早送り'
        }, {
        time: '0:18',
        name: '一致点灯'
        }],
      title: 'ハードウェア記述言語',
      tableData3: [{
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
        }, {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
        }, {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
        }, {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
        }, {
        date: '2016-05-08',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
        }, {
        date: '2016-05-06',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
        }, {
        date: '2016-05-07',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
        }],

    }
  }
})
