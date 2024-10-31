
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-dots-from-line` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dots-from-line?s=sharp-duotone-solid person-dots-from-line}
 * @preview ![person-dots-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-dots-from-line.svg)
 */
const PersonDotsFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M.4 304.9l39.7 87.4 43.7-19.9L176 330.5 176 432l224 0 0-101.5 92.1 41.9 43.7 19.9 39.7-87.4L531.9 285l-31.1-14.1c-8.8 10.5-22 17.1-36.7 17.1c-26.5 0-48-21.5-48-48c0-2.5 .2-5 .6-7.4l-44.7-20.3-9.5-4.3L352 208l-128 0-10.4 0-9.5 4.3-76.7 34.8C124 270.3 104.1 288 80 288c-9.5 0-18.4-2.8-25.8-7.5l-10 4.6L.4 304.9zM200 88a88 88 0 1 0 176 0A88 88 0 1 0 200 88zm72 192a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm80 80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M64 240a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM0 464l24 0 528 0 24 0 0 48-24 0L24 512 0 512l0-48zM464 224a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default PersonDotsFromLine;