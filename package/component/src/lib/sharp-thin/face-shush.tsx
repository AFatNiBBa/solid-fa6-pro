
import { Icon } from "../../index";

/**
 * A component that renders the `face-shush` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-shush?s=sharp-thin face-shush}
 * @preview ![face-shush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-shush.svg)
 */
const FaceShush: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256C16 123.5 123.5 16 256 16s240 107.5 240 240c0 73.5-33.1 139.3-85.2 183.4l10.3 12.2C476.7 404.7 512 334.4 512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 93 49.7 174.5 123.9 219.3l8.3-13.7C62.5 419.6 16 343.2 16 256zm160.4-96a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm160 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM224 247c-26.5-5.6-46-17.7-58.7-29L154.7 230c15 13.4 38.2 27.4 69.3 33.3l0 56.7-48 0-8 0 0 8 0 176 0 8 8 0 144 0 3 0 2.3-2 64-56 6.4-5.6-6-6-32-32-4.8-4.8-5.5 3.9-51.5 36.8L232 403.7l0-19.7 32 0 0 16 0 8 8 0 48 0 8 0 0-8 0-72 0-8-8 0-32 0 0-56.7c31.2-5.9 54.3-19.9 69.3-33.3L346.7 218c-12.6 11.3-32.2 23.3-58.7 29l0-31 0-8-8 0-48 0-8 0 0 8 0 31zm48 73l-32 0 0-96 32 0 0 96zm-88 16l128 0 0 56-32 0 0-16 0-8-8 0-48 0-8 0 0 8 0 32 0 4.3 3.6 2.4 72 48 4.6 3.1 4.5-3.2 50.5-36.1 21.2 21.2L317 496l-133 0 0-160z" />
    </Icon>
);

export default FaceShush;