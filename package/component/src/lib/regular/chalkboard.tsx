
import { Icon } from "../../index";

/**
 * A component that renders the `chalkboard` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chalkboard?s=regular chalkboard}
 * @preview ![chalkboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chalkboard.svg)
 */
const Chalkboard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 88c0-4.4 3.6-8 8-8l400 0c4.4 0 8 3.6 8 8l0 312 48 0 0-312c0-30.9-25.1-56-56-56L88 32C57.1 32 32 57.1 32 88l0 312 48 0L80 88zM224 408l0 24L24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l200 0 24 0 144 0 24 0 136 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-136 0 0-24c0-30.9-25.1-56-56-56l-80 0c-30.9 0-56 25.1-56 56zm144 0l0 24-96 0 0-24c0-4.4 3.6-8 8-8l80 0c4.4 0 8 3.6 8 8z" />
    </Icon>
);

export default Chalkboard;