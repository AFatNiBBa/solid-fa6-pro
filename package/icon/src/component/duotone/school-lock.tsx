
import { Icon, generic } from "../../index";

/**
 * A component that renders the `school-lock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-lock?s=duotone school-lock}
 * @preview ![school-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/school-lock.svg)
 */
const SchoolLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144L0 464c0 26.5 21.5 48 48 48l272 0-64 0 0-96c0-35.3 28.7-64 64-64l64 0c0-23.7 12.9-44.4 32-55.4l0-24.6c0-61.9 50.1-112 112-112s112 50.1 112 112l0-128c0-26.5-21.5-48-48-48L473.7 96 337.8 5.4C332.4 1.8 326.2 0 320 0s-12.4 1.8-17.8 5.4L166.3 96 48 96C21.5 96 0 117.5 0 144zm80 64c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zm0 128c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM408 176a88 88 0 1 1 -176 0 88 88 0 1 1 176 0zM304 144l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default SchoolLock;