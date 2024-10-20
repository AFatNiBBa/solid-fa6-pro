
import { Icon } from "../../index";

/**
 * A component that renders the `signal-slash` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-slash?s=sharp-thin signal-slash}
 * @preview ![signal-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/signal-slash.svg)
 */
const SignalSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M584 8l0-8L568 0l0 8 0 352.1 16 12.6L584 8zM456 455.1l-16-12.6 0 61.5 0 8 16 0 0-8 0-48.9zM328 354l-16-12.6L312 504l0 8 16 0 0-8 0-150zM440 104l0 155 16 12.6L456 104l0-8-16 0 0 8zM200 288l-16 0 0 8 0 208 0 8 16 0 0-8 0-208 0-8zM72 384l-16 0 0 8 0 112 0 8 16 0 0-8 0-112 0-8zM16.2 5L9.9 0 0 12.5l6.3 5L623.8 507l6.3 5 9.9-12.5-6.3-5L16.2 5z" />
    </Icon>
);

export default SignalSlash;