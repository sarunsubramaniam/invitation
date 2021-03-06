$(document).ready(function () {
    
    AOS.init({
        duration: 1200,
      });

      $(function() {
        $.scrollify({
          section : "section",
        });
      });


    // Set the date we're counting down to
    var countDownDate = new Date("Feb 4, 2021 12:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // console.log(distance);

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("countdown").innerHTML = `<span>${days}</span><span>${hours}</span><span>${minutes}</span><span>${seconds}</span>`;
        document.querySelector('.countdown-attributes').innerHTML = `<span> ${days > 1 ? 'Days' : 'Day'} </span> <span> ${hours > 1 ? 'Hours' : 'Hour'} </span> <span> ${minutes > 1 ? 'Minutes' : 'Minute'} </span> <span> ${seconds > 1 ? 'Seconds' : 'Second'} </span>`

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            // document.getElementById("countdown").innerHTML = "EXPIRED";
            document.querySelector('.countdown-wrapper').style.display = 'none';
            // debugger;
        }
    }, 1000);
})