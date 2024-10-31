
import { Icon } from "../../index";

/**
 * A component that renders the `school-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-lock?s=sharp-light school-lock}
 * @preview ![school-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/school-lock.svg)
 */
const SchoolLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 96L32 96 0 96l0 32L0 480l0 32 32 0 224 0 32 0 64 0 32 0 0-32 0-96c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96L32 480l0-352 128 0c5.8 0 11.5-1.6 16.5-4.6L320 37.3l143.5 86.1c5 3 10.7 4.6 16.5 4.6l128 0 0 65.6c19.8 20.2 32 47.9 32 78.4l0-144 0-32-32 0L480 96 320 0 160 96zM288 384c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96-64 0 0-96zM112 160l-16 0 0 16 0 96 0 16 16 0 64 0 16 0 0-16 0-96 0-16-16 0-64 0zm16 96l0-64 32 0 0 64-32 0zM96 320l0 16 0 96 0 16 16 0 64 0 16 0 0-16 0-96 0-16-16 0-64 0-16 0zm32 32l32 0 0 64-32 0 0-64zM320 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm16-128l0-16-32 0 0 16 0 32 0 16 16 0 24 0 16 0 0-32-16 0-8 0 0-16zm192 64c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48-32 0 0 32 0 128 0 32 32 0 160 0 32 0 0-32 0-128 0-32-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm160 80l0 128-160 0 0-128 160 0z" />
    </Icon>
);

export default SchoolLock;