
import { Icon } from "../../index";

/**
 * A component that renders the `person-burst` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-burst?s=sharp-light person-burst}
 * @preview ![person-burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-burst.svg)
 */
const PersonBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M193.8 36.1L176 0 158.2 36.1 133.1 86.9l-55.3-12L38.4 66.3l17.1 36.5L79.6 154 35.7 189.7 4.4 215.2l39.2 9.4 55.1 13.1 .6 56.6 .4 40.3 31.8-24.8L176 274.9l44.6 34.9 31.8 24.8 .4-40.3 .6-56.6 55.1-13.1 39.2-9.4-31.3-25.4L272.4 154l24.1-51.2 17.1-36.5-39.4 8.6-55.3 12L193.8 36.1zm31.9 82l31.4-6.8-13.6 29.1L232.8 163l19.4 15.8 24.9 20.3-31.2 7.5-24.3 5.8-.2 25-.3 32.1-25.3-19.8L176 234.3l-19.7 15.4L131 269.5l-.3-32.1-.2-25-24.3-5.8-31.2-7.5 24.9-20.3L119.2 163l-10.6-22.6L94.9 111.3l31.4 6.8 24.4 5.3 11.1-22.4L176 72.3l14.2 28.8 11.1 22.4 24.4-5.3zM456 56a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0A56 56 0 1 0 424 56a56 56 0 1 0 112 0zM428.9 128l-9.6 0-4.5 8.5-76.9 144-7.5 14.1 28.2 15.1 7.5-14.1L416 202.1 416 496l0 16 32 0 0-16 0-144 64 0 0 144 0 16 32 0 0-16 0-293.8 49.9 93.4 7.5 14.1 28.2-15.1-7.5-14.1-76.9-144-4.5-8.5-9.6 0-102.2 0zM512 320l-64 0 0-160 64 0 0 160z" />
    </Icon>
);

export default PersonBurst;