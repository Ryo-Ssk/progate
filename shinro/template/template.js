$(function(){
  var url = window.location;
  var path = url.href.split('/');
  if(path[path.length-2] == 'gaiyou' || path[path.length-2] == 'hogosha' || path[path.length-2] == 'seikatsu' || path[path.length-2] == 'moji' || path[path.length-2] == 'shinro' || path[path.length-2] == 'nyugaku' || path[path.length-2] == 'tokushoku' || path[path.length-2] == 'sotsugyousei' ){//ホーム、アクセス以外のページ
    var header = `
      <div class="container">
        <a href="index.html">
          <div class="school">
            <img src="../images/yamato.png">
            <div class="schoolName">
              <p class="kanagawa">神奈川県立</p>
              <p class="yamato">大和高等学校</p>
              <p class="english">Yamato Senior High School</p>
            </div>
          </div>
        </a>
        <div class="rightContent">
          <span class="option"><i class="fas fa-cogs"></i><a href="../option.html">文字サイズ・色合い変更</a></span>
          <span class="access"><i class="fas fa-map-pin"></i><a href="../access.html">アクセス</a></span>
          <p><i class="fas fa-search"></i><input type="text"><button type="button">検索</button></p>
        </div>
      </div>
      <div class="gnavi">
        <ul>
          <a href="../index.html" class="home">ホーム</a>
          <a href="../gaiyou/index.html" class="details">学校概要</a>
          <a href="../seikatsu/index.html" class="life">学校生活</a>
          <a href="../tokushoku/index.html" class="features">特色</a>
          <a href="../shinro/index.html" class="next">進路</a>
          <a href="../hogosha/index.html" class="forParents">在校生・保護者の方へ</a>
          <a href="../sotsugyousei/index.html" class="forGraduators">卒業生の方へ</a>
          <a href="toFreshmen.html" class="forNewStudents">入学希望の方へ</a>
        </ul>
      </div> `;
    var footer = `
      <a href="#top" class="goToTop">
        <div>
          <i class="fas fa-sort-up"></i>
          <p>ページの先頭へ戻る</p>
        </div>
      </a>
      <div class="container">
        <a href="http://www.pref.kanagawa.jp/index.html"><img src="../images/kanagawa.png" class="kanagawa"></a>
        <a href="https://www.pref.kanagawa.jp/docs/u5t/coronavirus.html"><img src="../images/korona.jpg" class="korona"></a>
      </div>
      <div class="navi">
        <ul>
          <a href="#" id="first"><i class="fas fa-chevron-circle-right"></i>サイトマップ</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i>アクセス</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i>個人情報の取扱いについて</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i>ウェブアクセシビリティ方針</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i>神奈川県教育委員会</a>
        </ul>
      </div>
      <div class="address">
        神奈川県立大和高等学校
        <p>〒242-0002 大和市つきみ野3-4 電話番号：(046)274-0026</p>
      </div>
      <div class="copyRight">
        Copyright &copy; 神奈川県立大和高等学校 All Rights Reserved.
      </div> `;
  }else{//ホーム、アクセス、オプションページ
    var header = `
      <div class="container">
        <div class="school">
          <img src="images/yamato.png">
          <div class="schoolName">
            <p class="kanagawa">神奈川県立</p>
            <p class="yamato">大和高等学校</p>
            <p class="english">Yamato Senior High School</p>
          </div>
        </div>
        <div class="rightContent">
          <span class="option"><i class="fas fa-cogs"></i><a href="option.html">文字サイズ・色合い変更</a></span>
          <span class="access"><i class="fas fa-map-pin"></i><a href="access.html">アクセス</a></span>
          <p><i class="fas fa-search"></i><input type="text"><button type="button">検索</button></p>
        </div>
      </div>
      <div class="gnavi">
        <ul>
          <a href="index.html" class="home">ホーム</a>
          <a href="gaiyou/index.html" class="details">学校概要</a>
          <a href="seikatsu/index.html" class="life">学校生活</a>
          <a href="tokushoku/index.html" class="features">特色</a>
          <a href="shinro/index.html" class="next">進路</a>
          <a href="hogosha/index.html" class="forParents">在校生・保護者の方へ</a>
          <a href="sotsugyousei/index.html" class="forGraduators">卒業生の方へ</a>
          <a href="toFreshmen.html" class="forNewStudents">入学希望の方へ</a>
        </ul>
      </div> `;
    var footer = `
      <a href="#top" class="goToTop">
        <div>
          <i class="fas fa-sort-up"></i>
          <p>ページの先頭へ戻る</p>
        </div>
      </a>
      <div class="container">
        <a href="http://www.pref.kanagawa.jp/index.html"><img src="images/kanagawa.png" class="kanagawa"></a>
        <a href="https://www.pref.kanagawa.jp/docs/u5t/coronavirus.html"><img src="images/korona.jpg" class="korona"></a>
      </div>
      <div class="navi">
        <ul>
          <a href="#" id="first"><i class="fas fa-chevron-circle-right"></i>サイトマップ</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i>アクセス</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i>個人情報の取扱いについて</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i>ウェブアクセシビリティ方針</a>
          <a href="#"><i class="fas fa-chevron-circle-right"></i>神奈川県教育委員会</a>
        </ul>
      </div>
      <div class="address">
        神奈川県立大和高等学校
        <p>〒242-0002 大和市つきみ野3-4 電話番号：(046)274-0026</p>
      </div>
      <div class="copyRight">
        Copyright &copy; 神奈川県立大和高等学校 All Rights Reserved.
      </div> `;
  }
  $('#footer').append($(footer));
  $('#header').append($(header));

  $(".goToTop").click(function(){
      var id = $(this).attr('href');
      var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },'slow');
  })
});
