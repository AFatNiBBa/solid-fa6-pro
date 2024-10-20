
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-dot` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=solid envelope-dot}
 * @preview ![envelope-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/envelope-dot.svg)
 */
const EnvelopeDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M496 0a80 80 0 1 1 0 160A80 80 0 1 1 496 0zM48 64l337.1 0c-.7 5.2-1.1 10.6-1.1 16c0 45.6 27.2 84.8 66.3 102.3L275.2 313.6c-11.4 8.5-27 8.5-38.4 0L19.2 150.4C7.1 141.3 0 127.1 0 112C0 85.5 21.5 64 48 64zM294.4 339.2L490.8 191.9c1.7 .1 3.4 .1 5.2 .1c5.4 0 10.8-.4 16-1.1L512 384c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 176 217.6 339.2c22.8 17.1 54 17.1 76.8 0z" />
    </Icon>
);

export default EnvelopeDot;