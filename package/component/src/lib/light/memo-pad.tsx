
import { Icon } from "../../index";

/**
 * A component that renders the `memo-pad` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-pad?s=light memo-pad}
 * @preview ![memo-pad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/memo-pad.svg)
 */
const MemoPad: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 128l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320L32 128zm0-32l384 0 0-32c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64l0 32zM448 64l0 32 0 16 0 16 0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128l0-16L0 96 0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64zM112 192l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 96l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default MemoPad;