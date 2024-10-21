
import { Icon } from "../../index";

/**
 * A component that renders the `salt-shaker` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salt-shaker?s=light salt-shaker}
 * @preview ![salt-shaker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/salt-shaker.svg)
 */
const SaltShaker: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M352 453.2c0-1.6-.1-3.2-.4-4.7L305.8 192 78.2 192 32.4 448.5c-.3 1.6-.4 3.1-.4 4.7C32 468 44 480 58.8 480l266.4 0c14.8 0 26.8-12 26.8-26.8zM300.1 160l-7.9-44.1C283.5 67.3 241.3 32 192 32s-91.5 35.3-100.2 83.9L83.9 160l216.1 0zm25.1 352L58.8 512C26.3 512 0 485.7 0 453.2c0-3.5 .3-6.9 .9-10.3L60.3 110.3C71.7 46.5 127.2 0 192 0s120.3 46.5 131.7 110.3l59.4 332.6c.6 3.4 .9 6.9 .9 10.3c0 32.5-26.3 58.8-58.8 58.8zM176 64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM144 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM151.9 242l-24 192c-1.1 8.8-9.1 15-17.9 13.9s-15-9.1-13.9-17.9l24-192c1.1-8.8 9.1-15 17.9-13.9s15 9.1 13.9 17.9zm112-4l24 192c1.1 8.8-5.1 16.8-13.9 17.9s-16.8-5.1-17.9-13.9l-24-192c-1.1-8.8 5.1-16.8 13.9-17.9s16.8 5.1 17.9 13.9z" />
    </Icon>
);

export default SaltShaker;