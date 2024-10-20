
import { Icon } from "../../index";

/**
 * A component that renders the `binary-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-lock?s=sharp-thin binary-lock}
 * @preview ![binary-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/binary-lock.svg)
 */
const BinaryLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 0l0 16 8 0 64 0 0 192-64 0-8 0 0 16 8 0 72 0 72 0 8 0 0-16-8 0-64 0L312 8l0-8-8 0L232 0l-8 0zM0 288l0 16 8 0 64 0 0 192L8 496l-8 0 0 16 8 0 72 0 72 0 8 0 0-16-8 0-64 0 0-200 0-8-8 0L8 288l-8 0zM24 0L16 0l0 8 0 208 0 8 8 0 144 0 8 0 0-8L176 8l0-8-8 0L24 0zm8 208L32 16l128 0 0 192L32 208zm176 80l0 8 0 208 0 8 8 0 144 0 8 0 0-8 0-208 0-8-8 0-144 0-8 0zm16 16l128 0 0 192-128 0 0-192zm304-96c26.5 0 48 21.5 48 48l0 64-96 0 0-64c0-26.5 21.5-48 48-48zm-64 48l0 64-32 0-16 0 0 16 0 160 0 16 16 0 192 0 16 0 0-16 0-160 0-16-16 0-32 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-32 80l32 0 16 0 96 0 16 0 32 0 0 160-192 0 0-160z" />
    </Icon>
);

export default BinaryLock;