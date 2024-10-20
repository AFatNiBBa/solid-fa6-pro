
import { Icon } from "../../index";

/**
 * A component that renders the `clock-rotate-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-rotate-left?s=thin clock-rotate-left}
 * @preview ![clock-rotate-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock-rotate-left.svg)
 */
const ClockRotateLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 166.7L16 56c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 184c0 4.4 3.6 8 8 8l128 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L29.7 176C62.6 82.8 151.5 16 256 16c132.5 0 240 107.5 240 240s-107.5 240-240 240c-73.5 0-139.3-33.1-183.4-85.2c-2.9-3.4-7.9-3.8-11.3-.9s-3.8 7.9-.9 11.3C107.3 476.7 177.6 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C146 0 52.2 69.4 16 166.7zM256 128c-4.4 0-8 3.6-8 8l0 120c0 2.1 .8 4.2 2.3 5.7l88 88c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L264 252.7 264 136c0-4.4-3.6-8-8-8z" />
    </Icon>
);

export default ClockRotateLeft;