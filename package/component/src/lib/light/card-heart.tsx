
import { Icon } from "../../index";

/**
 * A component that renders the `card-heart` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-heart?s=light card-heart}
 * @preview ![card-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/card-heart.svg)
 */
const CardHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L64 32zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM112 221.3c0 7.8 3.1 15.2 8.6 20.7L192 313.4l71.4-71.4c5.5-5.5 8.6-12.9 8.6-20.7c0-16.2-13.1-29.3-29.3-29.3c-7.8 0-15.2 3.1-20.7 8.6l-18.7 18.7c-6.2 6.2-16.4 6.2-22.6 0l-18.7-18.7c-5.5-5.5-12.9-8.6-20.7-8.6c-16.2 0-29.3 13.1-29.3 29.3zM141.3 160c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0L97.9 264.6C86.5 253.1 80 237.5 80 221.3c0-33.8 27.4-61.3 61.3-61.3z" />
    </Icon>
);

export default CardHeart;