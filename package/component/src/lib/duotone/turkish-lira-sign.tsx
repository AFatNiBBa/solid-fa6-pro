
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turkish-lira-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turkish-lira-sign?s=duotone turkish-lira-sign}
 * @preview ![turkish-lira-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/turkish-lira-sign.svg)
 */
const TurkishLiraSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M1.2 168.8c4.9 17 22.6 26.8 39.6 22L64 184.1l0-66.6L23.2 129.2c-17 4.9-26.8 22.6-22 39.6zm0 96C5.2 278.8 18.1 288 32 288c2.9 0 5.9-.4 8.8-1.2L64 280.1l0-66.6L23.2 225.2c-17 4.9-26.8 22.6-22 39.6zM128 99.3l0 66.6 136.8-39.1c14.1-4 23.2-16.8 23.2-30.8c0-2.9-.4-5.9-1.2-8.8C282.8 73.2 269.9 64 256 64c-2.9 0-5.9 .4-8.8 1.2L128 99.3zm0 96l0 66.6 136.8-39.1c14.1-4 23.2-16.8 23.2-30.8c0-2.9-.4-5.9-1.2-8.8c-4.9-17-22.6-26.8-39.6-22L128 195.3z" />
        <path d="M96 32c17.7 0 32 14.3 32 32l0 352 63.8 0c68.2 0 124.4-53.5 127.8-121.6l.4-8c.9-17.7 15.9-31.2 33.6-30.4s31.2 15.9 30.4 33.6l-.4 8C378.5 399.8 294.1 480 191.8 480L96 480c-17.7 0-32-14.3-32-32L64 64c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default TurkishLiraSign;