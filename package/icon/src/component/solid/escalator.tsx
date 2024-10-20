
import { Icon } from "../../index";

/**
 * A component that renders the `escalator` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/escalator?s=solid escalator}
 * @preview ![escalator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/escalator.svg)
 */
const Escalator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM405.9 175.8C417.5 165.6 432.5 160 448 160l96 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-72 0L234.1 496.2C222.5 506.4 207.5 512 192 512l-96 0c-35.3 0-64-28.7-64-64s28.7-64 64-64l72 0L405.9 175.8zM320 192l0 16.4-128 112L192 192c0-35.3 28.7-64 64-64s64 28.7 64 64z" />
    </Icon>
);

export default Escalator;