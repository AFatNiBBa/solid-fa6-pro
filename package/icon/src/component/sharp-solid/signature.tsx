
import { Icon } from "../../index";

/**
 * A component that renders the `signature` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature?s=sharp-solid signature}
 * @preview ![signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/signature.svg)
 */
const Signature: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 7.8c0 27.7-2.4 55.3-7.1 82.5l-130 39L96 264.2 96 288l0 160 0 32 32 0 64 0 18.6 0 9.2-16.1 25.5-44.7c26.8-47 46.5-97.7 58.4-150.5l94.4-28.3-12.5 37.5-14 42.1 44.4 0 128 0 32 0 0-64-32 0-83.6 0 18-53.9 19.5-58.5-59 17.7L316.4 198.1c2.4-20.7 3.6-41.4 3.6-62.3l0-7.8c0-53-43-96-96-96s-96 43-96 96l0 32 0 32 64 0 0-32 0-32zM160 311.8l71.8-21.5c-10.4 33.8-24.5 66.4-42.1 97.2L173.4 416 160 416l0-104.2zM24 368L0 368l0 48 24 0 40.3 0c-.2-2.8-.3-5.6-.3-8.5L64 368l-40 0zm592 48l24 0 0-48-24 0-310.1 0c-6.7 16.3-14.2 32.3-22.3 48L616 416z" />
    </Icon>
);

export default Signature;