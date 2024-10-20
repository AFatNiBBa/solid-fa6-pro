
import { Icon, generic } from "../../index";

/**
 * A component that renders the `olive` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/olive?s=sharp-duotone-solid olive}
 * @preview ![olive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/olive.svg)
 */
const Olive: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M264.3 114.6c-.3 5.9-.4 14 .4 23.1c1.7 18.2 7.2 40.1 22.3 55.3c19.5 19.5 50.4 23 69.8 23c10.7 0 18-1.1 18-1.1s8.4-57.5-21.9-87.8c-15.2-15.2-37.1-20.6-55.3-22.3c-9.1-.8-17.2-.8-23.1-.4c-2.9 .2-5.3 .4-6.9 .5c-1.6 .2-2.5 .3-2.5 .3c0 .1-.1 1-.3 2.5c-.2 1.6-.4 4-.5 6.9z" />
        <path d="M160 480C71.6 480 0 408.4 0 320C0 128 181.9 32 280 32c56 0 112 56 112 56s56 56 56 112c0 98.1-96 280-288 280zM287.1 192.9c30.3 30.3 87.8 21.9 87.8 21.9s8.4-57.5-21.9-87.8s-87.8-21.9-87.8-21.9s-8.4 57.5 21.9 87.8z" />
    </Icon>
);

export default Olive;