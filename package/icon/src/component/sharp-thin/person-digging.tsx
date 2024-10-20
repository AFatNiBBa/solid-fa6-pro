
import { Icon } from "../../index";

/**
 * A component that renders the `person-digging` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-digging?s=sharp-thin person-digging}
 * @preview ![person-digging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/person-digging.svg)
 */
const PersonDigging: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm96 304l-64 0-26.7 80L256 512l16.9 0L560 512l16 0 0-16 0-32L457.8 301.5 448 288l-10 13.4-54.8 73-6-3.3-60.6-33.7-4.9-12.2L253.7 180.1l-5.1-12.7-12.7-5.1-80-32-22-8.8L119 140 70.5 200.7 27.9 177l-7-3.9-7.8 14 7 3.9L369.5 385.1l4 2.2L352 416zM238.9 186.1l55.6 139.1L84.7 208.6 131.5 150l7.4-9.3 11 4.4 80 32 6.4 2.5 2.5 6.4zM447.8 314.9L560 469.2l0 26.8-281.8 0 21.3-64 52.5 0 8 0 4.8-6.4 83-110.7zm-383.9-26l-.2 .7L6.8 496 2.4 512 19 512l49.8 0 40.8-148.2 4.4-16.1 14.2 8.8L160 376.2 160 480l0 16 0 16 16 0 32 0 16 0 0-16 0-16 0-121.7 0-17.5L208 332l0 26.4L208 480l0 16-32 0 0-16 0-103.8 0-8.9-7.6-4.7-45.9-28.4-18.2-11.2-5.7 20.6L56.6 496l-33.2 0L79.1 293.9l.2-.5 8.5-28.2-14.3-8-9.5 31.7z" />
    </Icon>
);

export default PersonDigging;