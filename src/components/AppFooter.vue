<script>

export default {
    name: "AppFooter",

}

</script>

<template>
    <footer class="footer  py-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-3">
                    <h5>BoolBnB</h5>
                    <p>lorem ipsum lorem ipsum </p>
                    <ul>
                        <li><a href="#" class="link-black">instagram</a></li>
                        <li><a href="#" class="link-black">twitter</a></li>
                        <li><a href="#" class="link-black">facebook</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>Page</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="link-black">Home</a></li>
                        <li><a href="#" class="link-black">About Us</a></li>
                        <li><a href="#" class="link-black">Houses</a></li>
                        <li><a href="#" class="link-black">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h5>Ospitare</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="link-black">Apri un BnB</a></li>
                        <li><a href="#" class="link-black">BoolCover</a></li>
                        <li><a href="#" class="link-black">Esplora ovunque</a></li>
                        <li><a href="#" class="link-black">Vai al forum</a></li>
                        <li><a href="#" class="link-black">Come ospitare</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
            <hr class="my-3 mt-5">
            <div class="row">
                <div class="col-md-12 ">
                        <p class="text-muted">
                            &copy; 2023 BoolBnB, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Termini</a> &middot; <a href="#">Mappa del  sito</a> &middot; <a href="#">Dettagli dell'azienda</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>


</template>

<style>
footer{
    background-color:#316BFF ;
}

.link-black {
    color: #000000;
    list-style: none;
    text-decoration: none;
  }
  .text-muted a {
    color: black;
    list-style: none;
    text-decoration: none;
  }


</style>









