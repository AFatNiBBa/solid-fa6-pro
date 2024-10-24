
import { Icon } from "../../index";

/**
 * A component that renders the `binary` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary?s=sharp-thin binary}
 * @preview ![binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/binary.svg)
 */
const Binary: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M232 0l-8 0 0 16 8 0 64 0 0 192-64 0-8 0 0 16 8 0 72 0 72 0 8 0 0-16-8 0-64 0L312 8l0-8-8 0L232 0zM8 288l-8 0 0 16 8 0 64 0 0 192L8 496l-8 0 0 16 8 0 72 0 72 0 8 0 0-16-8 0-64 0 0-200 0-8-8 0L8 288zM16 0l0 8 0 208 0 8 8 0 144 0 8 0 0-8L176 8l0-8-8 0L24 0 16 0zM32 16l128 0 0 192L32 208 32 16zM216 288l-8 0 0 8 0 208 0 8 8 0 144 0 8 0 0-8 0-208 0-8-8 0-144 0zm8 208l0-192 128 0 0 192-128 0z" />
    </Icon>
);

export default Binary;