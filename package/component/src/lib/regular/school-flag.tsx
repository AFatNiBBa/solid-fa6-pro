
import { Icon } from "../../index";

/**
 * A component that renders the `school-flag` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-flag?s=regular school-flag}
 * @preview ![school-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/school-flag.svg)
 */
const SchoolFlag: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0L400 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-81.9 0 89.6 64 96.3 0c39.8 0 72 32.2 72 72l0 208c0 39.8-32.2 72-72 72l-168 0-96 0L72 512c-39.8 0-72-32.2-72-72L0 232c0-39.8 32.2-72 72-72l96.3 0L264 91.6 264 24c0-13.3 10.7-24 24-24zM504 464c13.3 0 24-10.7 24-24l0-208c0-13.3-10.7-24-24-24l-104 0c-5 0-9.9-1.6-13.9-4.5l-98.1-70-98.1 70c-4.1 2.9-8.9 4.5-13.9 4.5L72 208c-13.3 0-24 10.7-24 24l0 208c0 13.3 10.7 24 24 24l168 0 0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64 168 0zM240 240a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM112 256l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm304 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM112 352l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm320 0l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default SchoolFlag;