<template>
    <div class="homepage">
        <div class="banner">
            <h1 class="text-center mt-4 mb-4">WELCOME TO BOOLBNB</h1>
            <p class="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cum nulla quae blanditiis quasi provident mollitia ipsam, porro cumque, sunt voluptas non. Nihil excepturi quas, architecto nam enim fugiat rerum.</p>
        </div>
        <div class="overlay"></div> <!-- Aggiungi l'overlay -->
    </div>
</template>

<style lang="scss" scoped>
.homepage {
    height: 700px;
    background-image: url(../assets/img/homeloft.jpg);
    background-position: center;
    background-size: cover;
    position: relative;
    bottom: 80px;
}

.banner {
    color: white;
    position: relative;
    top: 200px;
    width: 40%;
    margin: 0 auto;
    z-index: 2;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Modifica l'opacità dell'overlay se necessario */
    z-index: 1;
}
</style>
