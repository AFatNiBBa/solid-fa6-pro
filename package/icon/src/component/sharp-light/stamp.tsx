
import { Icon } from "../../index";

/**
 * A component that renders the `stamp` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stamp?s=sharp-light stamp}
 * @preview ![stamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/stamp.svg)
 */
const Stamp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 138.3l-8 9.1 0 12.1 0 96.5 0 32 32 0 88 0c35.3 0 64 28.7 64 64l0 32L32 384l0-32c0-35.3 28.7-64 64-64l88 0 32 0 0-32 0-96.5 0-12.1-8-9.1C198 127 192 112.3 192 96c0-35.3 28.7-64 64-64s64 28.7 64 64c0 16.3-6 31-16 42.3zM512 416l0-32 0-32c0-53-43-96-96-96l-56 0-32 0 0-32 0-64.5c14.9-16.9 24-39.2 24-63.5c0-53-43-96-96-96s-96 43-96 96c0 24.3 9.1 46.6 24 63.5l0 64.5 0 32-32 0-56 0c-53 0-96 43-96 96l0 32 0 32 32 0 448 0 32 0zM64 456l0-16-32 0 0 16 0 40 0 16 16 0 416 0 16 0 0-16 0-40 0-16-32 0 0 16 0 24L64 480l0-24z" />
    </Icon>
);

export default Stamp;