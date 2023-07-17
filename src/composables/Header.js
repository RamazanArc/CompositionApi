
import {ref , computed} from "vue";
export default function (){
    const title = ref("Bu bir setup");
    const titleLengthMessage = computed(() => {
        return title.value.length + "adet karakter yazdınız"
    });
    return {title,titleLengthMessage};
}