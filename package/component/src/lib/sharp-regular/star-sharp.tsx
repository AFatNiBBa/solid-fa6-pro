
import { Icon } from "../../index";

/**
 * A component that renders the `star-sharp` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp?s=sharp-regular star-sharp}
 * @preview ![star-sharp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/star-sharp.svg)
 */
const StarSharp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M351.6 195.6L313.3 77.7 288.1 0 262.8 77.7 224.5 195.6l-124 0-81.7 0 66.1 48 100.3 72.9L146.9 434.3 121.7 512l66.1-48 100.3-72.9L388.3 464l66.1 48-25.2-77.7L390.9 316.4l100.3-72.9 66.1-48-81.7 0-124 0zm57.9 48l-46.8 34-28.2 20.5 10.8 33.2 17.9 55.1-46.8-34-28.2-20.5-28.2 20.5-46.8 34 17.9-55.1 10.8-33.2-28.2-20.5-46.8-34 57.9 0 34.9 0 10.8-33.2 17.9-55.1 17.9 55.1 10.8 33.2 34.9 0 57.9 0z" />
    </Icon>
);

export default StarSharp;