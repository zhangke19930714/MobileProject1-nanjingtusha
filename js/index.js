var Imgarr = ['images/info_01.jpg','images/info_02.jpg','images/info_03.jpg','images/info_04.jpg','images/info_05.jpg','images/info_06.jpg','images/info_07.jpg','images/info_08.jpg'];

$('.page3-show img[class*=flame]').click(function(){
   if($(this).attr('alt')=="燕子矶"){
         $('.history img').attr('src',Imgarr[0]);
         $('.history center').text('燕子矶');
         $('.history p').text('1937年12月，3万多名解除武装的士兵和2万多平民，避聚于燕子矶江滩，求渡北逃。被日舰封锁，后又被大队日军包围后，以机枪横扫，惨遭杀害，总数达5万余人。');
         $('.history').show();
   }
   if($(this).attr('alt')=="草鞋峡"){
   	 $('.history img').attr('src',Imgarr[1]);
         $('.history center').text('草鞋峡');
         $('.history p').text('1937年12月18日，侵华日军将被拘囚于幕府山下的难民和被俘军人5.7万余人，用铅丝捆绑，驱至下关草鞋峡，先用机枪扫射，又用刺刀戳毙，最后浇煤油纵火焚烧，残骸弃入长江。');
         $('.history').show();
   }
   if($(this).attr('alt')=="鱼雷营"){
   	$('.history img').attr('src',Imgarr[2]);
         $('.history center').text('鱼雷营');
         $('.history p').text('1937年12月15日，侵华日军将已解除武装的守城官兵和南京平民9000余人，押至鱼雷营，以机枪集体射杀。同月，日军在鱼雷营、宝塔桥一带再次杀害我军民3万余人，尸曝于野长达数月。');
         $('.history').show();
   }
   if($(this).attr('alt')=="中山码头"){
   	$('.history img').attr('src',Imgarr[3]);
         $('.history center').text('中山码头');
         $('.history p').text('在这里被侵华日军惨杀者，达万人以上。1937年12月16日傍晚，日军从避居于原华侨招待所难民中，捕获所谓有"当兵"嫌疑者5000余人，押解于此，用机枪集体射杀后弃尸江中。12月18日，日军又从避居于大方巷之难民中，搜捕青年4000余名押解至此，用机枪射杀。');
         $('.history').show();
   }
   if($(this).attr('alt')=="太平门"){
   	$('.history img').attr('src',Imgarr[4]);
         $('.history center').text('太平门');
         $('.history p').text('1937年12月13日，第十六师团三十三联队六中队等侵华日军部队在南京太平门附近，将约1300名放下武器的中国官兵及无辜市民集中起来，用铁丝网围住，用事先埋好的地雷炸、机枪扫射，再浇上汽油焚烧。');
         $('.history').show();
   }
   if($(this).attr('alt')=="汉中门"){
   	$('.history img').attr('src',Imgarr[5]);
         $('.history center').text('汉中门');
         $('.history p').text('1937年12月15日下午，避难于国际安全区之平民和已解除武装之军警共2000余人，遭日军搜捕，被押赴汉中门外用机枪扫射杀害，其伤而未死者或乱刀补戳，或纵火活焚，尸骸蔽野，惨绝人寰。');
         $('.history').show();
   }
   if($(this).attr('alt')=="江东门"){
   	$('.history img').attr('src',Imgarr[6]);
         $('.history center').text('江东门');
         $('.history p').text('1937年12月16日，日军将已被解除武装的中国士兵和平民万余人押至江东门，以轻重机枪猛烈扫射，受害者相继倒卧于血泊之中。遗尸数月，才由南京慈善团体收尸万余具，掩埋于就近之两大土坑内，故称"万人坑"。');
         $('.history').show();
   }
   if($(this).attr('alt')=="中华门"){
   	$('.history img').attr('src',Imgarr[7]);
         $('.history center').text('中华门');
         $('.history p').text('1937年12月13日，日军坦克驶入中华门。中华门前尸横遍地，血流成河……');
         $('.history').show();
   }

})

$('.history').click(function(){
	$(this).hide();
})
$('.page14-img2').click(function(){
	$(this).addClass('flowers');
	var timer = setTimeout(function(){
		$('.last').show();
	},2400)
	
})

//处理音频
$('.music').click(function(){
	if($('audio')[0].paused){
        $('audio')[0].play();
        $('.music').css('backgroundPosition','left top')
	}else{
		$('audio')[0].pause();
		$('.music').css('backgroundPosition','left bottom')
	}
})