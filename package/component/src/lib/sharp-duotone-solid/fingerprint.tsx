
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fingerprint` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fingerprint?s=sharp-duotone-solid fingerprint}
 * @preview ![fingerprint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fingerprint.svg)
 */
const Fingerprint: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M63.8 384l50.1 0c9.3-33.5 14.1-68.2 14.1-103.1l0-24.9c0-31.1 11.1-59.7 29.6-81.9l-31.6-36.8C97.5 168.6 80 210.3 80 256l0 24.9c0 35-5.5 69.8-16.2 103.1zM163 106.6l31.7 37c18.2-9.9 39.1-15.6 61.3-15.6c70.7 0 128 57.3 128 128l0 24.9c0 34.6-2.8 69.1-8.4 103.1l48.6 0c5.2-34 7.8-68.5 7.8-103.1l0-24.9c0-97.2-78.8-176-176-176c-34.2 0-66 9.7-93 26.6zM190.3 480l51.4 0 2.6-6.7C267.9 411.9 280 346.7 280 280.9l0-24.9-48 0 0 24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3-3.3 8.6z" />
        <path d="M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5l15.6 18.2 36.4-31.3L450.2 89.2C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256l0 40 0 24 48 0 0-24 0-40zm458.5-52.9l-4.9-23.5-47 9.9 4.9 23.5c2.9 13.9 4.5 28.3 4.5 43.1l0 40 0 24 48 0 0-24 0-40c0-18.1-1.9-35.8-5.5-52.9zM352 256c0-53-43-96-96-96s-96 43-96 96l0 24.9c0 46-7.6 91.6-22.5 135.1l46.3 0c13.4-43.7 20.3-89.2 20.3-135.1l0-24.9c0-28.7 23.3-52 52-52s52 23.3 52 52l0 24.9c0 45.6-5.5 91-16.4 135.1l45.2 0c10.1-44.2 15.2-89.5 15.2-135.1l0-24.9z" />
    </Icon>
);

export default Fingerprint;