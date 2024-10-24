
import { Icon } from "../../index";

/**
 * A component that renders the `hood-cloak` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hood-cloak?s=sharp-thin hood-cloak}
 * @preview ![hood-cloak](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hood-cloak.svg)
 */
const HoodCloak: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 464l64-80 0-96C64 128 160 0 288 0L457.4 0 480 0 464 16 418.7 61.3 407.2 72.8c4.5 3 8.8 6.2 13 9.6C475.4 126.1 512 196.6 512 288l0 96 64 80 0 32 0 16-16 0L16 512 0 512l0-16 0-32zM288 16C172.5 16 80 132.7 80 288l0 96 0 5.6L76.5 394 16 469.6 16 496l144 0 0-176c0-70.7 57.3-128 128-128s128 57.3 128 128l0 176 144 0 0-26.4L499.5 394l-3.5-4.4 0-5.6 0-96c0-93.5-40.1-162.6-97.8-202l-16-10.9 13.7-13.7L441.4 16 288 16zM176 496l224 0 0-176c0-61.9-50.1-112-112-112s-112 50.1-112 112l0 176z" />
    </Icon>
);

export default HoodCloak;