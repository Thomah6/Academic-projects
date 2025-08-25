
<template>
   <div class="header">
     <h2>>Scrolling</h2>
   </div>
    <div class="scroll-element">
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
        <div class="block"></div>
    </div>
</template>

<style>


.scroll-element{
    max-width:400px;

    gap:30px;
    padding:0 50px 400px 50px;
    margin:auto
}
.block {
    display: inline-block;
    animation: scrolling linear;
    height: 100px;
    width: 100px;
    margin: 10px;
    background:red;
    animation-timeline:view();
    animation-range: entry 0% cover 50%;
}

.block:nth-child(1)  { background-color: #e74c3c; box-shadow:0 0 10px #e74c3c, 0 0 10px #e74c3c inset ; }
.block:nth-child(2)  { background-color: #2ecc71;box-shadow:0 0 10px #2ecc71, 0 0 10px #2ecc71 inset ; }
.block:nth-child(3)  { background-color: #3498db; box-shadow:0 0 10px #3498db, 0 0 10px #3498db inset ;}
.block:nth-child(4)  { background-color: #f1c40f; box-shadow:0 0 10px #f1c40f, 0 0 10px #f1c40f inset ;}
.block:nth-child(5)  { background-color: #9b59b6; box-shadow:0 0 10px #9b59b6, 0 0 10px #9b59b6 inset ;}
.block:nth-child(6)  { background-color: #1abc9c; box-shadow:0 0 10px #1abc9c, 0 0 10px #1abc9c inset ;}
.block:nth-child(7)  { background-color: #e67e22; box-shadow:0 0 10px #e67e22, 0 0 10px #e67e22 inset ;}
.block:nth-child(8)  { background-color: #34495e; box-shadow:0 0 10px #34495e, 0 0 10px #34495e inset ;}
.block:nth-child(9)  { background-color: #c0392b; box-shadow:0 0 10px #e74c3c, 0 0 10px #e74c3c inset ;}
.block:nth-child(10) { background-color: #27ae60; box-shadow:0 0 10px #27ae60, 0 0 10px #27ae60 inset ;}
.block:nth-child(11) { background-color: #2980b9; box-shadow:0 0 10px #2980b9, 0 0 10px #2980b9 inset ;}
.block:nth-child(12) { background-color: #f39c12; box-shadow:0 0 10px #f39c12, 0 0 10px #f39c12 inset ;}
.block:nth-child(13) { background-color: #8e44ad; box-shadow:0 0 10px #8e44ad, 0 0 10px #8e44ad inset ;}
.block:nth-child(14) { background-color: #16a085; box-shadow:0 0 10px #16a085, 0 0 10px #16a085 inset ;}
.block:nth-child(15) { background-color: #d35400; box-shadow:0 0 10px #d35400, 0 0 10px #d35400 inset ;}
.block:nth-child(16) { background-color: #2c3e50; box-shadow:0 0 10px #2c3e50, 0 0 10px #2c3e50 inset ;}

@keyframes scrolling {
    from {
        opacity: 0;
        transform:translateX(-550px);
    }
    50%{
                opacity: 0;

    }
    to {
        opacity: 1;
        transform:translateX(0px);
    }
}


</style>
