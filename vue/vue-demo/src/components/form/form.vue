<template>
    <form>
        <slot></slot>
    </form>
</template>
<script>
export default {
    
    props: {
        model: {
            type:Object
        },
        rules: {
            type:Object
        }
    }
}
</script>

