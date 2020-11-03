declare module '@/packages/*' {
    import { VueConstructor } from 'vue';
    interface V extends VueConstructor {
        install: (Vue: VueConstructor) => void;
    }
    const VExtend: V;
    export default VExtend;
}