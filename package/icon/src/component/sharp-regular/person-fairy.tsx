
import { Icon } from "../../index";

/**
 * A component that renders the `person-fairy` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-fairy?s=sharp-regular person-fairy}
 * @preview ![person-fairy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-fairy.svg)
 */
const PersonFairy: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 64a64 64 0 1 1 128 0A64 64 0 1 1 256 64zm14 144l-4 96 38 0 32 0 38 0-4-96L270 208zM216 352l2-48 6-144 192 0 6 144 2 48-40 0 0 136 0 24-48 0 0-24 0-136-32 0 0 136 0 24-48 0 0-24 0-136-40 0zm32.3-224l-54.9 0-15.4 0C141.4 100.3 96.7 83 48 80.4L48 112c0 71.4 33.3 134.9 85.4 176l18.1 14.3 18.1 14.3-13.6 18.7L142.5 354c-16.3 22.3-26.9 49-29.7 78c43.3-.2 82.5-17.6 111.2-45.7l0 61C191.7 468 153.2 480 112 480l-24 0-24 0 0-24 0-8c0-45.7 14.7-88 39.7-122.3C40.6 275.9 0 198.7 0 112L0 56 0 32l24 0 10.9 0c84.9 0 161.1 37.1 213.4 96zM592 80.4c-48.7 2.7-93.4 20-129.9 47.6l-15.4 0-55 0C444 69.1 520.2 32 605.1 32L616 32l24 0 0 24 0 56c0 86.7-40.6 163.9-103.7 213.7C561.3 360 576 402.3 576 448l0 8 0 24-24 0-24 0c-41.2 0-79.7-12-112-32.7l0-61c28.7 28.2 67.9 45.5 111.2 45.7c-2.9-29-13.5-55.7-29.7-78l-13.6-18.7-13.6-18.7 18.1-14.3L506.6 288C558.7 246.9 592 183.4 592 112l0-31.6z" />
    </Icon>
);

export default PersonFairy;