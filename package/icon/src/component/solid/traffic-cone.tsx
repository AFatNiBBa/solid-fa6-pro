
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `traffic-cone` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/traffic-cone?s=solid traffic-cone}
 * @preview ![traffic-cone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjIuMTI1IDE5MkgxNDkuODc1TDExMS42MjUgMjg4SDQwMC4zNzVMMzYyLjEyNSAxOTJaTTI4OS43NSAxMC4xMjVDMjg3LjI1IDQgMjgxLjM3NSAwIDI3NC44NzUgMEgyMzcuMTI1QzIzMC42MjUgMCAyMjQuNzUgNCAyMjIuMjUgMTAuMTI1TDE3NS4zNzUgMTI4SDMzNi42MjVMMjg5Ljc1IDEwLjEyNVpNNDgwIDQ0OEg0NjRMNDI1Ljc1IDM1Mkg4Ni4yNUw0OCA0NDhIMzJDMTQuMzI3IDQ0OCAwIDQ2Mi4zMjcgMCA0ODBWNDgwQzAgNDk3LjY3MyAxNC4zMjcgNTEyIDMyIDUxMkg0ODBDNDk3LjY3MyA1MTIgNTEyIDQ5Ny42NzMgNTEyIDQ4MFY0ODBDNTEyIDQ2Mi4zMjcgNDk3LjY3MyA0NDggNDgwIDQ0OFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function TrafficCone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M362.125 192H149.875L111.625 288H400.375L362.125 192ZM289.75 10.125C287.25 4 281.375 0 274.875 0H237.125C230.625 0 224.75 4 222.25 10.125L175.375 128H336.625L289.75 10.125ZM480 448H464L425.75 352H86.25L48 448H32C14.327 448 0 462.327 0 480V480C0 497.673 14.327 512 32 512H480C497.673 512 512 497.673 512 480V480C512 462.327 497.673 448 480 448Z" />
        </Icon>
    </>
}