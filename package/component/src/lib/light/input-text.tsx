
import { Icon } from "../../index";

/**
 * A component that renders the `input-text` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-text?s=light input-text}
 * @preview ![input-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/input-text.svg)
 */
const InputText: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l512 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32L64 96zM0 128C0 92.7 28.7 64 64 64l512 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm176 32c6.5 0 12.4 4 14.9 10.1l64 160c3.3 8.2-.7 17.5-8.9 20.8s-17.5-.7-20.8-8.9L216.4 320l-.4 0-80 0-.4 0-8.8 21.9c-3.3 8.2-12.6 12.2-20.8 8.9s-12.2-12.6-8.9-20.8l64-160c2.4-6.1 8.3-10.1 14.9-10.1zm0 59.1L148.4 288l55.1 0L176 219.1zM288 176c0-8.8 7.2-16 16-16l56 0c30.9 0 56 25.1 56 56c0 12.1-3.8 23.3-10.4 32.5C421.5 258.4 432 276 432 296c0 30.9-25.1 56-56 56l-72 0c-8.8 0-16-7.2-16-16l0-16 0-64 0-64 0-16zm72 96l-40 0 0 48 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0zm0-32c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0 48 40 0z" />
    </Icon>
);

export default InputText;