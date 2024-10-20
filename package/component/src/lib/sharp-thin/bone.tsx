
import { Icon } from "../../index";

/**
 * A component that renders the `bone` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bone?s=sharp-thin bone}
 * @preview ![bone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bone.svg)
 */
const Bone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 192l16 0 256 0 16 0 0-16c0-35.3 28.7-64 64-64s64 28.7 64 64c0 26.2-15.8 48.8-38.4 58.7l-9.6 4.2 0 10.5 0 13.3 0 10.5 9.6 4.2c22.6 9.9 38.4 32.5 38.4 58.7c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-16-16 0-256 0-16 0 0 16c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26.2 15.8-48.8 38.4-58.7l9.6-4.2 0-10.5 0-13.3 0-10.5-9.6-4.2C31.8 224.8 16 202.2 16 176c0-35.3 28.7-64 64-64s64 28.7 64 64l0 16zm384 57.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80l-16 0-224 0-16 0c0-44.2-35.8-80-80-80S0 131.8 0 176c0 32.8 19.7 61 48 73.3l0 13.3C19.7 275 0 303.2 0 336c0 44.2 35.8 80 80 80s80-35.8 80-80l16 0 224 0 16 0c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3l0-13.3z" />
    </Icon>
);

export default Bone;