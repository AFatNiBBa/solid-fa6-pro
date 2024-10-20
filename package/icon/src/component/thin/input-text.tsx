
import { Icon } from "../../index";

/**
 * A component that renders the `input-text` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-text?s=thin input-text}
 * @preview ![input-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/input-text.svg)
 */
const InputText: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 80c-26.5 0-48 21.5-48 48l0 256c0 26.5 21.5 48 48 48l512 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48L64 80zM0 128C0 92.7 28.7 64 64 64l512 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm160 32c3.2 0 6.2 2 7.4 5l72 176c1.7 4.1-.3 8.8-4.4 10.4s-8.8-.3-10.4-4.4l-14.3-35-100.5 0L95.4 347c-1.7 4.1-6.3 6-10.4 4.4s-6-6.3-4.4-10.4l72-176c1.2-3 4.2-5 7.4-5zm0 29.1L116.3 296l87.4 0L160 189.1zM272 168c0-4.4 3.6-8 8-8l52 0c28.7 0 52 23.3 52 52c0 15.7-6.9 29.7-17.9 39.2c19.8 7.4 33.9 26.4 33.9 48.8c0 28.7-23.3 52-52 52l-68 0c-4.4 0-8-3.6-8-8l0-24 0-64 0-64 0-24zm16 24l0 56 44 0c19.9 0 36-16.1 36-36s-16.1-36-36-36l-44 0 0 16zm44 72l-44 0 0 56 0 16 60 0c19.9 0 36-16.1 36-36s-16.1-36-36-36l-16 0z" />
    </Icon>
);

export default InputText;