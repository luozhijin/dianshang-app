<template>
      <!-- 顶部位置-->
  <div class="wrapper">
    <Staticpart/>
    <Nearby/>
  </div>
   <Docker/>
</template>
<script>
import Docker from './Docker'
import Nearby from './Nearby'
import Staticpart from './Staticpart'
export default {
  name: 'Home',
  components: { Docker, Nearby, Staticpart }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
//顶部
  // 顶部位置定位
  .wrapper{
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    bottom: .5rem;
    right: 0;
    padding: 0 .18rem .1rem .18rem;
  }

</style>
