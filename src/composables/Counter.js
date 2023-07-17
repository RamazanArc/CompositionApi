import {ref , computed,watch} from "vue";

export default function (){
//!***********************************************************************************************************
    const oddOrEven = computed(() => counter.value % 2 == 0 ? "Çift" : "Tek");
    const counter = ref(0)
    watch([counter,oddOrEven], ([newC,newO], [oldC,oldO]) => {
        console.log(oldO,"=>",newO);
    })
    //!***********************************************************************************************************
    return{counter,oddOrEven}
}