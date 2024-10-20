
import { Icon, generic } from "../../index";

/**
 * A component that renders the `triangle-person-digging` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle-person-digging?s=sharp-duotone-solid triangle-person-digging}
 * @preview ![triangle-person-digging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/triangle-person-digging.svg)
 */
const TrianglePersonDigging: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 480l512 0L320 32 64 480zm119.1-64l2.6-5.1 43.7-87.7c2.6-5.3 5.2-10.5 7.9-15.8c5 3.1 10 6.2 14.9 9.3c20.1 12.6 40.2 25.1 60.3 37.7l7.5 4.7 0 8.9 0 32 0 16-16 0-16 0 0-16 0-23.1c-12.6-7.9-25.3-15.8-37.9-23.7c-10.4 20.9-20.8 41.9-31.3 62.8l-35.7 0zm58.3-146.9c3.1-4.7 6.2-9.3 9.3-14c5.3-8 10.7-16 16-24c2.4-3.6 4.8-7.2 7.2-10.8c4 1.6 8 3.2 12.1 4.8c13.3 5.3 26.7 10.7 40 16c1.9 .8 3.8 1.5 5.6 2.3c.9 1.8 1.8 3.6 2.7 5.4c9.2 18.4 18.4 36.8 27.6 55.3c17.4 10.4 34.8 20.9 52.1 31.3c6-10.5 12-20.9 17.9-31.4c21.3 37.3 42.7 74.7 64 112l-128 0 30.2-52.8-56.7-34c-28.6-17.1-57.1-34.3-85.7-51.4c-4.8-2.9-9.6-5.8-14.4-8.6zM336 184a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M288 184a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-14.1 36.3l12.1 4.8 40 16 5.6 2.3 2.7 5.4 27.6 55.3 52.1 31.3L432 304l64 112-128 0 30.2-52.8-56.7-34-85.7-51.4-14.4-8.6 9.3-14 16-24 7.2-10.8zm-36.7 87.1l14.9 9.3 60.3 37.7 7.5 4.7 0 8.9 0 32 0 16-16 0-16 0 0-16 0-23.1-37.9-23.7L218.9 416l-35.7 0 2.6-5.1 43.7-87.7 7.9-15.8z" />
    </Icon>
);

export default TrianglePersonDigging;