
import { Icon } from "../../index";

/**
 * A component that renders the `socks` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/socks?s=sharp-thin socks}
 * @preview ![socks](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/socks.svg)
 */
const Socks: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 104l0-8L144 96l0-80 144 0 0-16L144 0 128 0l0 16 0 80 0 8 0 8 0 160L38.4 339.2 48 352l89.6-67.2L144 280l0-8 0-160 144 0 0-8zM38.4 339.2C14.2 357.3 0 385.8 0 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2l21.6-16.2c-2.6-4.8-4.9-9.8-6.8-14.9L144 480c-13.8 10.4-30.7 16-48 16c-44.2 0-80-35.8-80-80c0-25.2 11.9-48.9 32-64l-9.6-12.8zM336 112l160 0 0 248L336 480c-13.8 10.4-30.7 16-48 16c-44.2 0-80-35.8-80-80c0-25.2 11.9-48.9 32-64l89.6-67.2L336 280l0-8 0-160zM320 272l-89.6 67.2C206.2 357.3 192 385.8 192 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2L512 368l0-256 0-8 0-8 0-80 0-16L496 0 336 0 320 0l0 16 0 80 0 8 0 8 0 160zM336 96l0-80 160 0 0 80L336 96z" />
    </Icon>
);

export default Socks;