
import { Icon } from "../../index";

/**
 * A component that renders the `car` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car?s=thin car}
 * @preview ![car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/car.svg)
 */
const Car: typeof Icon = x => (
    <Icon {...x}>
        <path d="M106.4 88.6L76.3 194c6.4-1.3 12.9-2 19.7-2l320 0c6.7 0 13.3 .7 19.7 2L405.6 88.6c-6.9-24-28.8-40.6-53.8-40.6L160.3 48c-25 0-47 16.6-53.8 40.6zM58 199.8L91 84.2C99.9 53.3 128.1 32 160.3 32l191.4 0c32.1 0 60.4 21.3 69.2 52.2l33 115.6c34.1 14.7 58 48.7 58 88.2l0 96 0 16 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48 0-16 0-96c0-39.5 23.9-73.5 58-88.2zM416 384l16 0 64 0 0-96c0-44.2-35.8-80-80-80L96 208c-44.2 0-80 35.8-80 80l0 96 64 0 16 0 320 0zm16 16l0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48-64 0zM16 400l0 48c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-48-64 0zm96-112a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Car;