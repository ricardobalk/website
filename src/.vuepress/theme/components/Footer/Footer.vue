<template>
  <footer class="footer" tabindex="0">
    <div class="g-row g-justify-end">
      <div class="c-sm-12">
        <div class="footer-message">
          <p>
            This website was made with
            <font-awesome-icon :icon="['fas', 'heart']" class="icon" title="love" size="sm" />
            , a lot of
            <font-awesome-icon :icon="['fas', 'mug-hot']" class="icon" title="coffee" size="sm" />
            and some
            <font-awesome-icon :icon="['fas', 'code']" class="icon" title="code" size="sm" />
            by Ricardo Balk. Source code available on
            <a href="https://github.com/ricardobalk/website" target="_blank"
              ><font-awesome-icon :icon="['fab', 'github']" class="icon" title="GitHub" size="sm" />.</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" src="./Footer.ts" />
<style lang="stylus" src="./Footer.styl" />