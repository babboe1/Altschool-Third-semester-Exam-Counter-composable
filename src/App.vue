<template>
   <div id="app">
      <header id="header">
         <!-- container for logo image -->
         <div class="image-logo">
            <router-link to="/" class="nav-bar__link"
               >Creative<span>Count</span></router-link
            >
         </div>

         <!-- nav bar section code  -->
         <nav id="nav-bar">
            <!-- nav bar item list -->
            <ul class="nav-bar__list">
               <li
                  v-on:mouseover="
                     handleHover($refs.magicLine, 'magic-line-left')
                  "
                  class="nav-bar__item"
               >
                  <router-link to="/" class="nav-bar__link">Home</router-link>
               </li>
               <li
                  v-on:mouseover="
                     handleHover($refs.magicLine, 'magic-line-left1')
                  "
                  class="nav-bar__item"
               >
                  <router-link to="/counter" class="nav-bar__link"
                     >Counter</router-link
                  >
               </li>

               <li
                  v-on:mouseover="
                     handleHover($refs.magicLine, 'magic-line-left2')
                  "
                  class="nav-bar__item"
               >
                  <router-link to="/game" class="nav-bar__link"
                     >Math Game</router-link
                  >
               </li>
            </ul>
            <div ref="magicLine" class="nav-bar__list--after"></div>
         </nav>
      </header>

      <main id="main">
         <router-view />
      </main>
   </div>
</template>

<script>
import './assets/styles/homepage.css';

export default {
   name: 'HomePage',
   mounted() {
      const magicLine = this.$refs.magicLine;
      console.log(magicLine);
   },
   methods: {
      handleHover(ref, value) {
         ref.className = 'nav-bar__list--after';
         ref.classList.add(`${value}`);
      },
   },
};
</script>

<style>
* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}
#app {
   width: 100%;
   height: 100%;
   margin: 0 auto;
   text-align: center;
}
#main {
   width: 100%;
   max-width: 1440px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100%;
}

#header {
   width: 100%;
   display: flex;
   padding: 2rem 1rem;
   width: 100%;
   transition: 1s;
   justify-content: space-between;
   align-items: center;
   background-color: #e3e3e3;
   box-shadow: 0 2px 4px 4px rgba(0, 0, 0, 0.1);
}

button {
   font-size: 1.5rem;
   margin: 0 0.5rem;
}

a {
   text-decoration: none;
}
</style>
