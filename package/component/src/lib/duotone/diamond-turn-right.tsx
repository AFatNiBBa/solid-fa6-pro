
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diamond-turn-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-turn-right?s=duotone diamond-turn-right}
 * @preview ![diamond-turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diamond-turn-right.svg)
 */
const DiamondTurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256c0 10.2 3.9 20.5 11.7 28.3l216 216c15.6 15.6 40.9 15.6 56.6 0l216-216c15.6-15.6 15.6-40.9 0-56.6l-216-216C276.5 3.9 266.2 0 256 0s-20.5 3.9-28.3 11.7l-216 216C3.9 235.5 0 245.8 0 256zm160 24c0-35.3 28.7-64 64-64l64 0 0-56c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l80 80c6.2 6.2 6.2 16.4 0 22.6l-80 80c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8l0-56-64 0c-8.8 0-16 7.2-16 16l0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48z" />
        <path d="M297.9 145.2c6-2.5 12.9-1.1 17.4 3.5l80 80c6.2 6.2 6.2 16.4 0 22.6l-80 80c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8l0-56-64 0c-8.8 0-16 7.2-16 16l0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48c0-35.3 28.7-64 64-64l64 0 0-56c0-6.5 3.9-12.3 9.9-14.8z" />
    </Icon>
);

export default DiamondTurnRight;