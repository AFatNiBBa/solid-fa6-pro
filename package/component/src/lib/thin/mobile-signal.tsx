
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-signal` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal?s=thin mobile-signal}
 * @preview ![mobile-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mobile-signal.svg)
 */
const MobileSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 16l192 0c26.5 0 48 21.5 48 48l0 208.1c5.2-3.7 10.5-7.2 16-10.4L352 64c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l128 0 0-16L96 496c-26.5 0-48-21.5-48-48L48 64c0-26.5 21.5-48 48-48zm48 416c-4.4 0-8 3.6-8 8s3.6 8 8 8l83 0c.8-5.4 1.8-10.7 2.9-16l-86 0zM504 256c-137 0-248 111-248 248c0 4.4 3.6 8 8 8s8-3.6 8-8c0-128.1 103.9-232 232-232c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-8 224a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-48 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-120c0-4.4-3.6-8-8-8c-83.9 0-152 68.1-152 152c0 4.4 3.6 8 8 8s8-3.6 8-8c0-75.1 60.9-136 136-136c4.4 0 8-3.6 8-8z" />
    </Icon>
);

export default MobileSignal;