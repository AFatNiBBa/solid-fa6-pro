
import { Icon } from "../../index";

/**
 * A component that renders the `mercury` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mercury?s=sharp-thin mercury}
 * @preview ![mercury](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mercury.svg)
 */
const Mercury: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M140 55.8c-31.9-10.4-59.6-30-80-55.8L81.1 0C108.9 29.5 148.3 48 192 48s83.1-18.5 110.9-48l21.1 0c-20.3 25.8-48.1 45.4-80 55.8C315.8 78 368 144.9 368 224c0 94.5-74.5 171.6-168 175.8l0 48.2 56 0 8 0 0 16-8 0-56 0 0 40 0 8-16 0 0-8 0-40-56 0-8 0 0-16 8 0 56 0 0-48.2C90.5 395.6 16 318.5 16 224C16 144.9 68.2 78 140 55.8zM192 384l.1 0c88.3-.1 159.9-71.7 159.9-160c0-88.4-71.6-160-160-160S32 135.6 32 224c0 88.3 71.6 159.9 159.9 160l.1 0z" />
    </Icon>
);

export default Mercury;