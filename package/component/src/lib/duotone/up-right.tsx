
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right?s=duotone up-right}
 * @preview ![up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/up-right.svg)
 */
const UpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 368c0 10.2 4.1 20.1 11.3 27.3l41.4 41.4C59.9 443.9 69.8 448 80 448s20.1-4.1 27.3-11.3L241.4 302.6c-32-32-64-64-96-96L11.3 340.7C4.1 347.9 0 357.8 0 368z" />
        <path d="M336 80H96c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l240 240c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V112c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default UpRight;