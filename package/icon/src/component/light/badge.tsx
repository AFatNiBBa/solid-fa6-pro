
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `badge` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/badge?s=light badge}
 * @preview ![badge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgNTEyQzIyMC41IDUxMiAxODcuODc1IDQ5Mi42MjUgMTcwLjUgNDYyLjM3NUMxMzguMzc1IDQ3MS4xMjUgMTAxLjUgNDYzLjUgNzUgNDM3QzQ5Ljg3NSA0MTEuODc1IDQwLjUgMzc1LjEyNSA0OS42MjUgMzQxLjVDMTkuMzc1IDMyNC4yNSAwIDI5MS41IDAgMjU2UzE5LjM3NSAxODcuNzUgNDkuNjI1IDE3MC41QzQwLjUgMTM2Ljg3NSA0OS44NzUgMTAwLjEyNSA3NSA3NVMxMzYuODc1IDQwLjUgMTcwLjUgNDkuNjI1QzE4Ny43NSAxOS4zNzUgMjIwLjUgMCAyNTYgMFMzMjQuMjUgMTkuMzc1IDM0MS41IDQ5LjYyNUMzNzUuMTI1IDQwLjUgNDExLjg3NSA0OS44NzUgNDM3IDc1UzQ3MS41IDEzNi44NzUgNDYyLjM3NSAxNzAuNUM0OTIuNjI1IDE4Ny43NSA1MTIgMjIwLjUgNTEyIDI1NlM0OTIuNjI1IDMyNC4yNSA0NjIuMzc1IDM0MS41QzQ3MS41IDM3NS4xMjUgNDYyLjEyNSA0MTEuODc1IDQzNyA0MzdDNDEwLjg3NSA0NjMuMTI1IDM3NC4yNSA0NzEuMjUgMzQxLjUgNDYyLjM3NUMzMjQuMTI1IDQ5Mi42MjUgMjkxLjUgNTEyIDI1NiA1MTJaTTE4Ny43NSA0MjAuODc1QzE5MS4yNSA0MzAuNSAyMDMuODc1IDQ4MCAyNTYgNDgwQzMwNyA0ODAgMzE5Ljc1IDQzMyAzMjQuMjUgNDIwLjg3NUMzNTYuODc1IDQzNS43NSAzODUuNSA0NDMuMjUgNDE0LjM3NSA0MTQuMzc1QzQ1MC4zNzUgMzc4LjM3NSA0MjYuMjUgMzM2LjEyNSA0MjAuODc1IDMyNC4yNUM0MzAuNSAzMjAuNzUgNDgwIDMwOC4xMjUgNDgwIDI1NkM0ODAgMjA1IDQzMyAxOTIuMjUgNDIwLjg3NSAxODcuNzVDNDI1LjI1IDE3OC4xMjUgNDUxLjI1IDEzNC4yNSA0MTQuMzc1IDk3LjYyNUMzNzguMzc1IDYxLjYyNSAzMzYuMTI1IDg1Ljc1IDMyNC4yNSA5MS4xMjVDMzIwLjc1IDgxLjUgMzA4LjEyNSAzMiAyNTYgMzJDMjA1IDMyIDE5Mi4yNSA3OSAxODcuNzUgOTEuMTI1QzE3OC4zNzUgODYuODc1IDEzNC4zNzUgNjAuNzUgOTcuNjI1IDk3LjYyNUM2MS42MjUgMTMzLjYyNSA4NS43NSAxNzUuODc1IDkxLjEyNSAxODcuNzVDODEuNSAxOTEuMjUgMzIgMjAzLjg3NSAzMiAyNTZDMzIgMzA3IDc5IDMxOS43NSA5MS4xMjUgMzI0LjI1Qzg2Ljc1IDMzMy44NzUgNjAuNzUgMzc3Ljc1IDk3LjYyNSA0MTQuMzc1QzEyNi4zNzUgNDQzLjEyNSAxNTUuMTI1IDQzNS43NSAxODcuNzUgNDIwLjg3NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Badge(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 512C220.5 512 187.875 492.625 170.5 462.375C138.375 471.125 101.5 463.5 75 437C49.875 411.875 40.5 375.125 49.625 341.5C19.375 324.25 0 291.5 0 256S19.375 187.75 49.625 170.5C40.5 136.875 49.875 100.125 75 75S136.875 40.5 170.5 49.625C187.75 19.375 220.5 0 256 0S324.25 19.375 341.5 49.625C375.125 40.5 411.875 49.875 437 75S471.5 136.875 462.375 170.5C492.625 187.75 512 220.5 512 256S492.625 324.25 462.375 341.5C471.5 375.125 462.125 411.875 437 437C410.875 463.125 374.25 471.25 341.5 462.375C324.125 492.625 291.5 512 256 512ZM187.75 420.875C191.25 430.5 203.875 480 256 480C307 480 319.75 433 324.25 420.875C356.875 435.75 385.5 443.25 414.375 414.375C450.375 378.375 426.25 336.125 420.875 324.25C430.5 320.75 480 308.125 480 256C480 205 433 192.25 420.875 187.75C425.25 178.125 451.25 134.25 414.375 97.625C378.375 61.625 336.125 85.75 324.25 91.125C320.75 81.5 308.125 32 256 32C205 32 192.25 79 187.75 91.125C178.375 86.875 134.375 60.75 97.625 97.625C61.625 133.625 85.75 175.875 91.125 187.75C81.5 191.25 32 203.875 32 256C32 307 79 319.75 91.125 324.25C86.75 333.875 60.75 377.75 97.625 414.375C126.375 443.125 155.125 435.75 187.75 420.875Z" />
        </Icon>
    </>
}