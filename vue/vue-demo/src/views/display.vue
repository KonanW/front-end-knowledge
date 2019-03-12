<template>
    <div>
          <h3>动态渲染 .vue 文件的组件—— Display</h3>

          <i-display :code="code"></i-display>
    </div>
</template>

<script>
import iDisplay from "../components/display/display"
import defaultCode from "./default.js"
export default {
    components: {
        iDisplay
    },
    data: function() {
        return {
            code:defaultCode
        }
    }
}
</script>

<style>

</style>
