
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pickaxe` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pickaxe?s=duotone pickaxe}
 * @preview ![pickaxe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pickaxe.svg)
 */
const Pickaxe: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 8.2 3.1 16.4 9.4 22.6s14.4 9.4 22.6 9.4c8 0 16-3 22.2-8.9l306-294.2c-8.6-9.9-17.7-19.8-27.5-29.5c-2.4-2.4-4.8-4.8-7.3-7.2c-2.5-2.4-5-4.7-7.4-7c-4.9-4.6-9.9-9-14.8-13.3L8.9 457.8C3 464 0 472 0 480zM399.5 51.6c23.4 16.9 43.9 37.5 60.9 60.9l9.8-9.4c6.2-6 9.7-14.2 9.8-22.8s-3.3-16.9-9.4-22.9l-16-16c-6.1-6.1-14.3-9.5-22.9-9.4s-16.8 3.6-22.8 9.8l-9.4 9.8z" />
        <path d="M462.4 373.5s0 0 0 0s0 0 0 0c2.3 6.2 8.2 10.4 14.8 10.5s12.6-3.9 15.1-10C505 342.5 512 308 512 272C512 121.8 390.2 0 240 0c-36 0-70.5 7-102 19.8c-6.1 2.5-10.1 8.5-10 15.1s4.3 12.5 10.5 14.8c0 0 0 0 0 0s0 0 0 0l.2 .1 .8 .3c.7 .3 1.8 .7 3.3 1.3c2.9 1.2 7.2 3 12.7 5.5c11 5 26.7 12.6 45.3 23.1c37.3 21 86 53.6 132 99.5s78.5 94.7 99.5 132c10.5 18.6 18.1 34.3 23.1 45.3c2.5 5.5 4.3 9.8 5.5 12.7c.6 1.4 1 2.5 1.3 3.3l.3 .8 .1 .2z" />
    </Icon>
);

export default Pickaxe;