
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-rays` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-rays?s=sharp-duotone-solid person-rays}
 * @preview ![person-rays](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-rays.svg)
 */
const PersonRays: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96.2 270.8l53.9 34.4 33.8-53L184 480l0 32 64 0 0-32 0-128 16 0 0 128 0 32 64 0 0-32 0-227.8 33.8 53 53.9-34.4L334 142.8 324.6 128l-17.5 0-102.2 0-17.5 0L178 142.8l-81.7 128zM208 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M40 6.1L57 23l64 64 17 17L104 137.9 87 121 23 57 6.1 40 40 6.1zM505.9 40L489 57l-64 64-17 17L374.1 104l17-17 64-64 17-17L505.9 40zm-368 368l-17 17L57 489l-17 17L6.1 472l17-17 64-64 17-17L137.9 408zM408 374.1l17 17 64 64 17 17L472 505.9l-17-17-64-64-17-17L408 374.1z" />
    </Icon>
);

export default PersonRays;