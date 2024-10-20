
import { Icon } from "../../index";

/**
 * A component that renders the `square-heart` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-heart?s=regular square-heart}
 * @preview ![square-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-heart.svg)
 */
const SquareHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM335.7 265.6l-91.5 92.9c-5.6 5.7-13 8.5-20.3 8.5c-7.3 0-14.6-2.9-20.1-8.5l-91.5-92.9c-26.4-26.8-26.4-70.4 0-97.2s69.3-26.8 95.8 0l16 16.2 16-16.2c26.4-26.8 69.3-26.8 95.8 0s26.4 70.4 0 97.2z" />
    </Icon>
);

export default SquareHeart;