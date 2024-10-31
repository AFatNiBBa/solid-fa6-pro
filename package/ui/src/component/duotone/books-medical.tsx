
import { Icon, generic } from "../../index";

/**
 * A component that renders the `books-medical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/books-medical?s=duotone books-medical}
 * @preview ![books-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/books-medical.svg)
 */
const BooksMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 32C64 14.3 78.3 0 96 0l64 0c17.7 0 32 14.3 32 32l0 64c-42.7 0-85.3 0-128 0l0-64zm0 384l128 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zM224 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c-42.7 0-85.3 0-128 0l0-64zm0 96c42.7 0 85.3 0 128 0l0 256-128 0 0-256zm0 288l128 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zM353.4 117.9c40.9-11 81.8-21.9 122.8-32.9c2.7 10.3 5.5 20.6 8.2 30.9c-40.9 11-81.8 21.9-122.8 32.9c-2.7-10.3-5.5-20.6-8.2-30.9zm74.2 278.3c40.9-11 81.8-21.9 122.8-32.9l8.2 30.9L435.8 427c-2.7-10.3-5.5-20.6-8.2-30.9z" />
        <path d="M353.4 117.9l-1.4-5.2 0 15.4-128 0 0-32 128 0 0-75.3c2.3-1.3 4.8-2.4 7.5-3.1L420.9 1.1c16.9-4.6 34.4 5.5 38.9 22.6L476.2 85 353.4 117.9zm8.2 30.9l122.8-32.9 66 247.4L427.6 396.1l-66-247.4zM435.8 427l122.8-32.9 16.3 61.1c4.5 17-5.5 34.5-22.5 39.1l-61.4 16.5c-16.9 4.6-34.4-5.5-38.9-22.6L435.8 427zM192 96l0 32L64 128l0-32 128 0zM64 416l0-32 128 0 0 32L64 416zm160-32l128 0 0 32-128 0 0-32zM64 176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l48 0 0-48z" />
    </Icon>
);

export default BooksMedical;