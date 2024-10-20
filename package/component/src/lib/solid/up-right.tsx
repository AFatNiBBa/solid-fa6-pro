
import { Icon } from "../../index";

/**
 * A component that renders the `up-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right?s=solid up-right}
 * @preview ![up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/up-right.svg)
 */
const UpRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 80L96 80c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l72 72L11.3 340.7C4.1 347.9 0 357.8 0 368s4.1 20.1 11.3 27.3l41.4 41.4C59.9 443.9 69.8 448 80 448s20.1-4.1 27.3-11.3L241.4 302.6l72 72c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-240c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default UpRight;