
import { Icon } from "../../index";

/**
 * A component that renders the `image-landscape` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-landscape?s=sharp-thin image-landscape}
 * @preview ![image-landscape](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/image-landscape.svg)
 */
const ImageLandscape: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 80l0 352 21.7 0 4.1-5.1 144-176 6.6-8 6.1 8.4 45.6 62.8L345.8 187l6.2-7.8 6.2 7.8 192 240 4 5 5.8 0 0-352L16 80zM58.3 432l91.4 0 4-5 80-100-42.1-57.9L58.3 432zm111.9 0l363.5 0L352 204.8 250.1 332.2 170.2 432zM0 64l16 0 544 0 16 0 0 16 0 352 0 16-16 0L16 448 0 448l0-16L0 80 0 64zM128 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default ImageLandscape;