
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scythe` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=duotone scythe}
 * @preview ![scythe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scythe.svg)
 */
const Scythe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 179.3c0 7 5.7 12.7 12.7 12.7L541 192c9.3-43.6 18.7-87.1 28-130.7c2.6-12 5.1-24 7.7-36c1.8-8.4 3.6-16.9 5.4-25.3C505.4 0 428.7 0 352 0C114.8 0 15 151.1 1.6 173.3c-1.1 1.8-1.6 3.8-1.6 6z" />
        <path d="M639 24.1C636.1 12.7 627 3.3 614.7 .7c-2.2-.5-4.5-.7-6.7-.7L582.1 0l-5.4 25.3s0 0 0 0l-7.7 36L520.4 288 416 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l90.7 0-26 121.3c-3.7 17.3 7.3 34.3 24.6 38s34.3-7.3 38-24.6l34.3-160L634.4 61.3l4.8-22.6s0 0 0 0c1.1-5 .9-10-.3-14.6z" />
    </Icon>
);

export default Scythe;