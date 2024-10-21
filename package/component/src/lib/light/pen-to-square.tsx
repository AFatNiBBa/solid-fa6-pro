
import { Icon } from "../../index";

/**
 * A component that renders the `pen-to-square` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-to-square?s=light pen-to-square}
 * @preview ![pen-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pen-to-square.svg)
 */
const PenToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M454.6 45.3l12.1 12.1c12.5 12.5 12.5 32.8 0 45.3L440 129.4 382.6 72l26.7-26.7c12.5-12.5 32.8-12.5 45.3 0zM189 265.6l171-171L417.4 152l-171 171c-4.2 4.2-9.6 7.2-15.4 8.6l-65.6 15.1L180.5 281c1.3-5.8 4.3-11.2 8.6-15.4zm197.7-243L166.4 243c-8.5 8.5-14.4 19.2-17.1 30.9l-20.9 90.6c-1.2 5.4 .4 11 4.3 14.9s9.5 5.5 14.9 4.3l90.6-20.9c11.7-2.7 22.4-8.6 30.9-17.1L489.4 125.3c25-25 25-65.5 0-90.5L477.3 22.6c-25-25-65.5-25-90.5 0zM80 64C35.8 64 0 99.8 0 144L0 432c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-128c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 26.5-21.5 48-48 48L80 480c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 64z" />
    </Icon>
);

export default PenToSquare;