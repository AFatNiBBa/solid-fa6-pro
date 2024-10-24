
import { Icon, generic } from "../../index";

/**
 * A component that renders the `recycle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/recycle?s=sharp-duotone-solid recycle}
 * @preview ![recycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/recycle.svg)
 */
const Recycle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M-5.3 333.1l9.6 16.7L51.8 432 61 448l18.5 0 80.5 0 0-64-62 0L69.3 334.4l50.8-81.3c-18.5-10.7-37-21.3-55.5-32L4.9 316.8-5.3 333.1zM149.4 85.6l55.5 32L238.3 64l35.4 0 53.2 85.2 55.5-32L318.5 15 309.1 0 291.4 0 220.6 0 202.8 0l-9.4 15L149.4 85.6zM320 384l0 64 112.5 0 18.5 0 9.2-16 15.5-26.9 32-55.4 9.6-16.7-10.2-16.3-43.3-69.3-55.5 32 34.3 54.8-22.4 38.8L414 384l-94 0z" />
        <path d="M412.6 229l32.2-120.2L432.8 88 280.4 176l12 20.8L412.6 229zM180.4 260.2L148.2 140 28 172.2 16 193l152.4 88 12-20.8zM296 328l-88 88 88 88 24 0 0-176-24 0z" />
    </Icon>
);

export default Recycle;