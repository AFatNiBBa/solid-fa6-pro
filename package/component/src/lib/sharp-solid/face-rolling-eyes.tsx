
import { Icon } from "../../index";

/**
 * A component that renders the `face-rolling-eyes` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-rolling-eyes?s=sharp-solid face-rolling-eyes}
 * @preview ![face-rolling-eyes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-rolling-eyes.svg)
 */
const FaceRollingEyes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM192 368l128 0 16 0 0 32-16 0-128 0-16 0 0-32 16 0zm32-144c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-26 15.5-48.4 37.8-58.4c-3.7 5.2-5.8 11.6-5.8 18.4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.9-2.2-13.2-5.8-18.4C208.5 175.6 224 198 224 224zm128 64c-35.3 0-64-28.7-64-64c0-26 15.5-48.4 37.8-58.4c-3.7 5.2-5.8 11.6-5.8 18.4c0 17.7 14.3 32 32 32s32-14.3 32-32c0-6.9-2.2-13.2-5.8-18.4C400.5 175.6 416 198 416 224c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default FaceRollingEyes;