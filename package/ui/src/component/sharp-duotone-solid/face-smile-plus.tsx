
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-smile-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-plus?s=sharp-duotone-solid face-smile-plus}
 * @preview ![face-smile-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-smile-plus.svg)
 */
const FaceSmilePlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288a224 224 0 1 0 448 0A224 224 0 1 0 0 288zm112.4-48c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1 .4 2.1 .5 3.2c.1 .5 .1 1.1 .1 1.6s0 1 0 1.8c0 .5 0 1 0 1.5s-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zM116 367.3l24-21.2c20.5 23.3 50.6 37.9 84 37.9s63.5-14.6 84-37.9l24 21.2C305.6 397.1 267 416 224 416s-81.6-18.9-108-48.7zM336.4 240a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M568 0l0 24 0 48 48 0 24 0 0 48-24 0-48 0 0 48 0 24-48 0 0-24 0-48-48 0-24 0 0-48 24 0 48 0 0-48 0-24 48 0zM144.4 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm160 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceSmilePlus;