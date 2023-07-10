<script>

export default {
    name: "AppFooter",

}

</script>

<template>
    <footer class="footer pt-2">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5>Social Links</h5>

                    <ul class="list-unstyled text-center mt-2">
                        <li><a href="#" class="link-black"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
                        <li><a href="#" class="link-black"><i class="fa-brands fa-facebook"></i> Facebook</a></li>
                        <li><a href="#" class="link-black"><i class="fa-brands fa-pinterest-p"></i> Pinterest</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>BoolBnB</h5>
                    <ul class="list-unstyled text-center mt-2">
                        <li><a href=""></a> <router-link class="nav-link btn  " to="/">
                                Homepage
                            </router-link></li>
                        <li><a href=""></a> <router-link class="nav-link btn  " to="/apartments">
                                Apartments
                            </router-link></li>
                        <li><a href="#" class="link-black">About Us</a></li>
                </ul>
                
                </div>
                <div class="col-md-4">
                    <h5>DiegoG82 <i class="fa-solid fa-trademark"></i></h5>
                    <ul class="list-unstyled text-center mt-2">

                        <li><a href="#" class="link-black">MAde</a></li>
                        <li><a href="#" class="link-black">By</a></li>
                        <li><a href="#" class="link-black">mE</a></li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="container">

            <hr class="my-3 mt-2">
            <div class="row">
                <div class="col-md-12">
                    <p class="text-muted">
                        &copy; 2023 BoolBnB, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Termini</a> &middot;
                        <a href="#">Mappa del sito</a> &middot; <a href="#">Dettagli dell'azienda</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    background-color: #01ABE3;
    height: 200px;
    font-size: 0.7rem;
    // margin-top: 20px;
}

.col-md-4 {
    display: flex;
    flex-direction: column;
    align-items: center
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

.fa-trademark {
    font-size: 0.5rem;
}
</style>
