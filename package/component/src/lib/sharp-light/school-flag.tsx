
import { Icon } from "../../index";

/**
 * A component that renders the `school-flag` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-flag?s=sharp-light school-flag}
 * @preview ![school-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/school-flag.svg)
 */
const SchoolFlag: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 32l0 32 80 0 0-32-80 0zM272 0l32 0 80 0 32 0 0 32 0 32 0 32-32 0-68.5 0 89.6 64L560 160l16 0 0 16 0 320 0 16-16 0-208 0-32 0-64 0-32 0L16 512 0 512l0-16L0 176l0-16 16 0 154.9 0L272 87.8 272 64l0-32 0-32zm48 416c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64 64 0 0-64zm32 64l192 0 0-288-144 0-5.1 0-4.2-3L288 115.7 185.3 189l-4.2 3-5.1 0L32 192l0 288 192 0 0-64c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64zM256 240a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM64 224l16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16zm32 32l0 32 32 0 0-32-32 0zm336-32l64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16 16 0zm48 64l0-32-32 0 0 32 32 0zM64 352l16 0 64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16zm32 32l0 32 32 0 0-32-32 0zm336-32l64 0 16 0 0 16 0 64 0 16-16 0-64 0-16 0 0-16 0-64 0-16 16 0zm16 64l32 0 0-32-32 0 0 32z" />
    </Icon>
);

export default SchoolFlag;