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

    </div>
</template>
<style lang="scss" scoped>
.searchpage {
    height: 700px;
    background-image: url(../assets/img/searchloft.jpg);
    background-position: center;
    background-size: cover;
    filter: brightness(80%);
    position: relative;
    bottom: 55px;
    border: 1px solid black;

    .banner {
        // border: 5px solid black;
        color: white;
        position: relative;
        top: 200px;
        width: 40%;
        margin: 0 auto;
        z-index: 999;
    }
}
    
    </style>