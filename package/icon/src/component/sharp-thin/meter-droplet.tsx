
import { Icon } from "../../index";

/**
 * A component that renders the `meter-droplet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter-droplet?s=sharp-thin meter-droplet}
 * @preview ![meter-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/meter-droplet.svg)
 */
const MeterDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 496c51.3 0 98.9-16.1 137.9-43.5c2 5.1 4.2 10 6.8 14.8C359.5 495.5 309.7 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0C369.8 0 466.3 74.3 499.6 177l-11.5 17.6C461 91.8 367.3 16 256 16C123.5 16 16 123.5 16 256s107.5 240 240 240zM144 144l0 64 32 0 0-64-32 0zm-16-16l16 0 32 0 16 0 0 16 0 64 0 16-16 0-32 0-16 0 0-16 0-64 0-16zm112 16l0 64 32 0 0-64-32 0zm0-16l32 0 16 0 0 16 0 64 0 16-16 0-32 0-16 0 0-16 0-64 0-16 16 0zm96 16l0 64 32 0 0-64-32 0zm-16-16l16 0 32 0 16 0 0 16 0 64 0 16-16 0-32 0-16 0 0-16 0-64 0-16zM447.9 344.3c-10.4 15.9-15.9 34.5-15.9 53.5l0 2.1c0 53 43 96 96 96s96-43 96-96l0-2.1c0-19-5.5-37.6-15.9-53.5L528 221.3l-80.1 123zm-13.4-8.7l84-128.9L528 192l9.5 14.7 84 128.9c12.1 18.5 18.5 40.2 18.5 62.3l0 2.1c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-2.1c0-22.1 6.4-43.7 18.5-62.3z" />
    </Icon>
);

export default MeterDroplet;