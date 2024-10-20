
import { Icon } from "../../index";

/**
 * A component that renders the `pen-circle` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-circle?s=thin pen-circle}
 * @preview ![pen-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pen-circle.svg)
 */
const PenCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM132.7 379.2c-4-4-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9L307.4 133.5c15.6-15.6 40.9-15.6 56.6 0l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6L222.9 359.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2zM367 193.1c9.4-9.4 9.4-24.6 0-33.9l-14.4-14.4c-9.4-9.4-24.6-9.4-33.9 0l-25.3 25.3 48.3 48.3L367 193.1zM211.6 348.6L330.4 229.7l-48.3-48.3L163.2 300.3c-2.1 2.1-3.5 4.6-4.2 7.4l-10.6 42.5L144 367.9l17.6-4.4 42.5-10.6c2.8-.7 5.4-2.2 7.4-4.2z" />
    </Icon>
);

export default PenCircle;