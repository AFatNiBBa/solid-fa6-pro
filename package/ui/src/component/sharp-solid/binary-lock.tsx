
import { Icon } from "../../index";

/**
 * A component that renders the `binary-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-lock?s=sharp-solid binary-lock}
 * @preview ![binary-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/binary-lock.svg)
 */
const BinaryLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 0l0 64 32 0 16 0 0 96-16 0-32 0 0 64 32 0 48 0 48 0 32 0 0-64-32 0-16 0 0-128 0-32L304 0 256 0 224 0zM0 288l0 64 32 0 16 0 0 96-16 0L0 448l0 64 32 0 48 0 48 0 32 0 0-64-32 0-16 0 0-128 0-32-32 0-48 0L0 288zM32 0L0 0 0 32 0 192l0 32 32 0 128 0 32 0 0-32 0-160 0-32L160 0 32 0zM64 160l0-96 64 0 0 96-64 0zM192 288l0 32 0 160 0 32 32 0 128 0 32 0 0-32 0-160 0-32-32 0-128 0-32 0zm64 64l64 0 0 96-64 0 0-96zM528 240c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48-32 0 0 192 224 0 0-192-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default BinaryLock;