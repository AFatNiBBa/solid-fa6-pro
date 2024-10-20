
import { Icon } from "../../index";

/**
 * A component that renders the `boot-heeled` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boot-heeled?s=solid boot-heeled}
 * @preview ![boot-heeled](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/boot-heeled.svg)
 */
const BootHeeled: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0L63.3 0C46 0 32 14 32 31.3c0 1.8 .1 3.9 .6 6.2C34.6 47.1 56 154.3 56 232c0 33.2-12.8 93.5-19.7 123.2C33.6 367 32 379.3 32 391.8L32 488c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-15.1 125 34.7c10.5 2.9 21.3 4.4 32.1 4.4L456 512l32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0 0-34.3c0-27.3-15.4-52.2-39.8-64.4L327.8 309.1c-24.4-12.2-39.8-37.1-39.8-64.4L288 24c0-13.3-10.7-24-24-24L160 0l0 240c0 8.8-7.2 16-16 16s-16-7.2-16-16L128 0z" />
    </Icon>
);

export default BootHeeled;