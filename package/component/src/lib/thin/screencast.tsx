
import { Icon } from "../../index";

/**
 * A component that renders the `screencast` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/screencast?s=thin screencast}
 * @preview ![screencast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/screencast.svg)
 */
const Screencast: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48L64 48C37.5 48 16 69.5 16 96l0 96L0 192 0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-224 0 0-16 224 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48zM8 224c137 0 248 111 248 248c0 4.4-3.6 8-8 8s-8-3.6-8-8C240 343.9 136.1 240 8 240c-4.4 0-8-3.6-8-8s3.6-8 8-8zM48 448a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM0 448a32 32 0 1 1 64 0A32 32 0 1 1 0 448zM0 328c0-4.4 3.6-8 8-8c83.9 0 152 68.1 152 152c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-75.1-60.9-136-136-136c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Screencast;