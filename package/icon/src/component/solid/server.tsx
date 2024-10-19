
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `server` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/server?s=solid server}
 * @preview ![server](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00ODAgMjg4SDMyQzE0LjM3NSAyODggMCAzMDIuMzc1IDAgMzIwVjQ0OEMwIDQ2NS42MjUgMTQuMzc1IDQ4MCAzMiA0ODBINDgwQzQ5Ny42MjUgNDgwIDUxMiA0NjUuNjI1IDUxMiA0NDhWMzIwQzUxMiAzMDIuMzc1IDQ5Ny42MjUgMjg4IDQ4MCAyODhaTTM1MiA0MDhDMzM4Ljc1IDQwOCAzMjggMzk3LjI1IDMyOCAzODRTMzM4Ljc1IDM2MCAzNTIgMzYwUzM3NiAzNzAuNzUgMzc2IDM4NFMzNjUuMjUgNDA4IDM1MiA0MDhaTTQxNiA0MDhDNDAyLjc1IDQwOCAzOTIgMzk3LjI1IDM5MiAzODRTNDAyLjc1IDM2MCA0MTYgMzYwUzQ0MCAzNzAuNzUgNDQwIDM4NFM0MjkuMjUgNDA4IDQxNiA0MDhaTTQ4MCAzMkgzMkMxNC4zNzUgMzIgMCA0Ni4zNzUgMCA2NFYxOTJDMCAyMDkuNjI1IDE0LjM3NSAyMjQgMzIgMjI0SDQ4MEM0OTcuNjI1IDIyNCA1MTIgMjA5LjYyNSA1MTIgMTkyVjY0QzUxMiA0Ni4zNzUgNDk3LjYyNSAzMiA0ODAgMzJaTTM1MiAxNTJDMzM4Ljc1IDE1MiAzMjggMTQxLjI1IDMyOCAxMjhTMzM4Ljc1IDEwNCAzNTIgMTA0UzM3NiAxMTQuNzUgMzc2IDEyOFMzNjUuMjUgMTUyIDM1MiAxNTJaTTQxNiAxNTJDNDAyLjc1IDE1MiAzOTIgMTQxLjI1IDM5MiAxMjhTNDAyLjc1IDEwNCA0MTYgMTA0UzQ0MCAxMTQuNzUgNDQwIDEyOFM0MjkuMjUgMTUyIDQxNiAxNTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Server(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M480 288H32C14.375 288 0 302.375 0 320V448C0 465.625 14.375 480 32 480H480C497.625 480 512 465.625 512 448V320C512 302.375 497.625 288 480 288ZM352 408C338.75 408 328 397.25 328 384S338.75 360 352 360S376 370.75 376 384S365.25 408 352 408ZM416 408C402.75 408 392 397.25 392 384S402.75 360 416 360S440 370.75 440 384S429.25 408 416 408ZM480 32H32C14.375 32 0 46.375 0 64V192C0 209.625 14.375 224 32 224H480C497.625 224 512 209.625 512 192V64C512 46.375 497.625 32 480 32ZM352 152C338.75 152 328 141.25 328 128S338.75 104 352 104S376 114.75 376 128S365.25 152 352 152ZM416 152C402.75 152 392 141.25 392 128S402.75 104 416 104S440 114.75 440 128S429.25 152 416 152Z" />
        </Icon>
    </>
}