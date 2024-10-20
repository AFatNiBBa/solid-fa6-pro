
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stethoscope` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stethoscope?s=sharp-duotone-solid stethoscope}
 * @preview ![stethoscope](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/stethoscope.svg)
 */
const Stethoscope: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M160.5 348.9c5.1 1 10.3 1.8 15.5 2.3c2.6 .3 5.3 .5 7.9 .6c1.3 .1 2.7 .1 4 .1s2.7 0 4 0c11.2 0 22.1-1.2 32.7-3.3C231 404.6 278.4 448 336 448c61.9 0 112-50.1 112-112l0-70.7c4.9 2.1 10.1 3.8 15.4 4.9c2.7 .6 5.4 1 8.2 1.3s5.6 .4 8.4 .4c11.4 0 22.2-2.4 32-6.7l0 70.7c0 97.2-78.8 176-176 176c-92.9 0-168.9-71.9-175.5-163.1z" />
        <path d="M134.8 63.3L119.3 1.2 88.2 9l-32 8L32 23l0 25 0 144c0 88.4 71.6 160 160 160s160-71.6 160-160l0-144 0-25L327.8 17l-32-8-31-7.8L249.2 63.3l31 7.8L288 73l0 119c0 53-43 96-96 96s-96-43-96-96L96 73l7.8-1.9 31-7.8zM512 192a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160z" />
    </Icon>
);

export default Stethoscope;