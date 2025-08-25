<template>
  <div class="header">
<h2>>Transform Property</h2>
  </div>
  
  <div class="container">
    <div>
        <div class="box box1"></div>
    </div>
    <div>
        <div class="box box2"></div>
    </div>
    <div>
        <div class="box box3"></div>
    </div>
    <div>
        <div class="box box4"></div>
    </div>
    <div>
        <div class="box box5"></div>
    </div>

  </div>
</template>
<style>

.box{
 height: 100px;
    width:100px;
 transition:1s;
}
.box1{
     background:red;
}
.box2{
     background:green;
}
.box3{
     background:yellow;
}
.box4{
     background:pink;
}
.box5{
     background:gray;
}

.box1:hover{
transform: translate(100px, 100px) rotate(45deg);
}
.box2:hover{
transform: translateY(200px);
}
.box3:hover{
transform: scale(2)
}
.box4:hover{
transform: rotate(45deg)
}
.box5:hover{
transform: skew(50deg)
}
/* @keyframes move {
0% {
}
10%{

}
20%{

}
30%{

}
40%{
    
}
} */



</style>
