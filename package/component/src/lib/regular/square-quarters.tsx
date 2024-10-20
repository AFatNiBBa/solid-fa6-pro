
import { Icon } from "../../index";

/**
 * A component that renders the `square-quarters` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-quarters?s=regular square-quarters}
 * @preview ![square-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-quarters.svg)
 */
const SquareQuarters: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M52.7 84.7L224 256 395.3 84.7c-2.9-2.9-6.9-4.7-11.3-4.7L64 80c-4.4 0-8.4 1.8-11.3 4.7zm0 342.6c2.9 2.9 6.9 4.7 11.3 4.7l320 0c4.4 0 8.4-1.8 11.3-4.7L224 256 52.7 427.3zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z" />
    </Icon>
);

export default SquareQuarters;