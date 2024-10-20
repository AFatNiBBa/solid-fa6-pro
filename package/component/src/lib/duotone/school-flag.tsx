
import { Icon, generic } from "../../index";

/**
 * A component that renders the `school-flag` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-flag?s=duotone school-flag}
 * @preview ![school-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/school-flag.svg)
 */
const SchoolFlag: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 224L0 448c0 35.3 28.7 64 64 64l176 0 0-112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112 176 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-101.7 0L320.7 96l-.7 0-16 0-48 0-.7 0-89.6 64L64 160c-35.3 0-64 28.7-64 64zm64 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zm0 128c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM336 240a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm112 0c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zm0 128c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64z" />
        <path d="M297.4 1.4c2-.9 4.2-1.4 6.6-1.4l96 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-80 0-16 0-48 0 0-64c0-17.7 14.3-32 32-32c3.3 0 6.4 .5 9.4 1.4zM80 224l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm384 0l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zM64 368c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zm400-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default SchoolFlag;