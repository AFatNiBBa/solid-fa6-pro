
import { Icon } from "../../index";

/**
 * A component that renders the `face-zipper` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-zipper?s=sharp-light face-zipper}
 * @preview ![face-zipper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-zipper.svg)
 */
const FaceZipper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224c0 29.1-5.6 57-15.7 82.5L493 352.9c12.2-29.9 19-62.6 19-96.9C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c34.3 0 67-6.7 96.9-19l-14.4-28.7C313 474.4 285.1 480 256 480C132.3 480 32 379.7 32 256zm144.4-24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm160 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm54.8 105.7l-10.3-5.2-8.2 8.2-32 32-8.2 8.2 5.2 10.3 56 112 4.4 8.8 9.9 0 40 0 6.6 0 4.7-4.7 48-48 4.7-4.7 0-6.6 0-40 0-9.9-8.8-4.4-112-56zm-19.7 49.5l15.7-15.7L480 417.9l0 23.5L441.4 480l-23.5 0-46.4-92.8zM224 320l-32 0 0 16 0 32 0 16 32 0 0-16 0-32 0-16zm64 16l0-16-32 0 0 16 0 32 0 16 32 0 0-16 0-32zM160 320l-32 0 0 16 0 32 0 16 32 0 0-16 0-32 0-16zM448.5 432.5L457 424l-17-17-8.5 8.5-16 16L407 440l17 17 8.5-8.5 16-16z" />
    </Icon>
);

export default FaceZipper;