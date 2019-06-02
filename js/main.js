$(document).ready(function(){
   
    $(".contact-us .first-column .single-input-box input").on("focus",function(){
            $(this).prev().css({
                    "top":"10px",
                    "transition":"1000ms"
        })
        
    }); 

    
    $(".contact-us .first-column .single-input-box input").on("blur",function(){
        var inputFieldValue = $(this).val();
        
        if(inputFieldValue == ""){
          $(this).prev().css({
          "top":""  ,
          "transition" : "1000ms"
          })  
        }
           
    });
    
        
    $(".contact-us .second-column textarea").on("focus",function(){
            $(this).prev().css({
                    "top":"10px",
                    "transition":"1000ms"
        })
        
    });
    
    $(".contact-us .second-column textarea").on("blur",function(){
        
        var textAreaField = $(this).val();
        
        if(textAreaField == ""){
            $(this).prev().css({
                "top":"",
                "transition":"1000ms"
            })
        }
        
        
    });
   
    
    
    
    /*end contact us part*/
    
    
    
    /*
              START RESPONSIVE MENU          
    */
    
  
    var menuKiOpen = false;
    
    $(".mobile-menu").click(function(){
       if(menuKiOpen == false){
           $(".header .menu ul").css({
               "display":"flex",
               "transform":"scale(1,1)",
               "transition":"1000ms"
           });
           
           menuKiOpen = true;
           
           $(".mobile-menu i").addClass("fa-angle-up").removeClass("fa-bars");
          
       }else{
           $(".header .menu ul").css({
                "display":"flex",
               
                "transform": "scale(0,1)"
            });
            
            menuKiOpen = false;
            
          $(".mobile-menu i").addClass("fa-bars").removeClass("fa-arrow-down"); 
       } 

        
    });
    
    $(window).on("resize",function(){
        var deviceWidth = $(window).width();
        
        if (deviceWidth > 1024){
            $(".header .menu ul").removeAttr("style");
        }
    });
    
    // start transiction tab
    
    $(".transition-tab .first-column a").click(function(){
        $(this).addClass("color-back");
    });
    
});
