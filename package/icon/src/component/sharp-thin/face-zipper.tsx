
import { Icon } from "../../index";

/**
 * A component that renders the `face-zipper` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-zipper?s=sharp-thin face-zipper}
 * @preview ![face-zipper](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-zipper.svg)
 */
const FaceZipper: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.5 16 16 123.5 16 256s107.5 240 240 240c31.7 0 62-6.1 89.7-17.3l7.2 14.4c-29.9 12.2-62.6 19-96.9 19C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256c0 34.3-6.7 67-19 96.9l-14.4-7.2C489.9 318 496 287.7 496 256C496 123.5 388.5 16 256 16zM160.4 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm160 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm62.2 134.2l5.2 2.8 120 64 4.2 2.3 0 4.8 0 40 0 3.3-2.3 2.3-48 48-2.3 2.3-3.3 0-40 0-4.8 0-2.3-4.2-64-120-2.8-5.2 4.2-4.2 32-32 4.2-4.2zm2.9 19.7l-23.6 23.6 59 110.5 31.9 0L496 452.7l0-31.9-110.5-59zM144 328l0 48 0 8-16 0 0-8 0-48 0-8 16 0 0 8zm64-8l0 8 0 48 0 8-16 0 0-8 0-48 0-8 16 0zm64 8l0 48 0 8-16 0 0-8 0-48 0-8 16 0 0 8zm64-8l0 8 0 24 0 8-16 0 0-8 0-24 0-8 16 0zM461.7 445.7l-16 16-5.7 5.7L428.7 456l5.7-5.7 16-16 5.7-5.7L467.3 440l-5.7 5.7z" />
    </Icon>
);

export default FaceZipper;