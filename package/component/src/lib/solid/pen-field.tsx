
import { Icon } from "../../index";

/**
 * A component that renders the `pen-field` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-field?s=solid pen-field}
 * @preview ![pen-field](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pen-field.svg)
 */
const PenField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M601.9 16c-18.8-18.8-49.2-18.7-67.9 0L494.4 55.7l89.3 89.3 39.8-38.9c19.1-18.7 19.2-49.4 .4-68.2L601.9 16zM328.5 221.8c-7 7-12.3 15.6-15.4 25l-23.8 71.3c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l71.5-23.9c9.2-3.1 17.6-8.2 24.5-15L560.8 167.5 471.7 78.4 328.5 221.8zM80 128c-44.2 0-80 35.8-80 80L0 432c0 44.2 35.8 80 80 80l416 0c44.2 0 80-35.8 80-80l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 128zm80 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default PenField;