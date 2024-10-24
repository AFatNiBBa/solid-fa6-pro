
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pickaxe` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pickaxe?s=sharp-duotone-solid pickaxe}
 * @preview ![pickaxe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pickaxe.svg)
 */
const Pickaxe: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 472l40 40L357.6 205.9c-7.8-8.9-16.1-17.8-24.9-26.6c-2.2-2.2-4.4-4.4-6.6-6.5s-4.4-4.2-6.6-6.3c-4.4-4.2-8.9-8.2-13.3-12.1L0 472zM402.8 54c20.9 15.7 39.5 34.3 55.2 55.2L480 88 424 32 402.8 54z" />
        <path d="M462.4 373.5s0 0 0 0s0 0 0 0s0 0 0 0l14.3 38.8L492.2 374C505 342.5 512 308 512 272C512 121.8 390.2 0 240 0c-36 0-70.5 7-102 19.8L99.6 35.3l38.8 14.3s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0l.2 .1 .8 .3c.7 .3 1.8 .7 3.3 1.3c2.9 1.2 7.2 3 12.7 5.5c11 5 26.7 12.6 45.3 23.1c37.3 21 86 53.6 132 99.5s78.5 94.7 99.5 132c10.5 18.6 18.1 34.3 23.1 45.3c2.5 5.5 4.3 9.8 5.5 12.7c.6 1.4 1 2.5 1.3 3.3l.3 .8 .1 .2z" />
    </Icon>
);

export default Pickaxe;