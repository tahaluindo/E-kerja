<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css");
html {
  background-color: #F4FAF3;
}
body {
  background-color: #F4FAF3 !important;
}
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #004d40;
  background-color: transparent !important;

  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-regular {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  ::placeholder {
    color: #99b8b3;
    font-weight: 500;
    font-size: 14px;
  }

  input {
    color: #004d40;
    font-weight: 500;
  }

  .btn-primary {
    background-color: #00796B;
    border: 1px solid #00796B;
  }

  .btn-primary:hover {
    background-color: #006B5F;
  }

  label {
    font-size: 16px;
  }

  .text-danger {
    color: #DD3737;
  }

  .btn-danger {
    background-color: #DD3737;
    border: 1px solid #DD3737;
  }

  .btn-danger:hover {
    background-color: #BF2727;
  }
}
</style>
