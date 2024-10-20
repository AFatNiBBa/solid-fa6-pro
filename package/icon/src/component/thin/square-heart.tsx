
import { Icon } from "../../index";

/**
 * A component that renders the `square-heart` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-heart?s=thin square-heart}
 * @preview ![square-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-heart.svg)
 */
const SquareHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 78.9l17.7-18c29.4-29.8 77-29.8 106.4 0s29.4 78.2 0 108L246.5 368.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L99.9 264.9c-29.4-29.8-29.4-78.2 0-108s77-29.8 106.4 0l17.7 18zm5.7 17c-3.1 3.2-8.3 3.2-11.4 0l-23.4-23.8c-23.1-23.5-60.5-23.5-83.6 0c-23.2 23.6-23.2 61.9 0 85.5L212.9 356.9c3.1 3.1 7.1 4.7 11.1 4.7s8-1.5 11.1-4.7L336.7 253.7c23.2-23.6 23.2-61.9 0-85.5c-23.1-23.5-60.5-23.5-83.6 0l-23.4 23.8z" />
    </Icon>
);

export default SquareHeart;