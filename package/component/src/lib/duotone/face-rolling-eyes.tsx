
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-rolling-eyes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-rolling-eyes?s=duotone face-rolling-eyes}
 * @preview ![face-rolling-eyes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/face-rolling-eyes.svg)
 */
const FaceRollingEyes: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96-32c0-32.9 24.8-60 56.8-63.6c2.4-.2 4.8-.4 7.2-.4s4.9 .2 7.2 .4C199.2 164 224 191.1 224 224c0 35.3-28.7 64-64 64s-64-28.7-64-64zm80 160c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zM416 224.1A64 64 0 1 1 288 224a64 64 0 1 1 128 .1z" />
        <path d="M195.6 180.4c0 19.6-15.9 35.6-35.6 35.6s-35.6-15.9-35.6-35.6c0-3 .4-6 1.1-8.8c9.6-7.3 21.5-11.6 34.5-11.6s24.9 4.3 34.5 11.6c.7 2.8 1.1 5.8 1.1 8.8zM384 184c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-6.9 2.2-13.2 5.8-18.4c8-3.6 16.8-5.6 26.2-5.6s18.2 2 26.2 5.6c3.7 5.2 5.8 11.6 5.8 18.4z" />
    </Icon>
);

export default FaceRollingEyes;