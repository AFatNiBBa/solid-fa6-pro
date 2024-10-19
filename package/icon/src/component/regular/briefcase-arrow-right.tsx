
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `briefcase-arrow-right` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-arrow-right?s=regular briefcase-arrow-right}
 * @preview ![briefcase-arrow-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yOTYuOTY5IDE5MS4wMzFDMjg3LjU5NCAxODEuNjU2IDI3Mi40MDYgMTgxLjY1NiAyNjMuMDMxIDE5MS4wMzFTMjUzLjY1NiAyMTUuNTk0IDI2My4wMzEgMjI0Ljk2OUwzMDIuMDYyIDI2NEgxNTJDMTM4Ljc1IDI2NCAxMjggMjc0Ljc1IDEyOCAyODhTMTM4Ljc1IDMxMiAxNTIgMzEySDMwMi4wNjJMMjYzLjAzMSAzNTEuMDMxQzI1OC4zNDQgMzU1LjcxOSAyNTYgMzYxLjg0NCAyNTYgMzY4UzI1OC4zNDQgMzgwLjI4MSAyNjMuMDMxIDM4NC45NjlDMjcyLjQwNiAzOTQuMzQ0IDI4Ny41OTQgMzk0LjM0NCAyOTYuOTY5IDM4NC45NjlMMzc2Ljk2OSAzMDQuOTY5QzM4Ni4zNDQgMjk1LjU5NCAzODYuMzQ0IDI4MC40MDYgMzc2Ljk2OSAyNzEuMDMxTDI5Ni45NjkgMTkxLjAzMVpNNDQ4IDk2SDM4NFY2NEMzODQgMjguNjUyIDM1NS4zNDYgMCAzMjAgMEgxOTJDMTU2LjY1NCAwIDEyOCAyOC42NTIgMTI4IDY0Vjk2SDY0QzI4LjY1NCA5NiAwIDEyNC42NTIgMCAxNjBWNDE2QzAgNDUxLjM0NiAyOC42NTQgNDgwIDY0IDQ4MEg0NDhDNDgzLjM0NiA0ODAgNTEyIDQ1MS4zNDYgNTEyIDQxNlYxNjBDNTEyIDEyNC42NTIgNDgzLjM0NiA5NiA0NDggOTZaTTE3NiA2NEMxNzYgNTUuMTYyIDE4My4xNjQgNDggMTkyIDQ4SDMyMEMzMjguODM2IDQ4IDMzNiA1NS4xNjIgMzM2IDY0Vjk2SDE3NlY2NFpNNDY0IDQxNkM0NjQgNDI0Ljc5OSA0NTYuODAxIDQzMiA0NDggNDMySDY0QzU1LjE5OSA0MzIgNDggNDI0Ljc5OSA0OCA0MTZWMTYwQzQ4IDE1MS4xOTkgNTUuMTk5IDE0NCA2NCAxNDRINDQ4QzQ1Ni44MDEgMTQ0IDQ2NCAxNTEuMTk5IDQ2NCAxNjBWNDE2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function BriefcaseArrowRight(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M296.969 191.031C287.594 181.656 272.406 181.656 263.031 191.031S253.656 215.594 263.031 224.969L302.062 264H152C138.75 264 128 274.75 128 288S138.75 312 152 312H302.062L263.031 351.031C258.344 355.719 256 361.844 256 368S258.344 380.281 263.031 384.969C272.406 394.344 287.594 394.344 296.969 384.969L376.969 304.969C386.344 295.594 386.344 280.406 376.969 271.031L296.969 191.031ZM448 96H384V64C384 28.652 355.346 0 320 0H192C156.654 0 128 28.652 128 64V96H64C28.654 96 0 124.652 0 160V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V160C512 124.652 483.346 96 448 96ZM176 64C176 55.162 183.164 48 192 48H320C328.836 48 336 55.162 336 64V96H176V64ZM464 416C464 424.799 456.801 432 448 432H64C55.199 432 48 424.799 48 416V160C48 151.199 55.199 144 64 144H448C456.801 144 464 151.199 464 160V416Z" />
        </Icon>
    </>
}