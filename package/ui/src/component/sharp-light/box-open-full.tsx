
import { Icon } from "../../index";

/**
 * A component that renders the `box-open-full` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-open-full?s=sharp-light box-open-full}
 * @preview ![box-open-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/box-open-full.svg)
 */
const BoxOpenFull: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 32c53 0 96 43 96 96l0 16 32 0 0-16C384 57.3 326.7 0 256 0S128 57.3 128 128l0 16 32 0 0-16c0-53 43-96 96-96zM76.6 160.1l-11.9-1.4-4.7 11-48 112L4.5 299.1l18.4 4.4 200 48 10.5 2.5 6.3-8.8L320 232.9l80.3 112.4 6.3 8.8 10.5-2.5 200-48 18.4-4.4L628 281.7l-48-112-4.7-11-11.9 1.4L320 189.2 76.6 160.1zM48.8 276.9l35.8-83.6L291.3 218l-71.4 99.9L48.8 276.9zM544 348.7l0 74.3L336 475l0-139 0-16-32 0 0 16 0 139L96 423l0-74.3-32-9.1L64 448l256 64 256-64 0-108.4-32 9.1zm11.3-155.4l35.8 83.6L420.1 317.9 348.7 218l206.6-24.7zM495.2 37.1l5.1-15.2L469.9 11.8l-5.1 15.2-32 96-5.1 15.2 30.4 10.1 5.1-15.2 32-96z" />
    </Icon>
);

export default BoxOpenFull;