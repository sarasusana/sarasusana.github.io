<!DOCTYPE html>
<html lang="en-us">
<head> 
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Allerta|Raleway" rel="stylesheet">
        <meta name="description" content="Welcome to Franklin City page from How's the Weather, you realiable and accurate site to know the weather report">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/small.css">
        <link rel="stylesheet" href="css/medium.css">
        <link rel="stylesheet" href="css/large.css"> 
        <title>Franklin City | How's the Weather</title>
</head>
    
<body>
  <header class="clearfix"><a href="index.html">
  <figure class="logo">
      <img src="images/logo0.png" alt="logo" srcset="images/logo1.png 1x, images/logo2.png 2x, images/logo3.png 3x">
      </figure></a>
  <h1>How's the Weather</h1>
  <h2 class="subheading">Stay up to date</h2>
  </header>

  <nav class="clearfix">
      <button onclick="toggleMenu()">&#9776;</button>
    <ul id="primaryNav" class="hide">
    	<li class="active"><a href="index.html">Home</a></li>
    	<li><a href="franklin.html">Franklin</a></li>
    	<li><a href="#">Greenville</a></li>
    	<li><a href="#">Springfield</a></li>
    	<li><a href="stormcenter.html">Storm Center</a></li>
    	<li><a href="gallery.html">Gallery</a></li>
    </ul>		
  </nav>
    
  <main>
  <figure class="hero">
  	<img src="images/franklin-original.jpg" alt="h-image" sizes="100vw" srcset="images/franklin-1.jpg 400w, images/franklin-2.jpg 800w, images/franklin-3.jpg 1200w">
  </figure>
  <div id="today-w">
      <section id="today-weather"><h1><span id="place">Name</span> City</h1></section>
      <div class="franklin-box">
      <section id="description"><h2>Today's Weather</h2>
      <ul>
        <li>Current Temperature: <span id="currentTemp"></span>°</li><li><span id="weatherDescription">Description</span></li>
        <li>High: <span id="high"></span> </li>
        <li>Low: <span id="low"></span> </li>
        <li>Wind: <span id="currentWind"></span> from the South West</li>
      </ul>
          </section>
         
     
      <section class="description2"><h2>Weather Icon</h2>
      <img id="w-icon" src="images/placeholder.png" alt="franklin-weather">
        </section>
      </div>
      </div>
      
       <div class="forecast-box">
        <section class="forecast">
      <h2>Forecast Details</h2>
       <div class="wrapper-table">
        <div class="mainItem">10 Days Forecast</div>
          
            <div class="item">1</div>
            <div class="item">2</div>
            <div class="item">3</div>
            <div class="item">4</div>
            <div class="item">5</div>
            <div class="item">6</div>
            <div class="item">7</div>
            <div class="item">8</div>
            <div class="item">9</div>
            <div class="item">10</div>
        
            <div class="item">89°F</div>
            <div class="item">87°F</div>
            <div class="item">78°F</div>
            <div class="item">75°F</div>
            <div class="item">72°F</div>
            <div class="item">72°F</div>
            <div class="item">79°F</div>
            <div class="item">83°F</div>
            <div class="item">85°F</div>
            <div class="item">89°F</div>
</div>
        </section>
            </div>
      
      <div id="history-day">
      <section id="data-curious"><h2>This day in History</h2>
      <h3>Igor Stravinsky's ballet Le Sacre du printemps is premiered</h3></section>
          <div class="history-box">
              <section class="curiosities"><figure id="poster"><img src="images/stravinsky-poster.jpg" alt="poster"><figcaption id="caption-tdh">Original Poster of the Premiere</figcaption></figure></section>
          
          <section class=details><p>On this day in history, Igor Stravinsky performance sparked a riot in the audience as many felt its irregular beat and the percussive character was a sacrilege against music. Today, it is considered one of the key works of 20th-century art music.<br>In the mid-20th century, Stravinsky revised the orchestration for concert performance, and that version of the score remains the version that is most commonly performed.<br>In 1987, however, the ballet as it was first conceived and performed, with original set and costumes and Nijinsky’s choreography (which had been seen for only seven performances before it was superseded by new choreography from Léonide Massine), was painstakingly reconstructed and re-created by the Joffrey Ballet. The centenary of the ballet’s premiere prompted other ballet companies, notably the Mariinsky in St. Petersburg, to also revive the work in its original form.</p><br><strong>Learn more on <a href="https://www.britannica.com/topic/The-Rite-of-Spring" target="_blank">Encyclopedia Britannica</a></strong></section>
          </div>
          </div>
           <br>
      <div>
      <h2>Calculate:</h2>
      <div class="windchill-box">
      <h3>Temperature (°F):</h3> <input type="text" id="tempF" size="5">
      <h3>Speed (MPH):</h3> <input type="text" id="speed" size="5">
      <br>
      <br>
      <button type="button" onclick="doInputOutput()">Wind Chill</button>
      <br>
      <div id="outputDiv"></div>
      </div>
      </div>
  </main>
    <br>
  <footer class="footer-box">
           
      <section class="box-1">
      <h3>Address:</h3>
      <p>The Weather Center</p>
      <p>123 Main Street</p>
      <p>Franklin, MI 87654</p>
      </section>
      
      <section class="box-2">
      <h3>Phone:</h3>
      <p>(801) 555-1234</p>
      </section>
      
      <section class="box-2">
      <h3>Email</h3>
      <p>contact@youurl.com</p>
      <p></p>
      </section>
          
      <p id="box-3">&#169; 2018 &#8226; All right reserved <br>
          <span id="currentDate"></span></p>

    </footer>

    
</body>
    
    <script src="js/currentdate.js"></script>
    <script src="js/hamburger.js"></script>
    <script src="js/windchill.js"></script>
    <script src="js/franklinWeather.js"></script>

    
    <script>
    
        var urlString = document.location.href;
        var urlArray = urlString.split('/');
        var pageHREF=urlArray[urlArray.length-1];
        
        if (pageHREF !=="") {
            var menu = document.querySelectorAll('ul#primaryNav li a');
            var i;
            //loop through all the menu items in the navigation
            for(i=0; i<menu.length; i++) {
                var currentURL=(menu[i].getAttribute("href"));
                menu[i].parentNode.className=""; //turn off highlight by default
                if (currentURL===pageHREF) {
                    menu[i].parentNode.className="active"; //turn on if a match
                } //end if
            } //end of the search for a match
        } //end of if !==
        
    </script>
</html>