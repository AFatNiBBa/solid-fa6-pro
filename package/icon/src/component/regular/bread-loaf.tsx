
import { Icon } from "../../index";

/**
 * A component that renders the `bread-loaf` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=regular bread-loaf}
 * @preview ![bread-loaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bread-loaf.svg)
 */
const BreadLoaf: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 208c-8.8 0-16-7.2-16-16c0-36.7 23.6-63.9 68.1-84.4C160.5 87.1 213.4 80 240 80s79.5 7.1 123.9 27.6C408.4 128.1 432 155.3 432 192c0 8.8-7.2 16-16 16c-26.5 0-48 21.5-48 48l0 176-48 0-208 0 0-176c0-26.5-21.5-48-48-48zm352 48l112 0 0 176-112 0 0-128 0-48zm155.3-47.8c-1.1-.1-2.2-.2-3.3-.2l-90 0c1.3-5.1 2-10.5 2-16c0-51.1-28-86.9-65.8-111.5c28.7 2 72.2 9.7 109.7 27C568.4 128.1 592 155.3 592 192c0 8.8-7.2 16-16 16c-1.6 0-3.1 .1-4.7 .2zM112 480l208 0 48 0 160 0c26.5 0 48-21.5 48-48l0-128 0-48c35.3 0 64-28.7 64-64C640 64 464 32 400 32L288 32l-48 0C176 32 0 64 0 192c0 35.3 28.7 64 64 64l0 48 0 128c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default BreadLoaf;