
import { Icon, generic } from "../../index";

/**
 * A component that renders the `saxophone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/saxophone?s=sharp-duotone-solid saxophone}
 * @preview ![saxophone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/saxophone.svg)
 */
const Saxophone: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 48 24 0 4.2 0L4.4 277.4C1.5 289.7 0 302.4 0 315.1l0 3.1C0 407.6 72.4 480 161.8 480c49.4 0 96.1-22.6 126.8-61.4L544 96l96 0 0-32L592 32l-80 0c-21 21-42 42-63 63c-11.3 11.3-22.6 22.6-33.9 33.9c-4.7 4.7-9.4 9.4-14.1 14.1c-11.3 11.3-22.6 22.6-33.9 33.9c-4.7 4.7-9.4 9.4-14.1 14.1c-11.3 11.3-22.6 22.6-33.9 33.9c-37.5 37.5-74.9 74.9-112.4 112.4c-4.2 4.2-10 6.6-16 6.6c-12.5 0-22.6-10.1-22.6-22.6l0-2.6c0-4.4 1.2-8.8 3.4-12.6L246.7 176l17.3 0 24 0 0-48-24 0L24 128 0 128zM120 320a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm32-96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M319 225L353 191l-8-8-17-17L294.1 200l17 17 8 8zm48-48L401 143l-8-8-17-17L342.1 152l17 17 8 8zm48-48L449 95l-8-8-17-17L390.1 104l17 17 8 8zM152 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-32 96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Saxophone;