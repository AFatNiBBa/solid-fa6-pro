
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone-flip` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone-flip?s=light circle-phone-flip}
 * @preview ![circle-phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-phone-flip.svg)
 */
const CirclePhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm52.8 144.1c-1.9-.4-3.8 .6-4.5 2.3l-24 56c-.7 1.6-.2 3.5 1.1 4.7l20.3 16.6c6.1 5 7.6 13.6 3.7 20.4c-14.7 25.4-35.9 46.6-61.4 61.4c-6.8 3.9-15.4 2.4-20.4-3.7l-16.6-20.3c-1.1-1.4-3-1.8-4.7-1.1l-56 24c-1.8 .8-2.7 2.6-2.3 4.5l12 56c.4 1.8 2 3.2 3.9 3.2l.2 0c114.7-.1 207.6-93.1 207.7-207.8l0-.2s0 0 0 0s0 0 0 0c0-1.9-1.3-3.5-3.2-3.9l-56-12zM160 400l-.3 0c-16.8-.2-31.3-12-34.9-28.5l-12-56c-3.6-16.8 5.2-33.9 21-40.6l56-24c14.7-6.3 31.9-2.1 42 10.3l7.5 9.2c11.9-8.6 22.4-19.1 31-31l-9.2-7.5c-12.4-10.2-16.6-27.3-10.3-42l24-56c6.8-15.8 23.8-24.6 40.6-21l56 12c16.5 3.5 28.3 18.1 28.5 34.9l0 .3c0 132.5-107.4 240-240 240z" />
    </Icon>
);

export default CirclePhoneFlip;