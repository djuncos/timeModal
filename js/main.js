var n=6



 $(document).ready(function() {


 		setTimeout(function() {

			$('#ampersand').css('opacity', '1')

		}, 1.5*1000)


 		setTimeout(function() {

			$('.headRight').css('opacity', '1')
			$('.headRight').addClass("animated bounceInRight")
			$('#euclidTheWord').css('opacity', '1')
			$('#euclidTheWord').addClass("animated bounceInRight")


		}, 2.5*1000)

 		setTimeout(function() {

			$(".eAndE").animate({

				left: "-=40%",
				top: "-=45%",
				height: "-=30px",
				"font-size": "-=20",
				
			
				} , 800);


			$(".ampersand").animate({

				"padding-top": "-=50%",
			
				} , 800);

		}, 4.5*1000)


 		setTimeout(function() {

			$('.left').show()
			$('.left1').show()

		}, (n+1)*1000)

 		setTimeout(function() {

			$('.left').hide()
			$('.left1').hide()
			$('.right').show()
			$('.right1').show()

		}, (n+4)*1000)

 		setTimeout(function() {

			$('.right').hide()
			$('.right1').hide()
			$('.left').show()
			$('.left2').show()


		}, (n+6)*1000)

 		setTimeout(function() {

			$('.left').hide()
			$('.left2').hide()
			$('.right').show()
			$('.right2').show()

		}, (n+12)*1000)

 		setTimeout(function() {

			$('.right').hide()
			$('.right2').hide()

		}, (n+16)*1000)

 		setTimeout(function() {

			$('.left').show()
			$('.left3').show()
			
		}, (n+17)*1000)




 })