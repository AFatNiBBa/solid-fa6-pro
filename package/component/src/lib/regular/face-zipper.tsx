
import { Icon } from "../../index";

/**
 * A component that renders the `face-zipper` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-zipper?s=regular face-zipper}
 * @preview ![face-zipper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-zipper.svg)
 */
const FaceZipper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M389.2 394.3l29.1 58.1c14.7 29.3 53.7 35.6 76.9 12.5l1.8-1.8c23.2-23.2 16.8-62.2-12.5-76.9l-58.1-29.1c-6.2-3.1-13.6-1.9-18.5 3l-15.7 15.7c-4.9 4.9-6.1 12.3-3 18.5zm91.3 38.2l-16 16c-4.7 4.7-12.3 4.7-17 0s-4.7-12.3 0-17l16-16c4.7-4.7 12.3-4.7 17 0s4.7 12.3 0 17zM256 48C141.1 48 48 141.1 48 256s93.1 208 208 208c42.5 0 82-12.7 114.9-34.6l18.7 37.3c1 2 2 3.9 3.1 5.7C353.2 497.5 306.3 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256c0 34.9-7 68.1-19.6 98.4l-43.1-21.5c9.5-23.8 14.7-49.7 14.7-76.9c0-114.9-93.1-208-208-208zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM208 320c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16s16 7.2 16 16zm48-16c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 336l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default FaceZipper;