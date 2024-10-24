
import { Icon } from "../../index";

/**
 * A component that renders the `binary-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-slash?s=sharp-thin binary-slash}
 * @preview ![binary-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/binary-slash.svg)
 */
const BinarySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 224l72 0 8 0 0-16-8 0-64 0L440 8l0-8-8 0L360 0l-8 0 0 16 8 0 64 0 0 192-48.6 0 20.3 16 36.3 0zM304 8l0-8-8 0L152 0l-8 0 0 8 0 17.3L160 38l0-22 128 0 0 123 16 12.6L304 8zm32 496l0 8 8 0 144 0 8 0 0-8 0-17.3L480 474l0 22-128 0 0-123-16-12.6L336 504zM136 288l-8 0 0 16 8 0 64 0 0 192-64 0-8 0 0 16 8 0 72 0 72 0 8 0 0-16-8 0-64 0 0-200 0-8-8 0-72 0zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default BinarySlash;