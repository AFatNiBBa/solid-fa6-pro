
import { Icon } from "../../index";

/**
 * A component that renders the `eye-evil` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eye-evil?s=sharp-solid eye-evil}
 * @preview ![eye-evil](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/eye-evil.svg)
 */
const EyeEvil: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M258.1 111.4L320 0l61.9 111.4c11 2.7 21.7 6.2 31.8 10.3L550 82.7l-59 94.5c7.1 8.9 13 18.4 17.7 28.3L640 256 508.7 306.5c-4.6 10-10.6 19.4-17.7 28.3l59 94.5-136.3-39c-10.1 4.1-20.7 7.5-31.8 10.3L320 512 258.1 400.6c-11-2.7-21.7-6.2-31.8-10.2L90 429.3l59-94.5c-7.1-8.9-13-18.4-17.7-28.3L0 256l131.3-50.5c4.6-10 10.6-19.4 17.7-28.3L90 82.7l136.3 39c10.1-4.1 20.7-7.5 31.8-10.3zM320 352c53 0 96-43 96-96c0-19.7-6-38.1-16.2-53.3c-16.9 9.7-35.7 16.5-55.8 19.5c4.6 9.3 7.9 20.7 7.9 33.8c0 40.4-32 64-32 64s-32-23.6-32-64c0-13.1 3.4-24.5 7.9-33.8c-20.1-3-38.9-9.8-55.8-19.5C230 217.9 224 236.3 224 256c0 53 43 96 96 96z" />
    </Icon>
);

export default EyeEvil;