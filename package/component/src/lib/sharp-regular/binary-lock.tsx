
import { Icon } from "../../index";

/**
 * A component that renders the `binary-lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-lock?s=sharp-regular binary-lock}
 * @preview ![binary-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/binary-lock.svg)
 */
const BinaryLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 0l0 48 24 0 32 0 0 128-32 0-24 0 0 48 24 0 56 0 56 0 24 0 0-48-24 0-32 0 0-152 0-24L304 0 248 0 224 0zM0 288l0 48 24 0 32 0 0 128-32 0L0 464l0 48 24 0 56 0 56 0 24 0 0-48-24 0-32 0 0-152 0-24-24 0-56 0L0 288zM24 0L0 0 0 24 0 200l0 24 24 0 144 0 24 0 0-24 0-176 0-24L168 0 24 0zM48 176L48 48l96 0 0 128-96 0zM192 288l0 24 0 176 0 24 24 0 144 0 24 0 0-24 0-176 0-24-24 0-144 0-24 0zm48 48l96 0 0 128-96 0 0-128zm288-96c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48-32 0 0 192 224 0 0-192-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default BinaryLock;