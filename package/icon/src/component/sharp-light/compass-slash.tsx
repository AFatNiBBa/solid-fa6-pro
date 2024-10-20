
import { Icon } from "../../index";

/**
 * A component that renders the `compass-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass-slash?s=sharp-light compass-slash}
 * @preview ![compass-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/compass-slash.svg)
 */
const CompassSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448.8 439.3C412.4 464.9 368 480 320 480C196.3 480 96 379.7 96 256c0-29.3 5.6-57.2 15.8-82.8L85.7 152.6C71.8 184.2 64 219.2 64 256c0 141.4 114.6 256 256 256c58.2 0 111.9-19.4 154.9-52.2l-26.1-20.6zM320 0C261.8 0 208.1 19.4 165.1 52.2l26.1 20.6C227.6 47.1 272 32 320 32c123.7 0 224 100.3 224 224c0 29.3-5.6 57.2-15.8 82.8l26.1 20.6c14-31.6 21.7-66.6 21.7-103.4C576 114.6 461.4 0 320 0zM204.6 346.1L192 384l37.9-12.6 93.4-31.1-30-23.7-50.7 16.9 15-45.1-26.7-21.1-26.3 78.8zm112-174.3l30 23.7 50.7-16.9-15 45.1 26.7 21.1 26.3-78.8L448 128l-37.9 12.6-93.4 31.1zM32.5 10L19.9 .1 .1 25.3l12.6 9.9L607.8 502.2l12.6 9.9 19.8-25.2-12.6-9.9L32.5 10z" />
    </Icon>
);

export default CompassSlash;