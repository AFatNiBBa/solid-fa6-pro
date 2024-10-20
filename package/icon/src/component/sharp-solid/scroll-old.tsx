
import { Icon } from "../../index";

/**
 * A component that renders the `scroll-old` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scroll-old?s=sharp-solid scroll-old}
 * @preview ![scroll-old](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/scroll-old.svg)
 */
const ScrollOld: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 32c26.5 0 48 21.5 48 48l0 80-48 0L0 160 0 80C0 53.5 21.5 32 48 32zm80 48c0-18-6-34.6-16-48l272 0c53 0 96 43 96 96l-32 32 32 32 0 16 0 16-32 32 32 32 0 16 0 16-208 0-16 0 0 16 0 48c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-112 0-16 32-32-32-32 0-16 0-96zM576 368c0 61.9-50.1 112-112 112l-96 0-176 0c53 0 96-43 96-96l0-32 48 0 16 0 32 32 32-32 16 0 144 0 0 16z" />
    </Icon>
);

export default ScrollOld;