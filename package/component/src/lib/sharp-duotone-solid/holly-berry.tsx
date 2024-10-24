
import { Icon, generic } from "../../index";

/**
 * A component that renders the `holly-berry` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/holly-berry?s=sharp-duotone-solid holly-berry}
 * @preview ![holly-berry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/holly-berry.svg)
 */
const HollyBerry: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 353.8l96-10.7-14.6-94L176 260.8 256 224l-16 86.6 30.7 73.3-94.7 9 13.3 95.7-75.5-15.7L32 512l17.8-88.9L16 353.8zm257.2-46.7l12.7-68.7 48.8 22.5 78.6-11.7-14.6 94 96 10.7-33.8 69.3L478.7 512l-81.8-39.1-75.5 15.7 13.3-95.7-26.6-2.5-7.9-18.8-27-64.5z" />
        <path d="M256 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-32 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm160 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default HollyBerry;