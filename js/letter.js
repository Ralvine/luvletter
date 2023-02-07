
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^200佳兰佳兰：<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;节日快乐喔！不知不觉我们已经在一起两个多月哩，一想到春日将至，内心很期待与你快快见面！<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;也许我不善言辞，在过去许多个日夜里有无数话想说却不知如何表达。因此，很开心能够看到在这段时间里，我们第一次如此热烈而深沉地敞开心扉，诉说着彼此的心绪与期待。在生活的纷扰与不确定性中，我想我迈出了勇敢的第一步。<br><br>", 
				"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;「万物皆有裂痕，那是阳光照进来的地方。」正是未曾参与你的过去和疫情下地理分隔这样的遗憾存在，我才能更加坚信相逢的意义在于照亮彼此。你是我最美好的今天与所有的明天，等到再度见面之时，我想将这份漫长冬日中所积攒的温暖面对面地传递予你，想一起戴上手链，想一起实现那些期待已久的心愿。", 
				"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我想说，你不仅仅是我生活的一部分，你是我的生活本身，蔓延于我思绪中的每一寸空隙，是我永远永远不想离开的人，即使是独处的时分，内心也会被前所未有的分享欲与牵挂所填充。因为你，所以我，漫漫前路的风景才被赋予了意义，纷繁芜杂的生活才得以一份坦然而从容的定义。",
				"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在未来的日子里，我愿意更加耐心地照顾你的情绪，勇敢直面并积极解决可能存在的矛盾与分歧。也希望我们可以一起慢慢变得成熟，学会表达、学会陪伴，彼此珍惜、相互包容，我相信我们会成为彼此理想的样子，祝我们在往后的日子里勇敢且自由。<br><br><p style='float:right; display:block; width:80px;'>时时刻刻想你的宝</p>"],
			typeSpeed: 120,
			backSpeed: 10
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
