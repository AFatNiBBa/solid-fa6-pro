
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard-medical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-medical?s=duotone clipboard-medical}
 * @preview ![clipboard-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clipboard-medical.svg)
 */
const ClipboardMedical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-49.6 0c.2 .8 .3 1.6 .4 2.3C290.1 72.6 304 90.7 304 112l0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24c0-21.3 13.9-39.4 33.2-45.7c.1-.8 .3-1.6 .4-2.3L64 64C28.7 64 0 92.7 0 128zM96 304c0-8.8 7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32z" />
        <path d="M113.2 66.3C119.6 28.7 152.5 0 192 0s72.4 28.7 78.8 66.3C290.1 72.6 304 90.7 304 112l0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24c0-21.3 13.9-39.4 33.2-45.7zM216 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM160 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z" />
    </Icon>
);

export default ClipboardMedical;