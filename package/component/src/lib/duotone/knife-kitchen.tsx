
import { Icon, generic } from "../../index";

/**
 * A component that renders the `knife-kitchen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/knife-kitchen?s=duotone knife-kitchen}
 * @preview ![knife-kitchen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/knife-kitchen.svg)
 */
const KnifeKitchen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 480c0 1.2 .1 2.5 .4 3.7c1.3 5.4 5.3 9.8 10.5 11.5c.4 .1 .5 .2 .7 .2c.4 .1 1 .3 1.8 .6c1.5 .5 3.7 1.1 6.5 1.9c5.5 1.6 13.3 3.7 22.7 5.7c18.6 4.1 43.9 8.4 69.5 8.4c123.3 0 209.4-62.8 287.3-140.7c3.1-3.1 4.7-7.2 4.7-11.3s-1.6-8.2-4.7-11.3c-9.4-9.4-18.8-18.8-28.1-28.1c-32.6-32.6-65.2-65.2-97.9-97.9c-3.8-3.8-7.5-7.5-11.3-11.3c-3.8 3.8-7.5 7.5-11.3 11.3l-246 246c-3 3-4.7 7.1-4.7 11.3z" />
        <path d="M463 10.3C469.7 3.7 478.6 0 488 0s18.3 3.7 25 10.3L557.7 55c6.6 6.6 10.3 15.6 10.3 25s-3.7 18.3-10.3 25l-97 97c-3 3-4.7 7.1-4.7 11.3l0 31.9c0 17.4-9.4 33.5-24.7 42L375.8 318l-4.6 2.6-97.9-97.9L262 211.4l6.7-6.7L463 10.3zM448 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48-48a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default KnifeKitchen;