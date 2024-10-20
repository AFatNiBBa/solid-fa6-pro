
import { Icon } from "../../index";

/**
 * A component that renders the `sword` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sword?s=sharp-light sword}
 * @preview ![sword](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sword.svg)
 */
const Sword: typeof Icon = x => (
    <Icon {...x}>
        <path d="M182.6 233.4L205.3 256 415.1 46.2l59.2-8.5-8.5 59.2L256 306.7l22.6 22.6L496 112l11.3-79L512 0 479 4.7 400 16 182.6 233.4zm-59.3-20.7L112 201.4l-11.3 11.3-32 32-9.1 9.1 6.9 10.8 49.1 77.2L82.7 374.6l-31.6-6.3-8.4-1.7-6.1 6.1-24 24L1.4 408l11.3 11.3 80 80L104 510.6l11.3-11.3 24-24 6.1-6.1-1.7-8.4-6.3-31.6 32.9-32.9 77.2 49.1 10.8 6.9 9.1-9.1 32-32L310.6 400l-11.3-11.3-176-176zm26.2 122.7l-49.1-77.2L112 246.6 265.4 400l-11.6 11.6-77.2-49.1-10.8-6.9-9.1 9.1-48 48-6.1 6.1 1.7 8.4 6.3 31.6-6.6 6.6L46.6 408l6.6-6.6 31.6 6.3 8.4 1.7 6.1-6.1 48-48 9.1-9.1-6.9-10.8z" />
    </Icon>
);

export default Sword;