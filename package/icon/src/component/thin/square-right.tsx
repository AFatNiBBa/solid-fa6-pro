
import { Icon } from "../../index";

/**
 * A component that renders the `square-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-right?s=thin square-right}
 * @preview ![square-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-right.svg)
 */
const SquareRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 96c0-26.5-21.5-48-48-48L64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320zM384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM368 256c0 7.2-2.9 14.2-8 19.3L260.3 375c-5.7 5.7-13.5 9-21.7 9c-16.9 0-30.6-13.7-30.6-30.6l0-49.4-88 0c-22.1 0-40-17.9-40-40l0-16c0-22.1 17.9-40 40-40l88 0 0-49.4c0-16.9 13.7-30.6 30.6-30.6c8.1 0 15.9 3.2 21.7 9L360 236.7c5.1 5.1 8 12.1 8 19.3zm-19.3-8L249 148.3c-2.7-2.7-6.5-4.3-10.3-4.3c-8.1 0-14.6 6.5-14.6 14.6l0 57.4c0 4.4-3.6 8-8 8l-96 0c-13.3 0-24 10.7-24 24l0 16c0 13.3 10.7 24 24 24l96 0c4.4 0 8 3.6 8 8l0 57.4c0 8.1 6.5 14.6 14.6 14.6c3.9 0 7.6-1.5 10.3-4.3L348.7 264c2.1-2.1 3.3-5 3.3-8s-1.2-5.9-3.3-8z" />
    </Icon>
);

export default SquareRight;