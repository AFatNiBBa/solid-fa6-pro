
import { Icon } from "../../index";

/**
 * A component that renders the `graduation-cap` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/graduation-cap?s=sharp-light graduation-cap}
 * @preview ![graduation-cap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/graduation-cap.svg)
 */
const GraduationCap: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 288L640 176l0-32L320 32 0 144l0 32 92.1 32.2-38.9 36L48 249l0 7 0 64c-2.4 11.9-5.1 23.5-8.1 34.6c-8.5 32.1-18.7 59.9-26.7 79.4C5.6 452.8 0 464 0 464l32.3 6.5L80 480c25.1-58.6 15.2-99.7 0-125.6L80 263l46.3-42.8L320 288zM51.2 160L320 65.9 588.8 160 320 254.1 165.2 199.9l160.4-60.1-11.2-30-192 72-2.9 1.1-.8 .7L51.2 160zm92.4 100.2L128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.4 260.2l-31 10.9 14.2 135.3c-.7 .8-1.8 2.1-3.7 3.7c-6 5.2-16.5 11.5-31.9 17.5C413.6 439.4 369.7 448 320 448s-93.6-8.6-124.1-20.6c-15.4-6-25.8-12.3-31.9-17.5c-1.9-1.6-3-2.8-3.7-3.7L174.6 271l-31-10.9zM480.5 405s0 0-.1 .1c0-.1 .1-.1 .1-.1zm-321 0s0 0 .1 .1c0-.1-.1-.1-.1-.1zM59.1 443.2l-13.9-2.8c.9-2.2 1.8-4.5 2.7-6.9c4.3-11.3 9.1-24.4 13.7-38.9c2.6 12.6 2.8 28.7-2.5 48.6z" />
    </Icon>
);

export default GraduationCap;