
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-minus` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-minus?s=duotone shield-minus}
 * @preview ![shield-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shield-minus.svg)
 */
const ShieldMinus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 139.7c.5 99.5 41.3 281 213.6 363.5c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c0-26.4-16.4-47.9-38.3-57.2L269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8C32.4 92.1 16 113.6 16 139.7zM160 256c0-13.3 10.7-24 24-24l144 0c6.6 0 12.6 2.7 17 7c2.2 2.2 3.9 4.8 5.1 7.6c.6 1.4 1.1 2.9 1.4 4.5c.2 .8 .3 1.6 .4 2.4s.1 1.5 .1 2l0 .4 0 .4c0 .5 0 1.3-.1 2.1c-.1 .8-.2 1.6-.4 2.4c-.3 1.5-.8 3-1.4 4.5c-1.2 2.9-3 5.4-5.1 7.6c-4.3 4.3-10.3 7-17 7l-144 0c-13.3 0-24-10.7-24-24z" />
        <path d="M160 256c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default ShieldMinus;