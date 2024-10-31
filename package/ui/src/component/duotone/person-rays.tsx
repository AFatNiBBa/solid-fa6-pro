
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-rays` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-rays?s=duotone person-rays}
 * @preview ![person-rays](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-rays.svg)
 */
const PersonRays: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M100.6 271.5c-9.1 15.1-4.2 34.8 10.9 43.9s34.8 4.2 43.9-10.9L184 256.9 184 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 16 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-223.1 28.6 47.5c9.1 15.1 28.8 20 43.9 10.9c10-6 15.5-16.6 15.5-27.5c0-5.6-1.5-11.3-4.6-16.5l-58.3-97c-17.4-28.9-48.6-46.6-82.3-46.6l-29.7 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97zM208 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M41 7C31.6-2.3 16.4-2.3 7 7S-2.3 31.6 7 41l80 80c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L41 7zM471 7L391 87c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0zM7 505c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L7 471c-9.4 9.4-9.4 24.6 0 33.9zm464 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l80 80z" />
    </Icon>
);

export default PersonRays;