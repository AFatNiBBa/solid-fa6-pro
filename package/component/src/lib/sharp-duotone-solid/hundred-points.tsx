
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hundred-points` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hundred-points?s=sharp-duotone-solid hundred-points}
 * @preview ![hundred-points](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hundred-points.svg)
 */
const HundredPoints: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M27.5 352.3l9.1 63.4 448-64-9.1-63.4-448 64zm224 64l9.1 63.4 224-32-9.1-63.4-224 32z" />
        <path d="M163 101.8C168 61.9 201.9 32 242 32c47.9 0 85 42 79 89.5L309 218.2c-5 39.8-38.9 69.8-79 69.8c-47.9 0-85-42-79-89.5L163 101.8zM242 96c-7.9 0-14.5 5.9-15.5 13.7l-12.1 96.7c-1.2 9.3 6.1 17.6 15.5 17.6c7.9 0 14.5-5.9 15.5-13.7l12.1-96.7c1.2-9.3-6.1-17.6-15.5-17.6zm106.1 8.6C351.9 63.5 386.4 32 427.7 32c46.9 0 83.7 40.3 79.5 87l-7.3 80.4c-3.7 41.1-38.2 72.6-79.5 72.6c-46.9 0-83.7-40.3-79.5-87l7.3-80.4zM427.7 96c-8.2 0-15 6.2-15.7 14.4l-7.3 80.4c-.8 9.3 6.4 17.2 15.7 17.2c8.2 0 15-6.2 15.7-14.4l7.3-80.4c.8-9.3-6.4-17.2-15.7-17.2zM64.2 116.5l-3.7 1.6L31.2 131.2 6 72.8 35.4 59.7l56-24.9L135.7 68 101.2 309.5l-65.9 9.4 1-6.9L64.2 116.5z" />
    </Icon>
);

export default HundredPoints;