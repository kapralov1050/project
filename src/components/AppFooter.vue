<template>
<footer class="app-footer">
    <div class="footer-content">
        <div class="footer-section">
            <h4>Контакты</h4>
            <p>Telegram: @AlexanderKapralov</p>
        </div>
        <div class="footer-section">
            <h4>Социальные сети</h4>
            <div class="social-links">
             <a href="https://vk.com/id131030947" class="social-link">
                <img src="https://i.pinimg.com/736x/fb/11/50/fb1150619073ef410d67cfae37675bb3.jpg">
             </a>
             <a href="https://t.me/AleksandrKapralov" class="social-link">
                <img src="https://img.icons8.com/ios_filled/512/FFFFFF/telegram.png">
             </a>
            </div>
        </div>

        <div class="footer-section">
            <p class="copyright">
                © Гонка 2025<br>
                Все права защищены
            </p>
        </div>
    </div>
</footer>
</template>



<script setup>

</script>




<style scoped>
.app-footer {
    background: #2d3436;
    color: white;
    padding: 40px 0;
    margin-top: auto;
}
.footer-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    text-align: center;
}
.footer-section {
    padding: 10px;
}
.social-links img {
    width: 50px;
    padding: 0 20px;
    transition: opacity 0.3s;
}
.social-link:hover img {
    opacity: 0.5;
}
.copyright {
    font-size: 0.9rem;
    line-height: 1.5;
}

@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: 1fr;
    }
}
</style>