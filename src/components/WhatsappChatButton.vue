<template>
  <div>
    <div class="containerz2">
      <!-- Chat Via WhatsApp -->
      <a
        class="icons"
        href="https://wa.me/6287821513777?text=Assalamu%27alaikum%2C%20perkenalkan%20nama%20saya....."
      ><svg viewBox="0 0 800 800">
          <path d="M519 454c4 2 7 10-1 31-6 16-33 29-49 29-96 0-189-113-189-167 0-26 9-39 18-48 8-9 14-10 18-10h12c4 0 9 0 13 10l19 44c5 11-9 25-15 31-3 3-6 7-2 13 25 39 41 51 81 71 6 3 10 1 13-2l19-24c5-6 9-4 13-2zM401 200c-110 0-199 90-199 199 0 68 35 113 35 113l-20 74 76-20s42 32 108 32c110 0 199-89 199-199 0-111-89-199-199-199zm0-40c133 0 239 108 239 239 0 132-108 239-239 239-67 0-114-29-114-29l-127 33 34-124s-32-49-32-119c0-131 108-239 239-239z" /></svg><span>Chat Via WhatsApp</span></a>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css?family=Roboto');

.containerz2 {
  // font-family: 'Roboto', Arial, Sans-serif;
  font-size: 16px;
  font-weight: 400;
  transform: translate(-50%, 45%);
  a {
    color: #fff;
    text-decoration: none;
    transition: ease-in-out 0.2s;
  }
  a:hover {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.24);
  }
  .icons {
    background: #25d366;
    border-radius: 10px;
    display: block;
    height: 42px;
    margin-bottom: 20px;
    width: 220px;
  }
  .icons:hover {
    background: #128c7e;
  }
  .icons span {
    display: block;
    left: 5px;
    position: absolutele;
    top: 5px;
    transform: translate(0, 10px);
  }
  svg {
    border-radius: 10px;
    display: block;
    fill: #fff;
    float: left;
    height: 42px;
    margin-right: 5px;
    -webkit-transition: ease-in-out 0.175s;
    transition: ease-in-out 0.175s;
    width: 42px;
  }
}
</style>