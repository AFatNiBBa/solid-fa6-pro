
import { Icon } from "../../index";

/**
 * A component that renders the `wand` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wand?s=regular wand}
 * @preview ![wand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/wand.svg)
 */
const Wand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M459.1 48c-1.2 0-2.4 .4-3.3 1.3L52.4 414.7c-2.8 2.5-4.4 6.1-4.4 9.9c0 3.5 1.4 6.9 3.9 9.4L78 460.1c2.5 2.5 5.9 3.9 9.4 3.9c3.8 0 7.3-1.6 9.9-4.4L462.7 56.1c.8-.9 1.3-2.1 1.3-3.3c0-2.7-2.2-4.9-4.9-4.9zM423.6 13.7C433.4 4.9 446 0 459.1 0C488.3 0 512 23.7 512 52.9c0 13.1-4.9 25.8-13.7 35.5l-46.2 51c-2.7 2.9-4.1 6.8-4.1 10.7l0 25.9c0 8.8-7.2 16-16 16l-20.4 0c-4.5 0-8.8 1.9-11.9 5.3L132.9 491.8C121.3 504.7 104.8 512 87.5 512c-16.3 0-31.9-6.5-43.4-18L18 467.9C6.5 456.4 0 440.8 0 424.5c0-17.3 7.3-33.8 20.2-45.4l70.6-63.9c3.3-3 5.3-7.3 5.3-11.9L96 272c0-8.8 7.2-16 16-16l37.9 0c4 0 7.8-1.5 10.7-4.1l263-238.2z" />
    </Icon>
);

export default Wand;