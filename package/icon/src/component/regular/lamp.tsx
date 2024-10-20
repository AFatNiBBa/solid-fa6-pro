
import { Icon } from "../../index";

/**
 * A component that renders the `lamp` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp?s=regular lamp}
 * @preview ![lamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/lamp.svg)
 */
const Lamp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M2.5 211.7l80-192C87.4 7.8 99.1 0 112 0L336 0c12.9 0 24.6 7.8 29.5 19.7l80 192c4.1 9.9 3 21.2-2.9 30.1s-15.9 14.2-26.6 14.2L32 256c-10.7 0-20.7-5.3-26.6-14.2s-7-20.2-2.9-30.1zM56 208l336 0L325.3 48 122.7 48 56 208zm88 105.4l0-25.4 48 0 0 25.4c0 17-6.7 32-16.2 42.9C165.7 368 144 398.1 144 432c0 12.2 3.7 23.1 8.4 31.9c.6 .1 1.3 .1 2.1 .1l139 0c.8 0 1.5-.1 2.1-.1c4.6-8.8 8.4-19.7 8.4-31.9c0-32.3-22.1-63.8-32.6-76.4c-9.2-10.9-15.4-25.6-15.4-42l0-25.6 48 0 0 25.6c0 4.1 1.6 8 4.2 11.2c11.7 14 43.8 56.9 43.8 107.2c0 24.4-8.3 44.6-16.4 58.7c-8.5 14.7-25.2 21.3-42.1 21.3l-139 0c-17 0-33.6-6.6-42.1-21.3C104.3 476.6 96 456.4 96 432c0-51.9 31.6-93.4 43.5-107.1c2.8-3.2 4.5-7.3 4.5-11.5z" />
    </Icon>
);

export default Lamp;