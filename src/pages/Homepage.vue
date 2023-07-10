<template>
    <div class="homepage ">
        <div class="banner text-center">
            <h1 class="text-center mt-4 mb-2">BOOLBNB APARTMENTS</h1>
            <img class="text-center logo" src="../assets//img/bnb.png" alt="">
            <a>
                <router-link class="nav-link btn  " to="/apartments">
                    Find your next experience
                </router-link>
            </a>
        </div>
        <div class="overlay"></div>
    </div>
</template>

<style lang="scss" scoped>
.homepage {
    height: calc(100vh - 250px);
    background-image: url(../assets/img/home.jpg);
    background-position: center;
    background-size: cover;
    overflow: unset;

    .banner {
        width: 60%;
        margin: 0 auto;
        color: white;
        margin-top: 50px;

    }

    .btn {
        margin: 0 auto;
        width: 45%;
        font-size: 2rem;

    }

}

.logo {
    width: 150px;
    margin: 0 auto;
}
</style>
