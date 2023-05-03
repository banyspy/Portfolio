<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <header>
      <b-navbar type="dark" fixed="top">
        <div class="text-center text-white mx-auto">
          <span>Pisit Akarateerapisal</span>
        </div>
      </b-navbar>
    </header>
    <main>
      <div class="maintext">
          <p>In making...</p>
      </div>
        
    </main>
    <footer>
      <b-row class="justify-content-center align-content-center">
        <b-col id="footer-panel" cols="12">
          <div class="text-center text-white">
            <span>Banyspy</span> <a
              class="text-white text-decoration-none"
              href="https://github.com/banyspy"
              data-size="large"
              aria-label="Star banyspy on GitHub"
            >
              <span>GitHub</span>
            </a>
          </div>
        </b-col>
      </b-row>
    </footer>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
</script>

<style>

header, footer {
  font-family: 'en', 'zh';
  font-size: 1.5rem;
  line-height: 1.2rem;
  padding-top:1rem;
  padding-bottom:1rem;
  background-color: #2f2f2f;
}

.maintext {
  padding: 25% 50% 25% 50%;
  position: relative;
}

.maintext p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
}
</style>