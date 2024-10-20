
import { Icon, generic } from "../../index";

/**
 * A component that renders the `note-medical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/note-medical?s=duotone note-medical}
 * @preview ![note-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/note-medical.svg)
 */
const NoteMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 224-128 0c-17.7 0-32 14.3-32 32l0 128L64 480c-35.3 0-64-28.7-64-64L0 96zM128 208l0 32c0 8.8 7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16l0 48-48 0c-8.8 0-16 7.2-16 16z" />
        <path d="M192 144c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48zm96 336l0-128c0-17.7 14.3-32 32-32l128 0 0 5.5c0 17-6.7 33.3-18.7 45.3l-90.5 90.5c-12 12-28.3 18.7-45.3 18.7l-5.5 0z" />
    </Icon>
);

export default NoteMedical;