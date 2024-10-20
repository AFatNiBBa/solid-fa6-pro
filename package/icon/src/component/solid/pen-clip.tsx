
import { Icon } from "../../index";

/**
 * A component that renders the `pen-clip` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-clip?s=solid pen-clip}
 * @preview ![pen-clip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pen-clip.svg)
 */
const PenClip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M453.3 19.3l39.4 39.4c25 25 25 65.5 0 90.5l-52.1 52.1s0 0 0 0l-1-1s0 0 0 0l-16-16-96-96-17-17 52.1-52.1c25-25 65.5-25 90.5 0zM241 114.9c-9.4-9.4-24.6-9.4-33.9 0L105 217c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L173.1 81c28.1-28.1 73.7-28.1 101.8 0L288 94.1l17 17 96 96 16 16 1 1-17 17L229.5 412.5c-48 48-109.2 80.8-175.8 94.1l-25 5c-7.9 1.6-16-.9-21.7-6.6s-8.1-13.8-6.6-21.7l5-25c13.3-66.6 46.1-127.8 94.1-175.8L254.1 128 241 114.9z" />
    </Icon>
);

export default PenClip;