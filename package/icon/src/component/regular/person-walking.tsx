
import { Icon } from "../../index";

/**
 * A component that renders the `person-walking` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-walking?s=regular person-walking}
 * @preview ![person-walking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-walking.svg)
 */
const PersonWalking: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm11.7 128.8l-29.9 89.8c-1.1 3.2 0 6.6 2.5 8.7l16.4 13.3 32.4-103.8c.1-.3 .2-.7 .3-1c-6.7-3.5-14-5.9-21.7-7.1zm57.6 53.1l-28.5 91.3 50.1 40.7c6.9 5.6 11.7 13.4 13.8 22.1l22.8 98.6c3 12.9-5.1 25.8-18 28.8s-25.8-5.1-28.8-18l-22.1-96L114 312.6C96 297.9 88.9 273.5 96.2 251.4L119 183.1c-24.7 9.8-44.7 28.9-55.6 53.3l-9.5 21.3c-5.4 12.1-19.6 17.6-31.7 12.2s-17.6-19.6-12.2-31.7L19.5 217c17.1-38.5 49.6-68 89.5-81.3c15.3-5.1 31.3-7.7 47.4-7.7l4.9 0c52.5 0 98.7 34.8 113.2 85.4l10.9 38.1L313 279c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L250 283.9c-4.8-4.8-8.3-10.8-10.2-17.3l-10.5-36.7zM75.5 402.5l24.1-60.4 39 31.7-19.2 48c-2 5-5 9.6-8.9 13.4L41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l68.5-68.5z" />
    </Icon>
);

export default PersonWalking;