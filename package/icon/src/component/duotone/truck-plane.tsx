
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-plane` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-plane?s=duotone truck-plane}
 * @preview ![truck-plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-plane.svg)
 */
const TruckPlane: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 64c0 5.1 2.4 9.8 6.4 12.8s9.3 3.9 14.1 2.5l123.4-37 0 81.2-50 40c-3.8 3-6 7.6-6 12.5l0 32c0 5.1 2.5 10 6.6 13s9.5 3.8 14.4 2.2L200 480.9 290.4 511c-1.6-4.7-2.4-9.8-2.4-15l0-32.6c-18.2-10.5-30.7-29.7-31.9-51.8c-.1-1.3-.1-2.4-.1-3.6l0-82.5L256 184c0-.4 0-.7 0-1.1c0-32.3 0-64.6 0-96.9C256 54.7 231.5 0 200 0c-30.6 0-56 54.7-56 86.1l0 106.5L7.8 274.3C2.9 277.2 0 282.4 0 288z" />
        <path d="M336 128c-26.5 0-48 21.5-48 48l0 224c0 20.9 13.4 38.7 32 45.3l0 42.7c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-40 160 0 0 40c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-42.7c18.6-6.6 32-24.4 32-45.3l0-224c0-26.5-21.5-48-48-48l-256 0zm16 176l15.8-49.3c3.3-8.7 11.2-14.7 20.5-14.7l151.4 0c9.2 0 17.2 6 20.5 14.7L576 304l-224 0zm192 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM360 352a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default TruckPlane;