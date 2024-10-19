
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `helmet-battle` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/helmet-battle?s=solid helmet-battle}
 * @preview ![helmet-battle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMS45OTQgMjU2QzQ5LjYxOSAyNTYgNjMuOTk0IDI0My41IDYzLjk5NCAyMjhWMEwwLjk5MyAyMjEuMTI1Qy00LjEzMiAyMzguODc1IDExLjI0MyAyNTYgMzEuOTk0IDI1NlpNNTc1LjAwNyAyMjEuMTI1TDUxMi4wMDYgMFYyMjhDNTEyLjAwNiAyNDMuNSA1MjYuMzgxIDI1NiA1NDQuMDA2IDI1NkM1NjQuNzU3IDI1NiA1ODAuMTMyIDIzOC44NzUgNTc1LjAwNyAyMjEuMTI1Wk00ODAuMDA1IDIxMC44NzVDNDgwLjAwNSA5MC4zNzUgMjg4IDAgMjg4IDBTOTUuOTk1IDkwLjM3NSA5NS45OTUgMjEwLjg3NUM5NS45OTUgMjkzLjYyNSA3My4xMiAzNTYuNzUgNjQuODY5IDM5MS41QzYxLjQ5NCA0MDYgNjguNDk0IDQyMC44NzUgODEuMjQ1IDQyNi43NUwyNTUuOTk5IDUxMlYyNTZMMTU5Ljk5NyAyMjRWMTkySDQxNi4wMDNWMjI0TDMyMC4wMDEgMjU2VjUxMkw0OTQuODggNDI2Ljc1QzUwNy41MDYgNDIwLjg3NSA1MTQuNjMxIDQwNiA1MTEuMTMxIDM5MS41QzUwMi44OCAzNTYuNzUgNDgwLjAwNSAyOTMuNjI1IDQ4MC4wMDUgMjEwLjg3NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HelmetBattle(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M31.994 256C49.619 256 63.994 243.5 63.994 228V0L0.993 221.125C-4.132 238.875 11.243 256 31.994 256ZM575.007 221.125L512.006 0V228C512.006 243.5 526.381 256 544.006 256C564.757 256 580.132 238.875 575.007 221.125ZM480.005 210.875C480.005 90.375 288 0 288 0S95.995 90.375 95.995 210.875C95.995 293.625 73.12 356.75 64.869 391.5C61.494 406 68.494 420.875 81.245 426.75L255.999 512V256L159.997 224V192H416.003V224L320.001 256V512L494.88 426.75C507.506 420.875 514.631 406 511.131 391.5C502.88 356.75 480.005 293.625 480.005 210.875Z" />
        </Icon>
    </>
}