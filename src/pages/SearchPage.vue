<script>

export default {
    name: "SearchPage"
}
</script>
<template>
    <div class="searchpage">
        <div class="banner">
            <h1 class=" text-center mt-4 mb-4">SEARCHPAGE</h1>
        </div>
        <div class="overlay"></div>

    </div>
</template>

<style lang="scss" scoped>
.searchpage {
    height: 700px;
    background-image: url(../assets/img/searchloft.jpg);
    background-position: center;
    background-size: cover;
    position: relative;
    bottom: 80px;

    .banner {
        color: white;
        position: relative;
        top: 200px;
        width: 40%;
        margin: 0 auto;
        z-index: 10;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 5;
    }

}
</style>