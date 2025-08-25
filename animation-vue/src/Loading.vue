<template>
    <div class="header">
<h2>>Loading</h2>
    </div>
    <div class="container">
        <div>
            <div class="loading">
            </div>
        </div>
    </div>
</template>
<style>

.loading{
    height:50px;
    width:50px;
    border: 5px solid cyan;
    border-radius:3px;
    box-shadow:0 0 8px cyan, 0 0 8px cyan inset;
    animation:loading 2s ease-in infinite;
}

@keyframes loading{
    0%{
        transform:rotateX(0deg) rotateY(0deg)
    }
    33%{
transform:rotateX(180deg) rotateY(0deg) rotateZ(0deg)
    }
    67%{
transform:rotateX(180deg) rotateY(180deg) rotateZ(0deg)

    }
    100%{
transform:rotateX(180deg) rotateY(180deg) rotateZ(180deg)

    }
}
</style>