
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-harassing` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-harassing?s=duotone person-harassing}
 * @preview ![person-harassing](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-harassing.svg)
 */
const PersonHarassing: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M320 480c0 11.7 6.5 23 17.7 28.6c4.6 2.3 9.5 3.4 14.3 3.4c11.7 0 23-6.5 28.6-17.7L408.8 438l54.7 54.7c12.4 12.4 29.1 19.3 46.6 19.3c36.4 0 65.9-29.5 65.9-65.9L576 344c0-30.9-25.1-56-56-56s-56 25.1-56 56l0 58.7-41.4-41.4c-7.3-7.3-17.6-10.6-27.8-9s-18.9 8.1-23.5 17.3l-48 96c-2.3 4.6-3.4 9.5-3.4 14.3zm64-240a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M144 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM88 256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6l35.9 0c28.6 0 55.6 12.7 73.9 34.7l73.7 88.9c11.3 13.6 9.4 33.8-4.2 45.1s-33.8 9.4-45.1-4.2L232 235.3 232 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128-16 0 0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-223.1zM288 48c0-8.8 7.2-16 16-16l56 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-56 0c-8.8 0-16-7.2-16-16zm-.8 49.7l48 24c7.9 4 11.1 13.6 7.2 21.5s-13.6 11.1-21.5 7.2l-48-24c-7.9-4-11.1-13.6-7.2-21.5s13.6-11.1 21.5-7.2z" />
    </Icon>
);

export default PersonHarassing;