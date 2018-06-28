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
    <script src="js/towndata.js"></script>
    
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