
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-tissue` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-tissue?s=sharp-duotone-solid face-tissue}
 * @preview ![face-tissue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-tissue.svg)
 */
const FaceTissue: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 15.9 1.5 31.5 4.2 46.7l205.9-38.1 45.8-8.5-8.5 45.8-9.4 51 18 12 39.1-26.1 8.9-5.9 8.9 5.9 40.3 26.8 23.7-11.8 14.3-7.2 14.3 28.6-14.3 7.2-32 16-8.3 4.2-7.7-5.2L304 371.2l-39.1 26.1-8.9 5.9-8.9-5.9L231.7 387 209.3 507.8c15.1 2.8 30.7 4.2 46.7 4.2c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM112 128l118.9 64L112 256l45.7-64L112 128zm169.1 64L400 128l-45.7 64L400 256 281.1 192z" />
        <path d="M0 336l216-40L176 512l-48-64L32 480l32-96L0 336z" />
    </Icon>
);

export default FaceTissue;