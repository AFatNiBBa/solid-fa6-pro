
import { Icon } from "../../index";

/**
 * A component that renders the `input-text` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/input-text?s=sharp-thin input-text}
 * @preview ![input-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/input-text.svg)
 */
const InputText: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 80l0 352 608 0 0-352L16 80zM0 64l16 0 608 0 16 0 0 16 0 352 0 16-16 0L16 448 0 448l0-16L0 80 0 64zm280 96l32 0 20 0c28.7 0 52 23.3 52 52c0 15.7-6.9 29.7-17.9 39.2c19.8 7.4 33.9 26.4 33.9 48.8c0 28.7-23.3 52-52 52l-36 0-32 0-8 0 0-8 0-24 0-64 0-64 0-24 0-8 8 0zM248.7 352l-17.4 0-17.4-40-107.8 0L88.7 352l-17.4 0 1.4-3.2 80-184 2.1-4.8 10.5 0 2.1 4.8 80 184 1.4 3.2zM160 188.1L113.1 296l93.9 0L160 188.1zM288 192l0 56 44 0c19.9 0 36-16.1 36-36s-16.1-36-36-36l-44 0 0 16zm44 72l-44 0 0 56 0 16 60 0c19.9 0 36-16.1 36-36s-16.1-36-36-36l-16 0z" />
    </Icon>
);

export default InputText;