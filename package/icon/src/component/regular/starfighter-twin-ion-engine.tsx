
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `starfighter-twin-ion-engine` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/starfighter-twin-ion-engine?s=regular starfighter-twin-ion-engine}
 * @preview ![starfighter-twin-ion-engine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01NTIgMzJMNTUyIDMyQzUzOC43NDUgMzIgNTI4IDQyLjc0NSA1MjggNTZWMTk1LjI1TDQyMS44NzUgMTY4Ljc1QzM5My4yNSAxMjUgMzQ0LjEyNSA5NiAyODggOTZTMTgyLjc1IDEyNSAxNTQuMTI1IDE2OC43NUw0OCAxOTUuMjVWNTZDNDggNDIuNzQ1IDM3LjI1NSAzMiAyNCAzMkgyNEMxMC43NDUgMzIgMCA0Mi43NDUgMCA1NlY0NTZDMCA0NjkuMjU1IDEwLjc0NSA0ODAgMjQgNDgwSDI0QzM3LjI1NSA0ODAgNDggNDY5LjI1NSA0OCA0NTZWMzE2Ljc1TDE1NC4xMjUgMzQzLjI1QzE4Mi43NSAzODcgMjMxLjg3NSA0MTYgMjg4IDQxNlMzOTMuMjUgMzg3IDQyMS44NzUgMzQzLjI1TDUyOCAzMTYuNzVWNDU2QzUyOCA0NjkuMjU1IDUzOC43NDUgNDgwIDU1MiA0ODBMNTUyIDQ4MEM1NjUuMjU1IDQ4MCA1NzYgNDY5LjI1NSA1NzYgNDU2VjU2QzU3NiA0Mi43NDUgNTY1LjI1NSAzMiA1NTIgMzJaTTEzMS4yNSAyODguMTI1TDU2IDI2OS4yNVYyNDIuNzVMMTMxLjI1IDIyMy44NzVDMTI2Ljg3NSAyNDUuMTI1IDEyNi44NzUgMjY2Ljg3NSAxMzEuMjUgMjg4LjEyNVpNMzA0IDE0NS42MjVDMzIyLjM3NSAxNDguMjUgMzM5Ljg3NSAxNTUuNSAzNTQuNzUgMTY2LjYyNUwzMjYuMjUgMTk1LjEyNUMzMTkuMzc1IDE5MC44NzUgMzExLjg3NSAxODcuNzUgMzA0IDE4NS44NzVWMTQ1LjYyNVpNMjcyIDE0NS42MjVWMTg1Ljg3NUMyNjQuMTI1IDE4Ny43NSAyNTYuNjI1IDE5MC44NzUgMjQ5Ljc1IDE5NS4xMjVMMjIxLjI1IDE2Ni42MjVDMjM2LjEyNSAxNTUuNSAyNTMuNjI1IDE0OC4yNSAyNzIgMTQ1LjYyNVpNMTk4LjYyNSAxODkuMjVMMjI3LjEyNSAyMTcuNzVDMjIyLjg3NSAyMjQuNjI1IDIxOS43NSAyMzIuMTI1IDIxNy44NzUgMjQwSDE3Ny42MjVDMTgwLjI1IDIyMS42MjUgMTg3LjUgMjA0LjEyNSAxOTguNjI1IDE4OS4yNVpNMTc3LjYyNSAyNzJIMjE3Ljg3NUMyMTkuNzUgMjc5Ljg3NSAyMjIuODc1IDI4Ny4zNzUgMjI3LjEyNSAyOTQuMjVMMTk4LjYyNSAzMjIuNzVDMTg3LjUgMzA3Ljg3NSAxODAuMjUgMjkwLjM3NSAxNzcuNjI1IDI3MlpNMjcyIDM2Ni4zNzVDMjUzLjYyNSAzNjMuNzUgMjM2LjEyNSAzNTYuNSAyMjEuMjUgMzQ1LjM3NUwyNDkuNzUgMzE2Ljg3NUMyNTYuNjI1IDMyMS4xMjUgMjY0LjEyNSAzMjQuMjUgMjcyIDMyNi4xMjVWMzY2LjM3NVpNMjY0IDI1NkMyNjQgMjQyLjc1IDI3NC43NSAyMzIgMjg4IDIzMlMzMTIgMjQyLjc1IDMxMiAyNTZDMzEyIDI2OS4yNSAzMDEuMjUgMjgwIDI4OCAyODBTMjY0IDI2OS4yNSAyNjQgMjU2Wk0zMDQgMzY2LjM3NVYzMjYuMTI1QzMxMS44NzUgMzI0LjI1IDMxOS4zNzUgMzIxLjEyNSAzMjYuMjUgMzE2Ljg3NUwzNTQuNzUgMzQ1LjM3NUMzMzkuODc1IDM1Ni41IDMyMi4zNzUgMzYzLjc1IDMwNCAzNjYuMzc1Wk0zNzcuMzc1IDMyMi43NUwzNDguODc1IDI5NC4yNUMzNTMuMTI1IDI4Ny4zNzUgMzU2LjI1IDI3OS44NzUgMzU4LjEyNSAyNzJIMzk4LjM3NUMzOTUuNzUgMjkwLjM3NSAzODguNSAzMDcuODc1IDM3Ny4zNzUgMzIyLjc1Wk0zNTguMTI1IDI0MEMzNTYuMjUgMjMyLjEyNSAzNTMuMTI1IDIyNC42MjUgMzQ4Ljg3NSAyMTcuNzVMMzc3LjM3NSAxODkuMjVDMzg4LjUgMjA0LjEyNSAzOTUuNzUgMjIxLjYyNSAzOTguMzc1IDI0MEgzNTguMTI1Wk01MjAgMjY5LjI1TDQ0NC43NSAyODguMTI1QzQ0OS4xMjUgMjY2Ljg3NSA0NDkuMTI1IDI0NS4xMjUgNDQ0Ljc1IDIyMy44NzVMNTIwIDI0Mi43NVYyNjkuMjVaIi8+PC9zdmc+|width=32|height=32)
 */
export default function StarfighterTwinIonEngine(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M552 32L552 32C538.745 32 528 42.745 528 56V195.25L421.875 168.75C393.25 125 344.125 96 288 96S182.75 125 154.125 168.75L48 195.25V56C48 42.745 37.255 32 24 32H24C10.745 32 0 42.745 0 56V456C0 469.255 10.745 480 24 480H24C37.255 480 48 469.255 48 456V316.75L154.125 343.25C182.75 387 231.875 416 288 416S393.25 387 421.875 343.25L528 316.75V456C528 469.255 538.745 480 552 480L552 480C565.255 480 576 469.255 576 456V56C576 42.745 565.255 32 552 32ZM131.25 288.125L56 269.25V242.75L131.25 223.875C126.875 245.125 126.875 266.875 131.25 288.125ZM304 145.625C322.375 148.25 339.875 155.5 354.75 166.625L326.25 195.125C319.375 190.875 311.875 187.75 304 185.875V145.625ZM272 145.625V185.875C264.125 187.75 256.625 190.875 249.75 195.125L221.25 166.625C236.125 155.5 253.625 148.25 272 145.625ZM198.625 189.25L227.125 217.75C222.875 224.625 219.75 232.125 217.875 240H177.625C180.25 221.625 187.5 204.125 198.625 189.25ZM177.625 272H217.875C219.75 279.875 222.875 287.375 227.125 294.25L198.625 322.75C187.5 307.875 180.25 290.375 177.625 272ZM272 366.375C253.625 363.75 236.125 356.5 221.25 345.375L249.75 316.875C256.625 321.125 264.125 324.25 272 326.125V366.375ZM264 256C264 242.75 274.75 232 288 232S312 242.75 312 256C312 269.25 301.25 280 288 280S264 269.25 264 256ZM304 366.375V326.125C311.875 324.25 319.375 321.125 326.25 316.875L354.75 345.375C339.875 356.5 322.375 363.75 304 366.375ZM377.375 322.75L348.875 294.25C353.125 287.375 356.25 279.875 358.125 272H398.375C395.75 290.375 388.5 307.875 377.375 322.75ZM358.125 240C356.25 232.125 353.125 224.625 348.875 217.75L377.375 189.25C388.5 204.125 395.75 221.625 398.375 240H358.125ZM520 269.25L444.75 288.125C449.125 266.875 449.125 245.125 444.75 223.875L520 242.75V269.25Z" />
        </Icon>
    </>
}