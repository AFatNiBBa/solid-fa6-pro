
import { Icon, generic } from "../../index";

/**
 * A component that renders the `school-circle-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/school-circle-exclamation?s=duotone school-circle-exclamation}
 * @preview ![school-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/school-circle-exclamation.svg)
 */
const SchoolCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144L0 464c0 26.5 21.5 48 48 48l272 0-64 0 0-96c0-35.3 28.7-64 64-64l.7 0c3.4-37.7 18.7-72.1 42.2-99.1C350.2 260 335.6 264 320 264c-48.6 0-88-39.4-88-88s39.4-88 88-88s88 39.4 88 88c0 18.3-5.6 35.3-15.1 49.4c29-21 64.6-33.4 103.1-33.4c59.5 0 112.1 29.6 144 74.8L640 144c0-26.5-21.5-48-48-48L473.7 96 337.8 5.4C332.4 1.8 326.2 0 320 0s-12.4 1.8-17.8 5.4L166.3 96 48 96C21.5 96 0 117.5 0 144zm80 64c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zm0 128c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-64zM304 144l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
        <path d="M352 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm168 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-8-152c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80z" />
    </Icon>
);

export default SchoolCircleExclamation;