<script>

export default {
    name: "AppFooter",

}

</script>

<template>
<section class="footer">
    <div class="footer_content">
        <img src="" alt="Logo.png">
        <p>bla bala bla bla loreeeemmm</p>
        <div class="icons">
            <a href="#">Social</a>
            <a href="#">Social</a>
            <a href="#">Social</a>
            <a href="#">Social</a>
        </div>
    </div>
    <div class="footer_content">
        <h4>Project</h4>
        <li><a href="">Houses</a></li>
        <li><a href="">Room</a></li>
        <li><a href="">Badroom</a></li>
        <li><a href="">Appartament</a></li>
    </div>
    <div class="footer_content">
        <h4>Company</h4>
        <li><a href="">How we Work</a></li>
        <li><a href="">Capital</a></li>
        <li><a href="">Security</a></li>
        <li><a href="">Rental</a></li>
    </div>
    <div class="footer_content">
        <h4>BoolBnB</h4>
        <li><a href="">Support</a></li>
        <li><a href="">Jobs</a></li>
    </div>
    <div class="footer_content">
        <h4>Help</h4>
        <li><a href="">Privacy</a></li>
        <li><a href="">Cookie</a></li>
        <li><a href="">Faqs</a></li>
        <li><a href="">Blogs</a></li>
    </div>
</section>
</template>

<style lang="scss" scoped>

section{
    padding: 80px 13% 70px;
}
.footer{
    background-color: #316BFF;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto ));
    gap: 3.5rem;
}

.footer_content h4{
    margin-bottom: 1.5rem;
    font-size: 20px;
}

.footer_content li{
    list-style: none;
    margin-bottom: 16px;
}
a{
    text-decoration: none;
}
.footer_content li a {
    display: block;
    color: white;
    font-size: 15px;
    font-weight: 400;
    transition: all .40s ease;
}

.footer_content li a:hover {
    transform: translateY(-3px) translateX(-5px);
    color: black;
}

.footer_content p{
    color: black;
    font-size: 16px;
    line-height: 30px;
    margin: 20px 0 ;
}

.icons a {
    display: inline-block;
    font-size: 22px;
    color: black;
    margin-right: 17px;
    transition: all .40s ease;
}
.icons a:hover{
    color:  black;
    transform: translateY(-3px) translateX(-5px);
}

// MEDIA
@media (max-width:1350px){
    section{
        padding: 50px 5% 40px;
    }
}

@media (max-width:1120px){
    .footer{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, auto));
        gap: 2rem;

    }
}

@media (max-width:700px){
    .footer{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, auto));
        gap:2.5rem;

    }
}
</style>
