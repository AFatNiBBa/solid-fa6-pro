
import { Icon, generic } from "../../index";

/**
 * A component that renders the `piggy-bank` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piggy-bank?s=duotone piggy-bank}
 * @preview ![piggy-bank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/piggy-bank.svg)
 */
const PiggyBank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M208 96c0 13.2 2.7 25.7 7.5 37.2c12.9-3.4 26.5-5.2 40.5-5.2l128 0c1.8 0 3.5 0 5.2 .1s3.5 .1 5.2 .2c3.6-10.1 5.6-21 5.6-32.3c0-53-43-96-96-96s-96 43-96 96z" />
        <path d="M507 115.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9l13.3 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-32 0c-9.1 12.1-19.9 22.9-32 32l0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-128 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64c-34.9-26.2-58.7-66.3-63.2-112L68 304c-37.6 0-68-30.4-68-68s30.4-68 68-68l4 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-4 0c-11 0-20 9-20 20s9 20 20 20l31.2 0C114 183 178.6 128 256 128l128 0c7.8 0 15.5 .6 23 1.6C424.6 109.1 450.8 96 480 96l11.5 0c10.4 0 18 9.8 15.5 19.9zM424 288a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default PiggyBank;