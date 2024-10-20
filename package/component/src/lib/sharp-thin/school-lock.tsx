
import { Icon } from "../../index";

/**
 * A component that renders the `school-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-lock?s=sharp-thin school-lock}
 * @preview ![school-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/school-lock.svg)
 */
const SchoolLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 112l144 0L320 0 480 112l144 0 16 0 0 16 0 160-16 0 0-32 0-128-144 0-5 0-4.1-2.9L320 19.5 169.2 125.1 165 128l-5 0L16 128l0 368 240 0 0-112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 112 0 16-16 0-96 0-16 0L16 512 0 512l0-16L0 128l0-16 16 0zM368 496l0-112c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 112 96 0zM64 192l8 0 64 0 8 0 0 8 0 80 0 8-8 0-64 0-8 0 0-8 0-80 0-8zm16 16l0 64 48 0 0-64-48 0zm240 32a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-144a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm8 48l0 24 16 0 8 0 0 16-8 0-24 0-8 0 0-8 0-32 0-8 16 0 0 8zM64 320l8 0 64 0 8 0 0 8 0 80 0 8-8 0-64 0-8 0 0-8 0-80 0-8zm16 16l0 64 48 0 0-64-48 0zM528 208c-26.5 0-48 21.5-48 48l0 64 96 0 0-64c0-26.5-21.5-48-48-48zm-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 32 0 16 0 0 16 0 160 0 16-16 0-192 0-16 0 0-16 0-160 0-16 16 0 32 0 0-64zm-32 80l0 160 192 0 0-160-32 0-16 0-96 0-16 0-32 0z" />
    </Icon>
);

export default SchoolLock;