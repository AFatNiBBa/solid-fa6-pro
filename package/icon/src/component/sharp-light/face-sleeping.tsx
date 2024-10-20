
import { Icon } from "../../index";

/**
 * A component that renders the `face-sleeping` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-sleeping?s=sharp-light face-sleeping}
 * @preview ![face-sleeping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-sleeping.svg)
 */
const FaceSleeping: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32c33.1 0 64.5 7.2 92.7 20l13.3-29.1C329.6 8.2 293.8 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256c0-37.8-8.2-73.6-22.9-105.9L460 163.3c12.8 28.2 20 59.6 20 92.7c0 123.7-100.3 224-224 224S32 379.7 32 256zM232 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm83.2-149.6c-21.6 28.8-64.8 28.8-86.4 0l-25.6 19.2c34.4 45.9 103.2 45.9 137.6 0l-25.6-19.2zm-278.4 0L91.2 253.6c34.4 45.9 103.2 45.9 137.6 0l-25.6-19.2c-21.6 28.8-64.8 28.8-86.4 0zM288 96l0 32 16 0 26.7 0-36.3 27.2L288 160l0 8 0 8 0 16 16 0 64 0 16 0 0-32-16 0-26.7 0 36.3-27.2L384 128l0-8 0-8 0-16-16 0-64 0-16 0zM432 0L416 0l0 32 16 0 26.7 0L422.4 59.2 416 64l0 8 0 8 0 16 16 0 64 0 16 0 0-32-16 0-26.7 0 36.3-27.2L512 32l0-8 0-8 0-16L496 0 432 0z" />
    </Icon>
);

export default FaceSleeping;