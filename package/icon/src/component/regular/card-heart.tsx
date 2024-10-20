
import { Icon } from "../../index";

/**
 * A component that renders the `card-heart` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/card-heart?s=regular card-heart}
 * @preview ![card-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/card-heart.svg)
 */
const CardHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM80 221.3c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0L97.9 264.6C86.5 253.1 80 237.5 80 221.3z" />
    </Icon>
);

export default CardHeart;