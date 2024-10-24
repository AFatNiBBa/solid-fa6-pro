
import { Icon, generic } from "../../index";

/**
 * A component that renders the `theta` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/theta?s=sharp-duotone-solid theta}
 * @preview ![theta](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/theta.svg)
 */
const Theta: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M96 224l32 0 128 0 32 0 0 64-32 0-128 0-32 0 0-64z" />
        <path d="M104.2 128.4C79.9 160 64 205 64 256s15.9 96 40.2 127.6C128.5 415.1 159.8 432 192 432s63.5-16.9 87.8-48.4C304.1 352 320 307 320 256s-15.9-96-40.2-127.6C255.5 96.9 224.2 80 192 80s-63.5 16.9-87.8 48.4zm-50.7-39C87.1 45.7 135.8 16 192 16s104.9 29.7 138.5 73.4C364.1 133.1 384 192.1 384 256s-19.9 122.9-53.5 166.6C296.9 466.3 248.2 496 192 496s-104.9-29.7-138.5-73.4C19.9 378.9 0 319.9 0 256S19.9 133.1 53.5 89.4z" />
    </Icon>
);

export default Theta;