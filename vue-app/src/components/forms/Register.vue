<template>
<div>
    <form action="">
        <div class="form-group">
            <label for="email"> Email address </label>
            <input type="email" class="form-control" id="email" placeholder="email">
        </div>
          
        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" placeholder="username">
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Password">
        </div>

        <div class="form-group">
            <label for="confirm password"> confirm Password</label>
            <input type="password" class="form-control" id="confirm password" placeholder="confirm Password">
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
        
    </form>
</div>
</template>

<script>

export default {
  name: 'Register',
}
</script>

<style>
/* GLOBAL STYLING */
#app {
  background: #202329;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

