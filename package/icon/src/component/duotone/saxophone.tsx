
import { Icon, generic } from "../../index";

/**
 * A component that renders the `saxophone` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/saxophone?s=duotone saxophone}
 * @preview ![saxophone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/saxophone.svg)
 */
const Saxophone: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 152c0 13.3 10.7 24 24 24l4.2 0L4.4 277.4C1.5 289.7 0 302.4 0 315.1l0 3.1C0 407.6 72.4 480 161.8 480c49.4 0 96.1-22.6 126.8-61.4L534.4 108.1c6.1-7.7 15.3-12.1 25.1-12.1l64.2 0c9 0 16.3-7.3 16.3-16.3c0-4.9-2.2-9.5-5.9-12.6L609.8 46.8c-11.5-9.6-26-14.8-41-14.8l-30.3 0c-17 0-33.3 6.7-45.3 18.7L449 95 415 129 401 143 367 177 353 191 319 225 206.6 337.4c-4.2 4.2-10 6.6-16 6.6c-12.5 0-22.6-10.1-22.6-22.6l0-2.6c0-4.4 1.2-8.8 3.4-12.6L246.7 176l17.3 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 128c-13.3 0-24 10.7-24 24zM120 320a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm32-96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M319 225L353 191l-8-8c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l8 8zm48-48L401 143l-8-8c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l8 8zm48-48L449 95l-8-8c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l8 8zM152 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-32 96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Saxophone;