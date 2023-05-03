<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <header>
      <b-navbar type="dark" fixed="top">
        <div class="text-center text-white mx-auto">
          Pisit Akarateerapisal
        </div>
      </b-navbar>
    </header>
    <main>
      <div class="maintext">
          <p>In making...</p>
      </div>
        
    </main>
    <!-- 頁尾區 -->
    <footer>
      <b-row class="justify-content-center align-content-center">
        <b-col id="footer-panel" cols="12">
          <div class="text-center text-white">
            Banyspy <a
              class="text-white text-decoration-none"
              href="https://github.com/banyspy"
              data-size="large"
              aria-label="Star banyspy on GitHub"
            >
              <fa :icon="['fab', 'github']" /> GitHub
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
:root {
  --chevron-down-svg-path: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='%23CCC' d='M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z'%3E%3C/path%3E%3C/svg%3E")
}

.custom-select {
  background-image: var(--chevron-down-svg-path);
}

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