
import { Icon, generic } from "../../index";

/**
 * A component that renders the `input-text` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-text?s=duotone input-text}
 * @preview ![input-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/input-text.svg)
 */
const InputText: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm64 0l512 0 0 256L64 384l0-256z" />
        <path d="M205.9 174.3c-3.9-8.7-12.4-14.3-21.9-14.3s-18.1 5.6-21.9 14.3l-64 144c-5.4 12.1 .1 26.3 12.2 31.7s26.3-.1 31.7-12.2l4.3-9.7 75.5 0 4.3 9.7c5.4 12.1 19.6 17.6 31.7 12.2s17.6-19.6 12.2-31.7l-64-144zM200.4 280l-32.8 0L184 243.1 200.4 280zM304 184l0 8 0 64 0 64 0 8c0 13.3 10.7 24 24 24l68 0c33.1 0 60-26.9 60-60c0-18.6-8.5-35.3-21.8-46.3c3.7-7.8 5.8-16.5 5.8-25.7c0-33.1-26.9-60-60-60l-52 0c-13.3 0-24 10.7-24 24zm48 24l28 0c6.6 0 12 5.4 12 12s-5.4 12-12 12l-28 0 0-24zm0 96l0-24 28 0 16 0c6.6 0 12 5.4 12 12s-5.4 12-12 12l-44 0z" />
    </Icon>
);

export default InputText;