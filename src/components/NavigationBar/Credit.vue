<template>
        <b-nav-item @click="credit">{{ $t('Credits') }}</b-nav-item>
</template>

<script>
// import localforage from 'localforage';
import Swal from "sweetalert2";
export default {
    name: "credit",
    methods: {
        credit() {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'Credits:\n\nOriginal: 7coil (Discord Blocks) Androz, snowflake107 \n\nPreview 454: jose_trindade1, MrRedo\n\n',
                text: 'Preview 469: frostzzone, RetroBtw, XL83, AHQ Miness DEV, henpokpok, AlexCdDg, Eruption',
                showConfirmButton: true
            })
        },
    }
}
</script>
