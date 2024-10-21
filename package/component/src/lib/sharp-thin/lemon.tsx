
import { Icon } from "../../index";

/**
 * A component that renders the `lemon` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lemon?s=sharp-thin lemon}
 * @preview ![lemon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/lemon.svg)
 */
const Lemon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 80l-24.1 72.3c39.8 83.7 9.9 181.4-56.1 247.4s-163.7 96-247.4 56.1L48 480 0 432l24.1-72.3C-15.7 276 14.2 178.2 80.2 112.2s163.7-96 247.4-56.1L400 32l48 48zM115.3 440.7l6.1-2 5.8 2.8c75.9 36.2 166.6 9.7 229.2-53s89.1-153.3 53-229.2l-2.8-5.8 2-6.1 21-63-34-34-63 21-6.1 2-5.8-2.8c-75.9-36.1-166.6-9.7-229.2 53s-89.1 153.3-53 229.2l2.8 5.8-2 6.1-21 63 34 34 63-21zM219.1 119.4l-16.9 7.1c-48.7 20.3-87.4 59-107.7 107.7l-7.1 16.9-3.1 7.4-14.8-6.2 3.1-7.4L79.7 228c21.9-52.6 63.7-94.4 116.3-116.3l16.9-7.1 7.4-3.1 6.2 14.8-7.4 3.1z" />
    </Icon>
);

export default Lemon;