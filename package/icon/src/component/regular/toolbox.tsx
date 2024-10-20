
import { Icon } from "../../index";

/**
 * A component that renders the `toolbox` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toolbox?s=regular toolbox}
 * @preview ![toolbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/toolbox.svg)
 */
const Toolbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M184 80l144 0c4.4 0 8 3.6 8 8l0 40-160 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-28.1 0c-12.7 0-24.9 5.1-33.9 14.1L14.1 193.9c-9 9-14.1 21.2-14.1 33.9L0 328l0 88c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-88 0-100.1c0-12.7-5.1-24.9-14.1-33.9l-51.9-51.9c-9-9-21.2-14.1-33.9-14.1L384 128l0-40c0-30.9-25.1-56-56-56L184 32c-30.9 0-56 25.1-56 56zM464 304l-96 0 0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-128 0 0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-96 0 0-76.1L99.9 176l312.2 0L464 227.9l0 76.1zM48 352l96 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 128 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 96 0 0 64c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-64z" />
    </Icon>
);

export default Toolbox;