
import { Icon } from "../../index";

/**
 * A component that renders the `pear` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pear?s=sharp-thin pear}
 * @preview ![pear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pear.svg)
 */
const Pear: typeof Icon = x => (
    <Icon {...x}>
        <path d="M510.5 12.8l-5.7 5.7L448 75.3c44.4 50.3 42.6 127.1-5.5 175.2l-58.8 58.8c.2 3.5 .3 7.1 .3 10.7c0 106-86 192-192 192S0 426 0 320S86 128 192 128c3.6 0 7.2 .1 10.7 .3l58.8-58.8C309.6 21.4 386.4 19.6 436.7 64L493.5 7.1l5.7-5.7 11.3 11.3zM402.3 98.3l23-23c-44-38.2-110.7-36.4-152.5 5.5L214 139.6l-5.1 5.1-7.1-.4c-3.2-.2-6.5-.3-9.8-.3C94.8 144 16 222.8 16 320s78.8 176 176 176s176-78.8 176-176c0-3.3-.1-6.6-.3-9.8l-.4-7.1 5.1-5.1 58.8-58.8c41.8-41.8 43.7-108.5 5.5-152.5l-23 23-5.7 5.7L396.7 104l5.7-5.7zM304 328c0 57.4-46.6 104-104 104l-8 0 0-16 8 0c48.6 0 88-39.4 88-88l0-8 16 0 0 8z" />
    </Icon>
);

export default Pear;