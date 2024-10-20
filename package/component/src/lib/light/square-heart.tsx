
import { Icon } from "../../index";

/**
 * A component that renders the `square-heart` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-heart?s=light square-heart}
 * @preview ![square-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-heart.svg)
 */
const SquareHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm99.9 68.9c27.8-28.2 71.9-29.7 101.5-4.6c5.8 4.9 11 10.4 16.3 15.9c2.1 2.2 4.2 4.5 6.4 6.6c2.1-2.2 4.3-4.4 6.4-6.6c5.2-5.5 10.5-11 16.3-15.9c29.6-25.1 73.7-23.6 101.5 4.6c29.4 29.8 29.4 78.2 0 108L246.5 376.1c-6.2 6.3-14.3 9.4-22.5 9.4s-16.3-3.1-22.5-9.4L99.9 272.9c-29.4-29.8-29.4-78.2 0-108zm83.6 22.5c-16.8-17.1-44-17.1-60.8 0c-17.1 17.4-17.1 45.7 0 63.1L224 353.3 325.3 250.4c17.1-17.4 17.1-45.7 0-63.1c-16.8-17.1-44-17.1-60.8 0l-29.1 29.6c-6.3 6.4-16.5 6.4-22.8 0l-29.1-29.6z" />
    </Icon>
);

export default SquareHeart;