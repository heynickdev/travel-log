<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Travel App
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <AppThemeToggle />
      <NuxtLink to="/sign-in" class="btn btn-accent">
        Sign In
        <Icon name="tabler:brand-github" />
      </NuxtLink>
    </div>
  </div>
</template>
