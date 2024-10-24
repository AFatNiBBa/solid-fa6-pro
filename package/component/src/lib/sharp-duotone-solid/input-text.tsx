
import { Icon, generic } from "../../index";

/**
 * A component that renders the `input-text` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-text?s=sharp-duotone-solid input-text}
 * @preview ![input-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/input-text.svg)
 */
const InputText: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l0 64L0 384l0 64 64 0 512 0 64 0 0-64 0-256 0-64-64 0L64 64 0 64zm64 64l512 0 0 256L64 384l0-256z" />
        <path d="M195.4 160l-38.9 0-2.8 7.1-72 180-2 4.9 51.7 0 9.6-24 69.9 0 9.6 24 51.7 0-2-4.9-72-180-2.8-7.1zm-3.7 120l-31.5 0L176 240.6 191.8 280zM288 160l0 24 0 8 0 64 0 64 0 8 0 24 24 0 68 0c33.1 0 60-26.9 60-60c0-18.6-8.5-35.3-21.8-46.3c3.7-7.8 5.8-16.5 5.8-25.7c0-33.1-26.9-60-60-60l-52 0-24 0zm88 60c0 6.6-5.4 12-12 12l-28 0 0-24 28 0c6.6 0 12 5.4 12 12zm4 84l-44 0 0-24 28 0 16 0c6.6 0 12 5.4 12 12s-5.4 12-12 12z" />
    </Icon>
);

export default InputText;