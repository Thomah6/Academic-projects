<template>
  
    <div class="header">
<h2>>Transition Property</h2>
  </div>
  <div class="container">
    <div>
        <div class="-box -box1"></div>
    </div>
    
  </div>
</template>
<style>

.-box{
 height: 100px;
    width:100px;
    
   
}
.-box1{
     background:red; 
  /* transition-property:transform, background-color, scale;
    transition-duration: 1s;
    transition-timing-function:ease;
    transition-delay:0s;  */

    transition: all 1s;
}


.-box1:hover{
transform: rotate(135deg);
background-color:cyan;
scale:2;
}

</style>
