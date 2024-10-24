
import { Icon } from "../../index";

/**
 * A component that renders the `thumbs-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbs-up?s=sharp-regular thumbs-up}
 * @preview ![thumbs-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/thumbs-up.svg)
 */
const ThumbsUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l24 0 96 0 24 0 0 24 0 33c0 30.3-5.9 59.8-16.9 87l96.9 0 40 0 24 0 0 24 0 80 0 24-16 0 0 40 0 24-24 0 0 40 0 24-24 0 0 24 0 24-24 0-40 0-112 0-12.1 0-7.3 0-6-4-10.1-6.7-76.5-51 0-57.7 103.1 68.8 4 2.7 4.8 0 112 0 16 0 0-24 0-24 24 0 0-40 0-24 24 0 0-40 0-24 16 0 0-32-16 0-136.1 0-43.5 0 23.2-36.8C309.8 158.3 320 124.4 320 89l0-9-48 0 0 9c0 49.8-27.2 95.6-70.9 119.4l-4.6 2.5-18.6 10.1-5.4 2.9-6.1 0-2.4 0-4 0 0-48 .3 0 13.2-7.2 4.6-2.5C206.4 150.9 224 121.2 224 89l0-33 0-24zM128 192l0 288L0 480 0 192l128 0z" />
    </Icon>
);

export default ThumbsUp;