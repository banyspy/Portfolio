<template>
  <div id="app">
    <!-- <NuxtWelcome /> @change="ChangeLang($event)-->
    <header>
      <nav class="navbar">
        <div display="inline">
          <span class="leftnav text-white">{{ ui[uiLang].Name }} {{ ui[uiLang].Surname }}</span>
          
            <select class="rightnav" @change="ChangeLang($event)" v-model="uiLang">
              <option value="th">TH</option>
              <option value="en">EN</option>
            </select>
          
        </div>
      </nav>
    </header>
    <main>
      <div class="maintext">
          <p>{{ ui[uiLang].MainText }}</p>
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
            <githublogo/>
              <span> GitHub</span>
            </a>
          </div>
        </b-col>
      </b-row>
    </footer>
  </div>
</template>

<script setup>
import "bootstrap/dist/css/bootstrap.css";
import githublogo from "./static/iconmonstr-github-1.svg";
</script>

<script>
import ui from "./static/lang.ui.json";
export default {
  data() {
    return {
      uiLang:'th',
      ui,
    }
  },
  methods:{
    ChangeLang(event){
      this.uiLang = event.target.value;
    },
  },
}


</script>

<style>


header, footer {
  font-family: 'en', 'zh';
  font-size: 1.5rem;
  line-height: 1.2rem;
  padding-top:1rem;
  padding-bottom:2rem;
  background-color: #2f2f2f;
}

.navbar {
  position:fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left:0;           /* top left corner should start at leftmost spot */
  top:0;            /* top left corner should start at topmost spot */
  z-index:200;  /* high z index so other content scrolls underneath */
}

.leftnav {
  flex:50%;
  position: absolute;
  left: 2rem; 
}

.rightnav {
  flex:50%;
  position: absolute;
  top: 0.2rem;
  right: 0.5rem;
}

.maintext {
  height:100%;
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