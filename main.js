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
      const video = document.getElementById("video");
      const temp = this.tableData2[index].time.split(":")
      video.currentTime = temp[0] * 60 + temp[1];
    },
    update: function (thisis = this) {
      //console.log(this)
      thisis.tableData2.forEach(function (val, index, array) {
        const video = document.getElementById("video");
        const temp = val.time.split(":")
        const time = parseInt(temp[0], 10) * 60 + parseInt(temp[1], 10)
        //console.log(array)
        const nextTemp = index + 1 == array.length || array[index + 1].time.split(":")
        const nextTime = parseInt(nextTemp[0], 10) * 60 + parseInt(nextTemp[1], 10)
        //console.log(time);
        val.nowPlay = false;
        if (time <= video.currentTime && (index + 1 == array.length || video.currentTime < nextTime)) {
          //console.log(index);
          val.nowPlay = true;
        }
      });
    },
  },
  created: function () {
    setInterval(this.update, 100)

  },

  data: {
    tableData2: [{
      time: '0:00',
      name: '初めから',
      nowPlay: true
        }, {
      time: '0:06',
      name: '停止点灯',
      nowPlay: false
        }, {
      time: '0:11',
      name: 'カウントクリア',
      nowPlay: false
        }, {
      time: '0:14',
      name: '早送り',
      nowPlay: false
        }, {
      time: '0:17',
      name: '一致点灯',
      nowPlay: false
        }],
    title: 'ハードウェア記述言語',
  }
})

// this.app.$options.methods.update(this.app.$options.data)
