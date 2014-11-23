// GLOBALS 
var data = {};                             // Admin configs
var dttm = $.now();                         // Init date/time object

$(document).ready(function(){
    
    getNews();

    /* Get news data */
    function getNews(){
        var err = $("#app-err");
        var info = {};                     // Init storage
        var i = 0;                         // Init row counter
        err.text("");
        err.addClass("hidden");
        var url = 'http://mb.techscoopr.com/index.php/news/gn';
        $.getJSON( url, function( data ){
            console.log(data["results"]);
            var nd = data["results"];
            var items = [];
            $.each( nd, function( key, val ) {
                items.push( "<li id='" + key + "'>" + val["Title"] + "</li>" );
            });
 
            $( "<ul/>", {
                "class": "my-new-list",
                html : items.join( "" )
            }).appendTo( "body" );
        });
    };

    /* Set input error message for file searching */
    function setError(e,x){             
        var elem = $("#"+e+"-err");     // Set file search error element
        elem.removeClass("hidden");     // Remove hidden class 
        elem.text(x);                   // Set error text
    };
    
    /* Output form based status message
      PARAMS: 
        string -> Output message
        int    -> 0=ok 1=error */   
    function setStatus(x,y){
        status.text("");                // Clear current status message
        status.text(x);                 // Set new status string
        if(y == 0){                     // Status only (not an error)
            status.removeClass("err");  // Remove past error class
        } else if(y == 1){              // Error code
            status.addClass("err");     // Add error class
        }
    };
});

