<template>
</template>
<style>
:root {
  --bg-light: #f0fffe;
  --bg-card: #0f828c67;
  --border-main: #0650847e;
  --accent-deep: #2b5280;
  --text-light: #FFFFFF;
  --text-dark: #292929;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@font-face {
    font-family: 'WhiteCapel';
    src: url('./fonts/WhiteCapel.ttf');
}
body {
  font-family: 'Roboto', sans-serif;
  background-color: var(--bg-light);
  color: var(--text-dark);
  margin: 0;
  padding: 0;
}
.header {
    max-width: 960px;
    padding: 0 20px;
    color:var(--text-dark);
    margin: auto;
    font-size: 10px;
}
h2{
    border: 1px solid rgb(206, 206, 206);
    display: inline-block;
    padding: 10px 20px;
    border-radius: 20px;
}


nav {
    max-width: 960px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 1rem auto;
}

nav li {
  list-style: none;
  padding: 10px 20px;
  border-radius: 50px;
  text-align: center;
  background-color: var(--accent-deep);
  border: 1px solid var(--border-main);
  color: var(--text-light);
  font-weight: bold;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;
}

nav li:hover {
  background-color: var(--border-main);
}

h1 {
  text-align: center;
  text-transform: uppercase;
  margin-top: 2rem;
  margin-bottom: 0;
padding-bottom: 0;
  letter-spacing: 5px;
  font-size: 50px;
    font-family: 'WhiteCapel', sans-serif;

}

ul {
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 2rem auto;
  max-width: 1000px;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.container > div {
  height: 300px;
  border-radius: 10px;
  background-color: var(--bg-card);
  border: 2px solid var(--border-main);
  color: var(--text-light);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
}

</style>