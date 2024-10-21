
import { Icon } from "../../index";

/**
 * A component that renders the `face-sleeping` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sleeping?s=sharp-regular face-sleeping}
 * @preview ![face-sleeping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-sleeping.svg)
 */
const FaceSleeping: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256C48 141.1 141.1 48 256 48c30.7 0 59.9 6.7 86.1 18.6l19.9-43.7C329.6 8.2 293.7 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256c0-37.7-8.2-73.6-22.9-105.9l-43.7 19.9C457.3 196.1 464 225.3 464 256c0 114.9-93.1 208-208 208S48 370.9 48 256zM256 424a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM391.5 237.7c-20 27.1-59.8 27.1-79.8 0l-32.2 23.8c36 48.7 108.2 48.7 144.2 0l-32.2-23.8zm-271.8 0L87.5 261.5c36 48.7 108.2 48.7 144.2 0l-32.2-23.8c-20 27.1-59.8 27.1-79.8 0zM288 96l0 32 16 0 26.7 0-36.3 27.2L288 160l0 8 0 8 0 16 16 0 64 0 16 0 0-32-16 0-26.7 0 36.3-27.2L384 128l0-8 0-8 0-16-16 0-64 0-16 0zM432 0L416 0l0 32 16 0 26.7 0L422.4 59.2 416 64l0 8 0 8 0 16 16 0 64 0 16 0 0-32-16 0-26.7 0 36.3-27.2L512 32l0-8 0-8 0-16L496 0 432 0z" />
    </Icon>
);

export default FaceSleeping;