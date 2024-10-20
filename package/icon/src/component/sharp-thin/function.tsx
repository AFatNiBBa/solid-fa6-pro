
import { Icon } from "../../index";

/**
 * A component that renders the `function` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/function?s=sharp-thin function}
 * @preview ![function](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/function.svg)
 */
const Function: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 0l8 0L200 0l8 0 0 16-8 0L96 16l0 176 88 0 8 0 0 16-8 0-88 0 0 264 0 8-8 0L8 480l-8 0 0-16 8 0 72 0 0-256L8 208l-8 0 0-16 8 0 72 0L80 8l0-8zM240 320c0 60.6 17.2 116.9 46.8 163.7l-13.5 8.5C242.1 442.9 224 383.6 224 320s18.1-122.9 49.2-172.3l13.5 8.5C257.2 203.1 240 259.4 240 320zm384 0c0-60.6-17.2-116.9-46.8-163.7l13.5-8.5C621.9 197.1 640 256.4 640 320s-18.1 122.9-49.2 172.3l-13.5-8.5C606.8 436.9 624 380.6 624 320zM365.7 242.3L432 308.7l66.3-66.3 5.7-5.7L515.3 248l-5.7 5.7L443.3 320l66.3 66.3 5.7 5.7L504 403.3l-5.7-5.7L432 331.3l-66.3 66.3-5.7 5.7L348.7 392l5.7-5.7L420.7 320l-66.3-66.3-5.7-5.7L360 236.7l5.7 5.7z" />
    </Icon>
);

export default Function;