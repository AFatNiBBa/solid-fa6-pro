
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-binary` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-binary?s=sharp-duotone-solid cloud-binary}
 * @preview ![cloud-binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-binary.svg)
 */
const CloudBinary: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 336L0 480l144 0 368 0 128 0 0-128c0-59.6-40.8-109.8-96-124l0-36c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192l0 8.2C40.1 220 0 273.3 0 336zM160 160l16 0 64 0 16 0c0 5.3 0 10.7 0 16c0 26.7 0 53.3 0 80c0 5.3 0 10.7 0 16l-16 0-64 0-16 0c0-5.3 0-10.7 0-16c0-26.7 0-53.3 0-80c0-5.3 0-10.7 0-16zm16 144l16 0 16 0 16 0c0 5.3 0 10.7 0 16c0 26.7 0 53.3 0 80c0 5.3 0 10.7 0 16l-32 0c0-5.3 0-10.7 0-16c0-21.3 0-42.7 0-64l-16 0c0-10.7 0-21.3 0-32zm16-112c0 16 0 32 0 48l32 0c0-16 0-32 0-48l-32 0zm80 112l16 0 64 0 16 0 0 16 0 80 0 16-16 0-64 0-16 0c0-5.3 0-10.7 0-16c0-26.7 0-53.3 0-80c0-5.3 0-10.7 0-16zm16-144l16 0 16 0 16 0 0 16 0 80 0 16-32 0c0-5.3 0-10.7 0-16c0-21.3 0-42.7 0-64l-16 0c0-10.7 0-21.3 0-32zm16 176c0 16 0 32 0 48l32 0 0-48-32 0zm80-176l16 0 64 0 16 0 0 16 0 80 0 16-16 0-64 0-16 0 0-16 0-80 0-16zm16 144l16 0 16 0 16 0 0 16 0 80 0 16-32 0 0-16 0-64-16 0 0-32zm16-112l0 48 32 0 0-48-32 0z" />
        <path d="M176 160l-16 0 0 16 0 80 0 16 16 0 64 0 16 0 0-16 0-80 0-16-16 0-64 0zm16 80l0-48 32 0 0 48-32 0zm112-80l-16 0 0 32 16 0 0 64 0 16 32 0 0-16 0-80 0-16-16 0-16 0zm80 0l0 16 0 80 0 16 16 0 64 0 16 0 0-16 0-80 0-16-16 0-64 0-16 0zm32 32l32 0 0 48-32 0 0-48zM192 304l-16 0 0 32 16 0 0 64 0 16 32 0 0-16 0-80 0-16-16 0-16 0zm80 0l0 16 0 80 0 16 16 0 64 0 16 0 0-16 0-80 0-16-16 0-64 0-16 0zm32 32l32 0 0 48-32 0 0-48zm112-32l-16 0 0 32 16 0 0 64 0 16 32 0 0-16 0-80 0-16-16 0-16 0z" />
    </Icon>
);

export default CloudBinary;