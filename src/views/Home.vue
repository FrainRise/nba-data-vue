<template>
    <div class="home">
        <div class="home__container">
            <div class="home__ball-wrapper">
                <img src="../assets/basketball-ball.png" alt="ball" class="ball">
                <div class="ball-shadow"></div>
            </div>
            <h2 class="home__title">Let your dreams come true</h2>
            <p class="home__descr">NBA stats is the best solution of your betting problems</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>
.home {
    position: relative;
    width: 100%;
    height: 90.6vh;
    background: linear-gradient(rgb(233, 150, 122, .9), rgb(233, 150, 122, .9)), url('../assets/home-bg.png')  center fixed no-repeat;
    background-position-y: 2%;
}

.ball {
    width: 100px;
    height: 100px;
    animation: jump-ball 1s alternate infinite ease;
}

.ball-shadow {
    margin: 0 auto;
    width: 80px;
    height: 5px;
    border-radius: 50%;
    background-color: rgba(0,0,0,.7);
    animation: shadow 1s alternate infinite ease;
}

@keyframes jump-ball {
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-125px);

    }
    100%{
        transform: translateY(0);
    }

}

@keyframes shadow {
    0%{
        transform: scale(1);
    }
    50%{
        transform: scale(.5);

    }
    100%{
        transform: scale(1);
    }

}

.home__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.home__title {
    margin: 50px 0;
    font-size: 40px;
    text-transform: uppercase;  
}

.home__descr   {
    font-size: 20px;
    text-transform: uppercase;
}

</style>