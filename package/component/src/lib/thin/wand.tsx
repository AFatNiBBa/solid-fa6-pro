
import { Icon } from "../../index";

/**
 * A component that renders the `wand` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand?s=thin wand}
 * @preview ![wand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/wand.svg)
 */
const Wand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M469.8 6.2c4.6-4 10.6-6.2 16.7-6.2C500.6 0 512 11.4 512 25.5l0 .4c0 5.7-1.9 11.3-5.4 15.8l-74.6 97 0 29.3c0 13.3-10.7 24-24 24l-28.4 0L105 497c-8.6 9.5-20.8 15-33.6 15c-12 0-23.5-4.8-32-13.2L13.3 472.6C4.8 464.1 0 452.6 0 440.5c0-12.8 5.4-25 14.9-33.6L112 318.7l0-38.7c0-13.3 10.7-24 24-24l45 0L469.8 6.2zM486.5 16c-2.3 0-4.5 .8-6.2 2.3L189.2 270.1c-1.5 1.3-3.3 1.9-5.2 1.9l-48 0c-4.4 0-8 3.6-8 8l0 42.3c0 2.3-1 4.4-2.6 5.9L25.6 418.8c-6.1 5.6-9.6 13.4-9.6 21.7c0 7.8 3.1 15.2 8.6 20.7l26.2 26.2c5.5 5.5 12.9 8.6 20.7 8.6c8.3 0 16.2-3.5 21.7-9.7L370.1 178.6c1.5-1.7 3.7-2.6 5.9-2.6l32 0c4.4 0 8-3.6 8-8l0-32c0-1.8 .6-3.5 1.7-4.9L493.9 32c1.3-1.7 2.1-3.9 2.1-6l0-.4c0-5.2-4.2-9.5-9.5-9.5z" />
    </Icon>
);

export default Wand;