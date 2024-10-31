
import { Icon } from "../../index";

/**
 * A component that renders the `face-rolling-eyes` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-rolling-eyes?s=thin face-rolling-eyes}
 * @preview ![face-rolling-eyes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-rolling-eyes.svg)
 */
const FaceRollingEyes: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM192 376l128 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-128 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm-32-88c35.3 0 64-28.7 64-64c0-20.9-10-39.5-25.6-51.2c1 3.6 1.6 7.3 1.6 11.2c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-3.9 .6-7.6 1.6-11.2C106 184.5 96 203.1 96 224c0 35.3 28.7 64 64 64zM80 224a80 80 0 1 1 160 0A80 80 0 1 1 80 224zm56-40a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm280 40c0-20.9-10.1-39.5-25.6-51.2c1 3.6 1.6 7.3 1.6 11.2c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-3.9 .6-7.6 1.6-11.2C298 184.5 288 203.1 288 224c0 35.3 28.7 64 64 64s64-28.7 64-64zm-64 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160zm0-144a24 24 0 1 0 0 48 24 24 0 1 0 0-48z" />
    </Icon>
);

export default FaceRollingEyes;