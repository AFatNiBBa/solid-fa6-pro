
import { Icon } from "../../index";

/**
 * A component that renders the `theta` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/theta?s=solid theta}
 * @preview ![theta](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/theta.svg)
 */
const Theta: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 256c0-51 15.9-96 40.2-127.6C128.5 96.9 159.8 80 192 80s63.5 16.9 87.8 48.4C304.1 160 320 205 320 256s-15.9 96-40.2 127.6C255.5 415.1 224.2 432 192 432s-63.5-16.9-87.8-48.4C79.9 352 64 307 64 256zM192 16C135.8 16 87.1 45.7 53.5 89.4C19.9 133.1 0 192.1 0 256s19.9 122.9 53.5 166.6C87.1 466.3 135.8 496 192 496s104.9-29.7 138.5-73.4C364.1 378.9 384 319.9 384 256s-19.9-122.9-53.5-166.6C296.9 45.7 248.2 16 192 16zM128 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-128 0z" />
    </Icon>
);

export default Theta;