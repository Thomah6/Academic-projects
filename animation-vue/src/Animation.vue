<template>
    <div class="header">
        <h2>>Animation</h2>
    </div>
    <div class="container">
        <div>
            <div class="box-anim"></div>
        </div>
    </div>
</template>
<style>


.box-anim {
    height: 100px;
    width: 100px;
    background: purple;
    /* animation-name:timing-function;
    animation-duration:4s;
    animation-timing-function:ease;
    animation-delay:0s;
    animation-iteration-count:infinite;
    animation-direction:alternate;
    animation-fill-mode:both;
    animation-play-state:running;

    animation: timing-function 4s infinite direction fill-mode; */
    animation: timing-function 4s ease 0s infinite alternate both;
}

@keyframes timing-function {
    0% {
        transform: translateY(0px) rotate(0deg)
    }

    50% {
        transform: translateY(-100px) rotate(135deg)
    }

    100% {
        transform: translateY(0px) rotate(0deg)
    }
}
</style>