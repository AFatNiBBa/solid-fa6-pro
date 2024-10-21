
import { Icon } from "../../index";

/**
 * A component that renders the `school` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school?s=sharp-light school}
 * @preview ![school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/school.svg)
 */
const School: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 96l128 0L320 0 480 96l128 0 32 0 0 32 0 352 0 32-32 0-224 0-32 0-64 0-32 0L32 512 0 512l0-32L0 128 0 96l32 0zM352 384c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96 64 0 0-96zm32 96l224 0 0-352-128 0c-5.8 0-11.5-1.6-16.5-4.6L320 37.3 176.5 123.4c-5 3-10.7 4.6-16.5 4.6L32 128l0 352 224 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 96zM96 160l16 0 64 0 16 0 0 16 0 96 0 16-16 0-64 0-16 0 0-16 0-96 0-16zm32 32l0 64 32 0 0-64-32 0zm336-32l64 0 16 0 0 16 0 96 0 16-16 0-64 0-16 0 0-16 0-96 0-16 16 0zm16 96l32 0 0-64-32 0 0 64zM96 320l16 0 64 0 16 0 0 16 0 96 0 16-16 0-64 0-16 0 0-16 0-96 0-16zm32 32l0 64 32 0 0-64-32 0zm336-32l64 0 16 0 0 16 0 96 0 16-16 0-64 0-16 0 0-16 0-96 0-16 16 0zm48 96l0-64-32 0 0 64 32 0zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm16 64l0 16 8 0 16 0 0 32-16 0-24 0-16 0 0-16 0-32 0-16 32 0 0 16z" />
    </Icon>
);

export default School;