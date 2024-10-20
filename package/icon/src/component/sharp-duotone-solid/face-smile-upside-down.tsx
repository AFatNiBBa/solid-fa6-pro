
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smile-upside-down` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-upside-down?s=sharp-duotone-solid face-smile-upside-down}
 * @preview ![face-smile-upside-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-smile-upside-down.svg)
 */
const FaceSmileUpsideDown: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm129.7-71.2C142.3 159.7 184.4 112 256 112s113.7 47.7 126.3 72.8l-28.6 14.3C344.9 181.7 312.4 144 256 144s-88.9 37.7-97.7 55.2l-28.6-14.3zm14.1 115.9c.1-1.1 .3-2.1 .5-3.2c.4-2.1 1.1-4.1 1.9-6c1.6-3.8 4-7.3 6.9-10.2c5.8-5.8 13.8-9.4 22.6-9.4c17.7 0 32 14.3 32 32s-14.3 32-32 32c-8.8 0-16.8-3.6-22.6-9.4c-2.9-2.9-5.2-6.3-6.9-10.2c-.8-1.9-1.4-3.9-1.9-6c-.2-1-.4-2.1-.5-3.2c-.1-.5-.1-1.1-.1-1.6s0-1 0-1.8c0-.4 0-.9 0-1.5s.1-1.1 .1-1.6zm160 0c.1-1.1 .3-2.1 .5-3.2c.4-2.1 1.1-4.1 1.9-6c1.6-3.8 4-7.3 6.9-10.2c5.8-5.8 13.8-9.4 22.6-9.4c17.7 0 32 14.3 32 32s-14.3 32-32 32c-8.8 0-16.8-3.6-22.6-9.4c-2.9-2.9-5.2-6.3-6.9-10.2c-.8-1.9-1.4-3.9-1.9-6c-.2-1-.4-2.1-.5-3.2c-.1-.5-.1-1.1-.1-1.6s0-1 0-1.8c0-.4 0-.9 0-1.5s.1-1.1 .1-1.6z" />
        <path d="M175.6 272a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm160 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default FaceSmileUpsideDown;