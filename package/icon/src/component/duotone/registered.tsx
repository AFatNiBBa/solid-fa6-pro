
import { Icon, generic } from "../../index";

/**
 * A component that renders the `registered` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/registered?s=duotone registered}
 * @preview ![registered](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/registered.svg)
 */
const Registered: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM160 152c0-13.3 10.7-24 24-24l88 0c44.2 0 80 35.8 80 80c0 28-14.4 52.7-36.3 67l34.1 75.1c5.5 12.1 .1 26.3-11.9 31.8c-3.2 1.5-6.6 2.2-9.9 2.2c-9.1 0-17.8-5.2-21.9-14.1L268.9 288 208 288l0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-96 0-112zm48 24l0 64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0z" />
        <path d="M184 128c-13.3 0-24 10.7-24 24l0 112 0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-72 60.9 0 37.2 81.9c5.5 12.1 19.7 17.4 31.8 11.9s17.4-19.7 11.9-31.8L315.7 275c21.8-14.3 36.3-39 36.3-67c0-44.2-35.8-80-80-80l-88 0zm88 112l-64 0 0-64 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
    </Icon>
);

export default Registered;