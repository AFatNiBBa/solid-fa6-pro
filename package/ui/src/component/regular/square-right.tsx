
import { Icon } from "../../index";

/**
 * A component that renders the `square-right` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-right?s=regular square-right}
 * @preview ![square-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-right.svg)
 */
const SquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 96c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320zM384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM262.6 151.2l84 91c3.5 3.8 5.4 8.7 5.4 13.9s-1.9 10.1-5.4 13.9l-84 91c-4.2 4.6-10.1 7.2-16.4 7.2C234 368 224 358 224 345.7l0-41.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-41.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.4 7.2z" />
    </Icon>
);

export default SquareRight;