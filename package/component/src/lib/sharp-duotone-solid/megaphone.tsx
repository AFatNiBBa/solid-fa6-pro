
import { Icon, generic } from "../../index";

/**
 * A component that renders the `megaphone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/megaphone?s=sharp-duotone-solid megaphone}
 * @preview ![megaphone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/megaphone.svg)
 */
const Megaphone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l0 32L0 320l0 32 64 0 0-30.9c34.1 9.7 68.1 19.3 102.2 29c15.5 4.4 31 8.8 46.5 13.2c30.3 8.6 60.7 17.2 91 25.8c15.5 4.4 31 8.8 46.5 13.2L512 448l0-384L64 190.9 64 160 0 160z" />
        <path d="M576 32l-64 0 0 448 64 0 0-448zM160 384c0 53 43 96 96 96c46.8 0 85.8-33.5 94.3-77.8L303.7 389c-2.5 24.2-22.9 43-47.7 43c-26.5 0-48-21.5-48-48c0-7.4 1.7-14.5 4.7-20.8L166.2 350c-4 10.6-6.2 22-6.2 34z" />
    </Icon>
);

export default Megaphone;