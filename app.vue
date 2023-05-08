<template>
  <div id="app">
    <!-- <NuxtWelcome /> @change="ChangeLang($event)-->
    <header>
      <nav class="navbar">
          <span class="leftnav">{{ ui[uiLang].Name }} {{ ui[uiLang].Surname }}</span>
          <div class="rightnav">
            <select @change="ChangeLang($event)" v-model="uiLang">
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
  position:sticky;
  position: -webkit-sticky;
  display:flex;
  left:0;           
  top:0;           
  z-index:200;
}

.leftnav {
  flex:50%;
  display:flex;
  
  left: 2rem; 
  color: white;
  align-items: center;
  justify-content: left;
}

.rightnav {
  flex:50%;
  display:flex;
  
  right: 0.5rem;
  align-items: center;
  justify-content: flex-end;
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