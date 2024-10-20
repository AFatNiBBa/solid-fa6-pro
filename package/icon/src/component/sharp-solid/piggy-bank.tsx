
import { Icon } from "../../index";

/**
 * A component that renders the `piggy-bank` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/piggy-bank?s=sharp-solid piggy-bank}
 * @preview ![piggy-bank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/piggy-bank.svg)
 */
const PiggyBank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7L256 96c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96l32 0-18.8 75.1c15.8 14.8 28.7 32.8 37.5 52.9l45.3 0 0 160-64 0c-9.1 12.1-19.9 22.9-32 32l0 96-96 0 0-64-128 0 0 64-96 0 0-96c-34.9-26.2-58.7-66.3-63.2-112L68 304c-37.6 0-68-30.4-68-68s30.4-68 68-68l12 0 0 48-12 0c-11 0-20 9-20 20s9 20 20 20l31.2 0c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2l128 0zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default PiggyBank;