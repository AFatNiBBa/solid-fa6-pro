
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-harassing` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-harassing?s=sharp-duotone-solid person-harassing}
 * @preview ![person-harassing](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-harassing.svg)
 */
const PersonHarassing: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M307.9 471l54.3 33.9 17-27.1 26.7-42.7 57.6 57.6c12.4 12.4 29.1 19.3 46.6 19.3c36.4 0 65.9-29.5 65.9-65.9L576 320l0-32-32 0-32 0-13.3 0-9.4 9.4-16 16-9.4 9.4 0 13.3 0 66.7-41.4-41.4L372.9 367l-48 76.8-17 27.1zM384 240a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM88 256.9L59.4 304.5l-54.9-33 76.9-128L90.8 128l18.1 0 102.2 0 15.1 0 9.6 11.6 105.7 128-49.3 40.8L232 235.6 232 480l0 32-64 0 0-32 0-128-16 0 0 128 0 32-64 0 0-32 0-223.1zM288 32l16 0 56 0 16 0 0 32-16 0-56 0-16 0 0-32zm-.8 65.7l48 24 14.3 7.2-14.3 28.6-14.3-7.2-48-24-14.3-7.2 14.3-28.6 14.3 7.2z" />
    </Icon>
);

export default PersonHarassing;