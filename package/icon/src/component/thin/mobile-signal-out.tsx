
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-signal-out` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal-out?s=thin mobile-signal-out}
 * @preview ![mobile-signal-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mobile-signal-out.svg)
 */
const MobileSignalOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 16l128 0 0-16L96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-160-16 0 0 160c0 26.5-21.5 48-48 48L96 496c-26.5 0-48-21.5-48-48L48 64c0-26.5 21.5-48 48-48zm48 416c-4.4 0-8 3.6-8 8s3.6 8 8 8l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-96 0zM264 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c128.1 0 232 103.9 232 232c0 4.4 3.6 8 8 8s8-3.6 8-8C512 111 401 0 264 0zm8 224a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 104c0 4.4 3.6 8 8 8c75.1 0 136 60.9 136 136c0 4.4 3.6 8 8 8s8-3.6 8-8c0-83.9-68.1-152-152-152c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default MobileSignalOut;